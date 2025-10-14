import React, { useEffect, useRef } from "react";
import "./info.scss";
import { init } from "ityped";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Info() {
    const titleRef = useRef();

    useEffect(() => {
        init(titleRef.current, {
            showCursor: true,
            backDelay: 1500,
            startDelay: 1000,
            backSpeed: 50,
            loop: false,
            strings: [
                "Techie",
                "Go Player",
                "Music Lover",
                "Software Engineer.",
            ],
        });
    }, []);

    return (
        <div className="info" id="info">
            <div className="left">
                <div className="imgContainer">
                    <img src="/assets/matt.png" alt="Matt" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there. I'm</h2>
                    <h1>Matthew Etress</h1>
                    <h3>
                        <span ref={titleRef}></span>
                    </h3>
                </div>
                <div className="social">
                    <a
                        href="https://github.com/rubymineshaft"
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                    >
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                        <span> RubyMineshaft </span>
                    </a>
                    <a
                        href="https://linkedin.com/in/mattetress"
                        className="social-link"
                    >
                        <FontAwesomeIcon
                            icon={faSquareLinkedin}
                            className="icon"
                        />
                        <span>mattetress</span>
                    </a>
                    <a
                        href="mailto:mattetress@gmail.com"
                        className="social-link"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        <span>mattetress@gmail.com</span>
                    </a>
                </div>
                <a href="#portfolio" id="down-arrow">
                    <FontAwesomeIcon icon={faCaretDown} />
                </a>
            </div>
        </div>
    );
}
