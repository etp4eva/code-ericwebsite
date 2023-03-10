import Image from 'next/image'
import styles from '@/styles/Header.module.scss'
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'

export enum LockScale  {
    THIN     = 'THIN',
    THICK    = 'THICK',
    REACTIVE = 'REACTIVE',
};

interface HeaderProps {
    lockScale: LockScale
};

const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };        
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return scrollY;
}

export const Header = (props: HeaderProps) => {   
    const targetRef = useRef<HTMLElement>(null);
    const scrollY = useScrollY();
        
    let invisible: string | null = styles.invisible;
    let padding;
    
    if (props.lockScale === LockScale.REACTIVE)
    {
        invisible = (scrollY < 273) ? styles.invisible : null;
    }
    else if (props.lockScale === LockScale.THIN)
    {
        invisible = null;
        padding = (<div className={ styles.padding }></div>)
    }

    const thickHeader = (props.lockScale !== LockScale.THIN) ? (
        <header ref={ targetRef } className={ styles.headerThick }>
            <Image 
                src="/images/eric.jpg"
                className={ styles.roundImageThick }
                height={100}
                width={100}
                alt="Eric Pledger" 
            />
            <h1 
                className={ styles.titleThick }
            >
                Eric Pledger
            </h1>
        </header>
    ) : (<header className={ styles.padding }></header>);

    return (
        <>
            { padding }
            <header className={ [styles.headerThin, invisible].join(" ") }>
                <h1 className={ styles.titleThin }>
                    <Link href="/">Eric Pledger</Link>
                </h1>
                             
                <div className={ styles.column2 }></div>

                <Link href="/">
                    <Image 
                        src="/images/eric.jpg"
                        className={ styles.roundImageThin }
                        height={100}
                        width={100}
                        alt="Eric Pledger" 
                    />
                </Link>
            </header>
            {thickHeader}
        </>
    )
}