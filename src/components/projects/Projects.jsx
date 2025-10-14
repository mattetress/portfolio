import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "./Project";
import { getAllProjects } from "../../data/utils";
import "./projects.scss";

const Projects = ({ currentSlide, setCurrentSlide }) => {
    const handleClick = (dir) => {
        if (dir === "back") {
            setCurrentSlide(
                currentSlide > 1 ? currentSlide - 1 : getAllProjects().length,
            );
        } else {
            setCurrentSlide(
                currentSlide === getAllProjects().length ? 1 : currentSlide + 1,
            );
        }
    };

    return (
        <div className="projects" id="projects">
            <div
                className="slider"
                style={{
                    transform: `translateX(-${(currentSlide - 1) * 100}vw)`,
                }}
            >
                {getAllProjects().map((project) => (
                    <Project project={project} />
                ))}
            </div>
            <FontAwesomeIcon
                icon={faChevronLeft}
                className="back"
                onClick={() => handleClick("back")}
            />
            <FontAwesomeIcon
                icon={faChevronRight}
                className="next"
                onClick={() => handleClick("next")}
            />
        </div>
    );
};

export default Projects;
