import fs from 'fs';
import { Project, getProjectDetails, projectsDirectory } from "@/lib/Projects";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from 'next/head';
import { Header, LockScale } from '@/components/Header';
import { Raleway } from '@next/font/google';
import styles from '@/styles/Project.module.scss'
import { Footer } from '@/components/Footer';

const raleway = Raleway({ subsets: ['latin']})

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
    const projectDetails = await getProjectDetails(slug);

    return {
        props: {
            project: projectDetails,
        },
    };
}

export const Projects = ({ project }: ProjectsProps) => {
    return (
        <>
            <Head>
                <title>CODE // ERIC WEBSITE // {project.title}</title>
                <meta name="description" content="A little portfolio for a clever coder" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className={ [raleway.className, styles.body].join(" ") }>
                <Header lockScale={ LockScale.THIN } />

                { 
                    // TODO: banner with image background 
                }
                <h1>{project.title}</h1>
                <main 
                    className={ styles.contentBox } 
                    dangerouslySetInnerHTML={{ __html: project.content }}
                />

                < Footer />
            </body>
        </>
    )
}

export default Projects;