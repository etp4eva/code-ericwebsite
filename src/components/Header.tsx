import Image from 'next/image'
import styles from '@/styles/Header.module.scss'
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'

export enum LockScale  {
    THIN     = 'THIN',
    THICK    = 'THICK',
    REACTIVE = 'REACTIVE',
};

interface HeaderProps {
    lockScale: LockScale
};

const useElementSize = (targetRef: RefObject<HTMLElement>) => {
    const [size, setSize] = useState([0, 0]);
    useEffect(() => {
      function updateSize() {
        if (targetRef.current)
            setSize([targetRef.current.clientWidth, targetRef.current.clientHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, [targetRef]);
    return size;
}

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
    const [width, height] = useElementSize(targetRef); 
    const scrollY = useScrollY();
        
    let invisible: string | null = styles.invisible;
    
    if (props.lockScale === LockScale.REACTIVE)
    {
        invisible = (scrollY < height - 55) ? styles.invisible : null;
    }
    else if (props.lockScale === LockScale.THIN)
    {
        invisible = null;
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
            <header className={ [styles.headerThin, invisible].join(" ") }>
                <h1 className={ styles.titleThin }>
                    Eric Pledger
                </h1>
                             
                <div className={ styles.column2 }></div>

                <Image 
                    src="/images/eric.jpg"
                    className={ styles.roundImageThin }
                    height={100}
                    width={100}
                    alt="Eric Pledger" 
                />   
            </header>
            {thickHeader}
        </>
    )
}