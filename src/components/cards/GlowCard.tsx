import React, { useState, useRef } from "react";

interface GlowCardProps {
    children: React.ReactNode;
    className?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, className = "" }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className={`relative group overflow-hidden transition-all duration-300 hover:scale-[1.01] ${className}`}
        >
            {/* Mouse-Following Radial Gradient Hover Effect */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(148, 27, 185, 0.15), transparent 70%)`
                }}
            />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};

export default GlowCard;
