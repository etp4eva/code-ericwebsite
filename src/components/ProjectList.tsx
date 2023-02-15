import { ProjectSummary } from "@/lib/Projects";
import { ProjectCard } from "./ProjectCard";
import styles from '@/styles/ProjectList.module.scss'

interface ProjectListProps {
    projects: ProjectSummary[];
}

export const ProjectList = ({projects}: ProjectListProps) => {

    let projectCard = undefined;

    if (projects) {
        projectCard = projects.map((project, idx) => (
            <ProjectCard 
                key={idx}
                project={project}
            />
        ))
    }

    return (
        <div className={ styles.container }>
            <div className={ styles.headerContainer }>
                <h2>Projects</h2>
            </div>
            <div className={ styles.projectRows }>
                {
                    projectCard                    
                }                
            </div>
        </div>
    )
}