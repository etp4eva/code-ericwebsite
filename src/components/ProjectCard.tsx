import Image from 'next/image'
import { useRef, useState } from 'react';
import styles from '@/styles/ProjectCard.module.css'

interface ProjectCardProps {
    title: string;
    imgSrc: string;
    videoSrc?: string;
    blurb: string;
    imgWidth: number;
    imgHeight: number;
    imgScale: number;
    boxClassName: string;
    titleClassName: string;
    blurbClassName: string;
}

export const ProjectCard = (props: ProjectCardProps) => {
    const [isPlaying, setPlaying] = useState<Boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    const [width, height] = [
        props.imgWidth * props.imgScale,
        props.imgHeight * props.imgScale
    ]

    const imageBanner = (
        <Image 
            className={ styles.stacked }
            src={ props.imgSrc } 
            width={ width } height={ height } 
            alt={ props.title }             
        />
    );

    const videoBanner = (props.videoSrc) ? (
            <video
                ref={ videoRef }
                width={ width } height={ height } 
                loop
                className={ styles.stacked }
                hidden={ !isPlaying }
            >
                <source src={props.videoSrc} type="video/webm"/>
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
            className={ props.boxClassName }            
        >            
            <div 
                className={ styles.imgWindow }
            >                
                { imageBanner }
                { videoBanner }
            </div>
            <div className={ styles.textArea }>
                <h3 className={ props.titleClassName }>{ props.title }</h3>
                <p className={ props.blurbClassName } >{ props.blurb }</p> 
            </div>
        </article>
    )
}