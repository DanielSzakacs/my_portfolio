// import mock09 from "../assets/images/mock09.png";
import "../assets/styles/Project.scss";
import aws_cloud_cert from "../assets/images/certs/aws_cloud.png";

function Certs() {
  return (
    <div className="projects-container" id="certs">
      <h1>Licenses & certifications</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://www.credly.com/badges/4d526946-2b80-4386-91a4-baa20746412f/linked_in_profile"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={aws_cloud_cert}
              className="zoom"
              alt="thumbnail"
              width="50%"
            />
          </a>
          <a
            href="https://www.credly.com/badges/4d526946-2b80-4386-91a4-baa20746412f/linked_in_profile"
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
    </div>
  );
}

export default Certs;
