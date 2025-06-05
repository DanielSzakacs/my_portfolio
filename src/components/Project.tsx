import mock09 from "../assets/images/mock09.png";
import rag from "../assets/images/rag.png";
import "../assets/styles/Project.scss";
import GitHubIcon from "@mui/icons-material/GitHub";

import Chip from "@mui/material/Chip";

const labelsFirst = ["Python 3", "Pandas", "Numpy", "Gradio 5", "Transformers"];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
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
            {labelsFirst.map((label, index) => (
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
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://yujisatojr.itch.io/highspeedchase"
            target="_blank"
            rel="noreferrer"
          >
            <h2>High Speed Chase</h2>
          </a>
          <p>
            Designed, developed, and launched a 3D multiplayer racing game with
            C# and Unity. This is available on Itch.io for gamers worldwide to
            enjoy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
