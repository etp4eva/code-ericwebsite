import fs from 'fs';
import { Project, getProjectDetails, projectsDirectory } from "@/lib/Projects";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

interface ProjectsProps {
    project: Project,
}

interface IParams extends ParsedUrlQuery {
    slug: string
}

export const getStaticPaths = async () => {
    
    const fileNames = fs.readdirSync(projectsDirectory);

    const paths = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md/, '');

        return { params: { slug: slug } }
    })

    return {
        paths: paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (context)  => {
    const {slug} = context.params as IParams;
    const projectDetails = getProjectDetails(slug);

    return {
        props: {
            project: projectDetails,
        },
    };
}

export const Projects = ({ project }: ProjectsProps) => {
    return <p>{JSON.stringify(project)}</p>
}

export default Projects;