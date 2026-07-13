import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Skill Assessment Agent",
    category: "Voice-Powered AI Interviewer",
    tools: "LangGraph, Pipecat, Deepgram STT, ElevenLabs TTS, Chroma + ESCO, Next.js 15",
    image: "/images/skill-agent.png",
    link: "https://skill-assessment-agent-one.vercel.app",
  },
  {
    title: "SparsaOS",
    category: "Agentic CRM Pipeline",
    tools: "FastAPI, GPT-4o, asyncio, SSE Streaming, React 19, Supabase Postgres",
    image: "/images/github-card.png",
    link: "https://sparsaos.vercel.app",
  },
  {
    title: "Ad Intelligence Pipeline",
    category: "Competitive Meta Ads Analysis",
    tools: "Claude Haiku/Opus Two-Tier Pipeline, Apify, FastAPI, Next.js 14",
    image: "/images/github-card.png",
    link: "https://github.com/senpaisaul/brandora",
  },
  {
    title: "UniQuant",
    category: "4-Layer Financial Forecasting",
    tools: "Chronos T5-Small, GJR-GARCH, Gaussian HMM, Conformal Calibration, FastAPI",
    image: "/images/github-card.png",
    link: "https://github.com/senpaisaul/Uniquant",
  },
  {
    title: "Voice AI Agent",
    category: "Real-Time Voice Pipeline",
    tools: "Twilio Media Streams, Deepgram Nova-3, GPT-4o-mini, ElevenLabs, WebSocket",
    image: "/images/github-card.png",
    link: "https://github.com/senpaisaul/Sei-Wise-Customer-Support",
  },
  {
    title: "Multi-Agent DSA Solver",
    category: "Meta HackerCup '25 AI Track Finalist",
    tools: "LangGraph, GPT-4o, 6-Agent Pipeline, Chain-of-Thought Reasoning",
    image: "/images/github-card.png",
    link: "https://github.com/senpaisaul/multi-agent-dsa-solver",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Stack & Tools</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
