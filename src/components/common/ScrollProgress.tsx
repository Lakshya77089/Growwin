import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const location = useLocation();
    const isBlogDetail = location.pathname.startsWith("/blog/");

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight <= 0) {
                setScrollProgress(0);
                return;
            }
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]); // Reset or re-calculate on route change

    return (
        <div
            className={`fixed top-0 left-0 h-1 bg-[#51367E] z-[9999] transition-all duration-100 ease-out ${isBlogDetail ? "" : "md:hidden"}`}
            style={{ width: `${scrollProgress}%` }}
        />
    );
};

export default ScrollProgress;
