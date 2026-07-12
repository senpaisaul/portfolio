import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/Full-Stack Engineering Intern</h4>
                <h5>Scalistro AI</h5>
              </div>
              <h3>2026&ndash;</h3>
            </div>
            <p>
              May 2026 – Present. Building a 7-stage agentic UGC video-ad
              generation pipeline on Heygen, plus a competitive ad-intelligence system running a
              two-tier Claude pipeline over scraped Meta Ads data.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>WorkElate</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Feb – Mar 2026. Architected an email intent-classification &
              auto-routing system using FastAPI + LangChain LCEL. Built a
              regulatory compliance-checking RAG API with GPT-4o, evaluating
              retrieval quality on real document sets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GenAI Training Program</h4>
                <h5>Smart Bridge × GCP</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Nov 2025 – Jan 2026. Industry certification program: trained and
              deployed ML models on GCP Vertex AI — custom training pipelines, AutoML experiments, BigQuery
              feature engineering. Built Cloud Function inference endpoints
              serving model predictions via REST.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Global Finalist</h4>
                <h5>Meta HackerCup '25</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a 6-agent LangGraph pipeline that decomposes competitive
              programming problems into staged reasoning. Out-performed
              single-pass GPT-4o on correctness and qualified for the AI Track
              global finals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE</h4>
                <h5>VIT Bhopal</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              B.Tech Computer Science Engineering, graduated July 2026. CGPA
              7.93. Shipped 6+ production AI systems during
              college — from multi-agent pipelines to voice AI and financial
              forecasting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
