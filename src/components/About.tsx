import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I build AI systems that actually ship. Over the last year I've taken
          six projects from blank repo to production — a voice-powered AI
          interviewer, a 3-agent agentic CRM, a real-time voice agent over
          Twilio, a 4-layer financial forecasting platform, a regulatory
          compliance RAG, and a 6-agent DSA solver that qualified me for the
          Meta HackerCup AI Track global finals. My work sits at the seams
          between LLMs and production systems.
        </p>
      </div>
    </div>
  );
};

export default About;
