import React from "react";
import MenuItem from "./MenuItem";
import "./menu.scss";

export default function Menu({ menuActive, setMenuActive }) {
    return (
        <div className={"menu " + (menuActive && "active")}>
            <ul>
                <MenuItem
                    label="Home"
                    target="#info"
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                />
                <MenuItem
                    label="Portfolio"
                    target="#portfolio"
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                />
                <MenuItem
                    label="Projects"
                    target="#projects"
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                />
                <MenuItem
                    label="Contact"
                    target="#contact"
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                />
            </ul>
        </div>
    );
}
