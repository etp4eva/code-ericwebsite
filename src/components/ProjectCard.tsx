import Image from 'next/image'
import { useRef, useState } from 'react';
import styles from '@/styles/ProjectCard.module.scss'
import Link from 'next/link';

export interface ProjectSummary {
    slug: string;
    title: string;
    tags: string[];
    blurb: string;
    imgSrc: string;
    videoSrc?: string;
    imgWidth: number;
    imgHeight: number;
    imgScale: number;
}

interface ProjectCardProps {
    project: ProjectSummary;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const [isPlaying, setPlaying] = useState<Boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    const [width, height] = [
        props.project.imgWidth * props.project.imgScale,
        props.project.imgHeight * props.project.imgScale
    ]

    const imageBanner = (
        <Image 
            className={ styles.stacked }
            src={ props.project.imgSrc } 
            width={ width } height={ height } 
            alt={ props.project.title }             
        />
    );

    const videoBanner = (props.project.videoSrc) ? (
            <video
                ref={ videoRef }
                width={ width } height={ height } 
                loop
                className={ styles.stacked }
                hidden={ !isPlaying }
            >
                <source src={props.project.videoSrc} type="video/webm"/>
            </video>
    ) : undefined; 

    const handleMouseEnter = (e: React.MouseEvent) => {
        if (videoBanner && videoRef.current)
        {
            videoRef.current.className = [styles.stacked, styles.fadeIn].join(' ')
            videoRef.current.play();
            setPlaying(true);            
        }
    }

    const handleMouseLeave = (e: React.MouseEvent) => {
        if (videoRef.current)
        {
            videoRef.current.className = styles.stacked;
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setPlaying(false);
    }

    return (        
        <article 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            className={styles.card} 
            style={{maxWidth: width}}           
        >            
            <Link 
                className={ styles.link } 
                href={`/projects/${encodeURIComponent(props.project.slug)}`}
            >    
                <div 
                    className={ styles.imgWindow }
                >                
                    { imageBanner }
                    { videoBanner }
                </div>
            
                <div className={ styles.textArea }>                
                        <h3>{ props.project.title }</h3>                
                        <p>{ props.project.blurb }</p>                 
                </div>
            </Link>
        </article>
    )
}