import { PROJECTS } from "./projectData";

export function getAllProjects() {
    return PROJECTS;
}

export function getProjectType(type) {
    return PROJECTS.filter((project) => project.types.includes(type));
}

export function getTypes() {
    let arr = ["All"];
    for (let i = 0; i < PROJECTS.length; i++) {
        for (let j = 0; j < PROJECTS[i].types.length; j++) {
            const type = PROJECTS[i].types[j];
            if (!arr.includes(type)) {
                arr.push(type);
            }
        }
    }
    return arr;
}
