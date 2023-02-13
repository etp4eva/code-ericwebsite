import { ProjectSummary } from "@/components/ProjectCard"


// TODO: Central store for data / API thingywonk that this queries based on slug
const Projects = (project: ProjectSummary) => {
    return <p>{JSON.stringify(project)}</p>
}

export default Projects;