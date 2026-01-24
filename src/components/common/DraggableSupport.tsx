import React, { useState, useRef, useEffect } from "react";

const DraggableSupport: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Initial position: Right center after mount
        const timer = setTimeout(() => {
            if (buttonRef.current) {
                const initialY = window.innerHeight / 2 - buttonRef.current.offsetHeight / 2;
                const initialX = window.innerWidth - buttonRef.current.offsetWidth;
                setPosition({ x: initialX, y: initialY });
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handlePointerDown = (e: React.PointerEvent) => {
        if (!buttonRef.current) return;
        setIsDragging(true);

        const rect = buttonRef.current.getBoundingClientRect();
        offsetRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };

        buttonRef.current.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return;

        let newX = e.clientX - offsetRef.current.x;
        let newY = e.clientY - offsetRef.current.y;

        // Boundaries
        const maxX = window.innerWidth - (buttonRef.current?.offsetWidth || 0);
        const maxY = window.innerHeight - (buttonRef.current?.offsetHeight || 0);

        newX = Math.max(0, Math.min(newX, maxX));
        newY = Math.max(0, Math.min(newY, maxY));

        setPosition({ x: newX, y: newY });
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        setIsDragging(false);
        if (buttonRef.current) {
            buttonRef.current.releasePointerCapture(e.pointerId);

            // Snap to nearest side (left or right)
            const centerX = window.innerWidth / 2;
            const finalX = position.x + (buttonRef.current.offsetWidth / 2) < centerX
                ? 0
                : window.innerWidth - buttonRef.current.offsetWidth;

            setPosition(prev => ({ ...prev, x: finalX }));
        }
    };

    return (
        <div
            ref={buttonRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            style={{
                position: 'fixed',
                left: `${position.x}px`,
                top: `${position.y}px`,
                touchAction: 'none',
                transition: isDragging ? 'none' : 'all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
                zIndex: 1000
            }}
            className="cursor-move select-none"
        >
            <button className={`bg-[#51367E] text-white px-6 py-4 shadow-[-5px_0_20px_rgba(81,54,126,0.3)] font-medium text-[15px] flex items-center justify-center border border-white/20 backdrop-blur-sm pointer-events-none whitespace-nowrap ${position.x === 0 ? 'rounded-r-3xl' : 'rounded-l-3xl'}`}>
                Customer Support
            </button>
        </div>
    );
};

export default DraggableSupport;
