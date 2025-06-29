// import mock09 from "../assets/images/mock09.png";
import rag from "../assets/images/rag.png";
import dirty_cafa_data from "../assets/images/cafe_dirty_data.png";
import store from "../assets/images/store.png";
import "../assets/styles/Project.scss";
import GitHubIcon from "@mui/icons-material/GitHub";

import Chip from "@mui/material/Chip";

const ragTechStack = ["Python", "Pandas", "NumPy", "Gradio 5", "Transformers"];
const salesDemandTechStack = [
  "Python",
  "Optuna",
  "MLflow",
  "FastAPI",
  "Docker",
  "Pydantic",
];
const dirtyCaffeeDataTechStack = ["Python", "Pandas", "NumPy", "Jupyter"];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/DanielSzakacs/PR1_DE_Cafe_Sales_data_cleaning"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={dirty_cafa_data}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/DanielSzakacs/PR1_DE_Cafe_Sales_data_cleaning"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Cafe Sales - Data Cleaning & Feature Engineering</h2>
          </a>
          <p>
            This project demonstrates core data cleaning and feature engineering
            techniques using a small-scale, intentionally "dirty" dataset.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {dirtyCaffeeDataTechStack.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
          <p>
            <a
              href="https://github.com/DanielSzakacs/PR1_DE_Cafe_Sales_data_cleaning"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </p>
        </div>
        <div className="project">
          <a
            href="https://huggingface.co/spaces/DanielSokach/RAG"
            target="_blank"
            rel="noreferrer"
          >
            <img src={rag} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://huggingface.co/spaces/DanielSokach/RAG"
            target="_blank"
            rel="noreferrer"
          >
            <h2>RAG - Business Analysis (Live demo)</h2>
          </a>
          <p>
            This is a simple but complete Retrieval-Augmented Generation (RAG)
            demo. It uses a PDF textbook on business analysis as its knowledge
            source. The system can answer English questions by retrieving
            relevant parts of the document and generating answers using a
            language model.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {ragTechStack.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
          <p>
            <a
              href="https://github.com/DanielSzakacs/ML-RAG"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/DanielSzakacs/ML-Sales-Demand-Forecasting-MLOps"
            target="_blank"
            rel="noreferrer"
          >
            <img src={store} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/DanielSzakacs/ML-Sales-Demand-Forecasting-MLOps"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Sales Demand Forecasting with MLOps</h2>
          </a>
          <p>
            An End-to-End Machine Learning Project with Feature Engineering,
            Model Tuning, MLflow Tracking, API Deployment & Monitoring.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {salesDemandTechStack.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
          <p>
            <a
              href="https://github.com/DanielSzakacs/ML-Sales-Demand-Forecasting-MLOps"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
