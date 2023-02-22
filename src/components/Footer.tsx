import styles from '@/styles/Footer.module.scss'
import { MouseEventHandler, useRef } from 'react'

// TODO: Glittering starfield animation in the background of the footer
// perahsp when you click the smiley

export const Footer = () => {
    
    const onClick: MouseEventHandler<HTMLElement> = (context) => {
        const t = context.currentTarget;
        window.open(`mailto:${t.dataset.name}@${t.dataset.domain}.${t.dataset.tld}`);
        return false;
    }

    const onMouseEnter: MouseEventHandler<HTMLElement> = (context) => {
        const t = context.currentTarget;
        t.textContent = `${t.dataset.name}@${t.dataset.domain}.${t.dataset.tld}`;
    }

    const onMouseLeave: MouseEventHandler<HTMLElement> = (context) => {
        const t = context.  currentTarget;
        t.textContent = `Email Me`;
    }
        
    return (
        <footer className={ styles.footer }>
            <div>
                <span 
                    data-name="eric" 
                    data-domain="ericwebsite" 
                    data-tld="info" 
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onClick={onClick}
                >
                    Email Me
                </span>
            </div>
            <div></div>
            <div>☺</div>
        </footer> 
    )
}