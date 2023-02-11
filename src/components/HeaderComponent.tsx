import Image from 'next/image'
import styles from '@/styles/Header.module.scss'
import { Raleway } from '@next/font/google'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { TypeOfExpression } from 'typescript'

const raleway = Raleway({ subsets: ['latin'], weight: '400' })

export enum LockScale  {
    THIN     = 'THIN',
    THICK    = 'THICK',
    REACTIVE = 'REACTIVE',
};

interface HeaderProps {
    lockScale: LockScale
};

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export const Header = (props: HeaderProps) => {   
    const targetRef = useRef<HTMLElement>(null);
    const [width, height] = useWindowSize(); 
    const [scrollY, setScrollY] = useState(0);

    // holds the timer for setTimeout and clearInterval
    let movement_timer: ReturnType<typeof setTimeout>;

    // the number of ms the window size must stay the same size before the
    // dimension state variable is reset
    const RESET_TIMEOUT = 100;

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
    
        // just trigger this so that the initial state 
        // is updated as soon as the component is mounted
        // related: https://stackoverflow.com/a/63408216
        handleScroll();
    
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
                className={ [styles.titleThick, raleway.className].join(' ') }
            >
                Eric Pledger
            </h1>
        </header>
    ) : (<header className={ styles.padding }></header>);

    return (
        <>
            <header className={ [styles.headerThin, invisible].join(" ") }>
                <h1 
                    className={ [styles.titleThin, raleway.className].join(' ') }
                >
                    Eric Pledger
                </h1>
                <Image 
                    src="/images/eric.jpg"
                    className={ styles.roundImageThin }
                    height={100}
                    width={100}
                    alt="Eric Pledger" 
                />                                
                <div className={ styles.column3 }></div>
            </header>
            {thickHeader}
        </>
    )
}