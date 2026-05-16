async function generateAESKey(password: string): Promise<CryptoKey> {
  const passwordBuffer = new TextEncoder().encode(password);
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBuffer);
  return crypto.subtle.importKey(
    "raw",
    hashedPassword.slice(0, 32),
    { name: "AES-CBC" },
    false,
    ["encrypt", "decrypt"]
  );
}

async function fetchWithRetry(
  url: string,
  retries: number = 3,
  delay: number = 1000
): Promise<ArrayBuffer> {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return await response.arrayBuffer();
    } catch (err) {
      console.warn(`Fetch attempt ${attempt + 1}/${retries} failed:`, err);
      if (attempt < retries - 1) {
        await new Promise((r) => setTimeout(r, delay * (attempt + 1)));
      } else {
        throw err;
      }
    }
  }
  throw new Error("All fetch attempts failed");
}

export const decryptFile = async (
  url: string,
  password: string
): Promise<ArrayBuffer> => {
  const encryptedData = await fetchWithRetry(url);
  const iv = new Uint8Array(encryptedData.slice(0, 16));
  const data = encryptedData.slice(16);
  const key = await generateAESKey(password);
  return crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, data);
};
