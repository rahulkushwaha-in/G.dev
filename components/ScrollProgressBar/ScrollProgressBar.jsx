import { useEffect, useState } from 'react';
import styles from './ScrollProgressBar.module.css';

export default function ScrollProgressBar({ articleId }) {
    const [progress, setProgress] = useState(0);
    const [barColor, setBarColor] = useState('linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(7,231,13,1) 100%)');

    const updateProgressBar = () => {
        if (typeof window === 'undefined' || !document) return;

        const articleElement = document.getElementById(articleId);
        if (!articleElement) return;

        const articleHeight = articleElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY - articleElement.offsetTop;

        if (scrollTop > 0) {
            const scrollProgress = (scrollTop / articleHeight) * 100;
            setProgress(scrollProgress);

            const getColor = (progress) => {
                if (progress < 20) return 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(7,231,13,1) 100%)';
                if (progress < 40) return 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)';
                if (progress < 60) return 'linear-gradient(90deg, rgba(58,75,180,1) 0%, rgba(129,29,253,1) 50%, rgba(231,7,159,1) 100%)'; 
                if (progress < 80) return 'linear-gradient(90deg, rgba(229,9,162,1) 0%, rgba(27,218,11,1) 50%, rgba(231,20,7,0.9844307351846989) 100%)'; 
                return 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(7,231,13,1) 100%)'; 
            };
            

            setBarColor(getColor(scrollProgress));
        } else {
            setProgress(0); // Reset progress if scrolled above the article
        }
    };

    const handleClick = (event) => {
        if (typeof window === 'undefined' || !document) return;

        const articleElement = document.getElementById(articleId);
        if (!articleElement) return;

        const articleHeight = articleElement.scrollHeight - window.innerHeight;
        const clickPosition = event.clientX / window.innerWidth;
        const targetScroll = clickPosition * articleHeight + articleElement.offsetTop;

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth', // Smooth scrolling
        });

        // Immediately update the progress bar after scrolling
        setTimeout(updateProgressBar, 0);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', updateProgressBar);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', updateProgressBar);
            }
        };
    }, [articleId]);

    return (
        <div
            className={styles.progressContainer}
            onClick={handleClick}
        >
            <div
                className={styles.progressBar}
                style={{ width: `${progress}%`, background: barColor }}
            ></div>
        </div>
    );
}
