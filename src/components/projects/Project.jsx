import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LangIcon from "../langicon/LangIcon";
import "./project.scss";

const Project = ({ project }) => {
    function demoLink() {
        if (project.demoURL) {
            return (
                <a href={project.demoURL} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faEarthAmericas} className="icon" />
                    View live demo
                </a>
            );
        }
    }

    return (
        <div className="container">
            <div className="project">
                <div className="left">
                    <div className="leftContainer">
                        <div className="imgContainer">
                            <img src={project.largeImage} alt="" />
                        </div>
                        <div className="languages">
                            <h3>Languages</h3>
                            <div className="languageIcons">
                                {project.languages.map((language) => (
                                    <LangIcon language={language} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1>{project.title}</h1>
                    <div className="rightContainer">
                        {project.fullDesc.map((description) => (
                            <p>{description}</p>
                        ))}
                        <div className="bullets">
                            <ul>
                                {project.bullets.map((bullet) => (
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="check"
                                        />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="linksContainer">
                            <a
                                href={project.githubURL}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="icon"
                                />
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
