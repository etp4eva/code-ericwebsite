import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

export interface ProjectSummary {
    slug: string;
    title: string;
    tags: string[];
    blurb: string;
    imgSrc: string;
    videoSrc?: string;
    bannerSrc: string;
    imgWidth: number;
    imgHeight: number;
    imgScale: number;
}

export interface Project {
    title: string;
    bannerSrc: string;
    content: string;
}

export const projectsDirectory = path.join(process.cwd(), '/projects')

export const getProjectSummaries = (): ProjectSummary[] => {
    const fileNames = fs.readdirSync(projectsDirectory);

    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md/, '');
        const fullPath = path.join(projectsDirectory, fileName);        
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        const matterResult = matter(fileContents);

        const merged: ProjectSummary = {
            slug: slug,
            title: matterResult.data.title,
            tags: matterResult.data.tags,
            blurb: matterResult.data.blurb,
            imgSrc: matterResult.data.imgSrc,
            videoSrc: (matterResult.data.videoSrc) ? matterResult.data.videoSrc : null,
            bannerSrc: matterResult.data.bannerSrc,
            imgWidth: matterResult.data.imgWidth,
            imgHeight: matterResult.data.imgHeight,
            imgScale: matterResult.data.imgScale,
        }

        return merged;
    });

    return allPostsData;
}

export const getProjectDetails = async (slug: string) => {
    const fileName = `${slug}.md`;
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
        
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .use(remarkRehype, {allowDangerousHtml: true}) // Pass raw HTML strings through.
        .use(rehypeStringify, {allowDangerousHtml: true})
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const projectDetails: Project = {
        title: matterResult.data.title,
        bannerSrc: matterResult.data.bannerSrc,
        content: contentHtml,
    }

    return projectDetails;
}

export const getIntro = async () => {
    const contentDir = path.join(process.cwd(), '/content');
    const fullPath = path.join(contentDir, 'blurb.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .use(remarkRehype, {allowDangerousHtml: true}) // Pass raw HTML strings through.
        .use(rehypeStringify, {allowDangerousHtml: true})
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return contentHtml;
}