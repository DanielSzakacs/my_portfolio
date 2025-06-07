import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Vue.js",
  "Angular",
  "Java",
  "Puthon",
  "JavaScript",
  "TypeScript",
  "Vuetify",
  "Python",
  "Flask",
  "SQL",
  "PostgreSQL",
];

const labelsSecond = [
  "Git",
  "GitHub",
  "Actions",
  "Docker",
  "Linux",
  "Agile",
  "Scrum",
];

const labelsThird = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
  "NumPy",
  "Pandas",
  "Matplotlib",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have contributed to a wide range of web applications as part of
              agile teams, working with both frontend and backend technologies.
              My experience includes building components, integrating APIs, and
              maintaining scalable features using modern Java and JavaScript
              frameworks.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              I'm comfortable working with version control, deployment tools,
              and automation scripts. I've supported development workflows with
              CI/CD pipelines and containerization using Docker, and I'm
              familiar with cloud environments and Linux-based systems.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>AI/ML</h3>
            <p>
              I'm passionate about AI and data science. I've explored real-world
              use cases and implemented models using popular ML frameworks. My
              goal is to build smart, data-driven solutions that improve
              decision-making and add business value.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
