import { ProjectCard, ProjectSummary } from "./ProjectCard";
import styles from '@/styles/ProjectList.module.scss'

interface ProjectListProps {
    projects: ProjectSummary[];
}

export const ProjectList = (props: ProjectListProps) => {

    return (
        <div className={ styles.container }>
            <div className={ styles.headerContainer }>
                <h2>Projects</h2>
            </div>
            <div className={ styles.projectRows }>
                {
                    props.projects.map((project, idx) => (
                        <ProjectCard 
                            key={idx}
                            project={project}
                        />
                    ))                
                }
                
            </div>
        </div>
    )
}