import React from "react";

interface BigBlogCardProps {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    badge?: string;
    category: string;
    readTime: string;
}

import { useNavigate } from "react-router-dom";

const BigBlogCard: React.FC<BigBlogCardProps> = ({
    id,
    title,
    date,
    excerpt,
    image,
    badge,
    category,
    readTime,
}) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/blog/${id}`)}
            className="bg-[#E7E4EF] rounded-[60px] p-8 flex flex-col h-full relative group shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-white/20 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
        >
            {/* Image Container */}
            <div className="relative rounded-[45px] overflow-hidden mb-8 aspect-[1.4/1]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {badge && (
                    <div className="absolute top-[50%] right-[-24px] -translate-y-1/2 bg-[#51367E] text-white px-6 py-3 rounded-2xl text-[14px] font-medium z-20 shadow-xl">
                        {badge}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow text-left">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[12px] font-bold text-[#51367E] uppercase tracking-wider">{category}</span>
                    <span className="text-[12px] text-gray-400">•</span>
                    <span className="text-[12px] text-gray-500 font-medium">{readTime}</span>
                </div>
                <div className="flex flex-col mb-5">
                    <h4 className="text-[26px] font-bold text-[#2D2D2D] font-[var(--font-poppins)] mb-2 group-hover:text-[#51367E] transition-colors leading-tight">
                        {title}
                    </h4>
                    <span className="text-[14px] text-gray-500 font-medium">
                        {date}
                    </span>
                </div>
                <p className="text-[16px] text-gray-600 leading-[1.7] font-[var(--font-poppins)] mb-8 flex-grow opacity-90">
                    {excerpt}
                </p>
                <div className="mt-auto">
                    <button className="flex items-center gap-2 text-[#51367E] font-bold text-[16px] hover:translate-x-1 transition-all">
                        Read More
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BigBlogCard;
