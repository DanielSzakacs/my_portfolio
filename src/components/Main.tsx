import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div id="main" className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFrrhuFOOROYA/profile-displayphoto-shrink_200_200/B4DZdVZ2IbGUAg-/0/1749484528658?e=1755129600&v=beta&t=t1DU60Ir4cOtUNPRLSEos1xjxM-_5UBfBifIZhdOqdc"
            alt="profile_img"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/DanielSzakacs"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-szakacs/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Daniel Szakacs</h1>
          <p>Software Engineer</p>
          {/* <div className="lead-content">
            <a href="../assets/cv/CV_2025.docx" download className="cv">
              Download Resume
            </a>
          </div> */}

          <div className="mobile_social_icons">
            <a
              href="https://github.com/DanielSzakacs"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-szakacs/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
