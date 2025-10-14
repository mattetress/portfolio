import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.scss";

const Navbar = ({ menuActive, setMenuActive }) => {
    return (
        <div className={"navbar " + (menuActive && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#info" className="logo">
                        mattetress
                    </a>
                    <a
                        href="https://github.com/rubymineshaft"
                        className="social"
                    >
                        <FontAwesomeIcon icon={faGithub} className="icon" />

                        <span> RubyMineshaft </span>
                    </a>
                    <a
                        href="https://linkedin.com/in/mattetress"
                        className="social"
                    >
                        <FontAwesomeIcon
                            icon={faSquareLinkedin}
                            className="icon"
                        />
                        <span>mattetress</span>
                    </a>
                    <a href="mailto:mattetress@gmail.com" className="social">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <span>mattetress@gmail.com</span>
                    </a>
                </div>
                <div className="right">
                    <div
                        className="hamburgerMenu"
                        onClick={() => setMenuActive(!menuActive)}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
