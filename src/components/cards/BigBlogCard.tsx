import React from "react";

interface BigBlogCardProps {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    badge?: string;
}

const BigBlogCard: React.FC<BigBlogCardProps> = ({
    title,
    date,
    excerpt,
    image,
    badge,
}) => {
    return (
        <div className="bg-[#E7E4EF] rounded-[60px] p-8 flex flex-col h-full relative group shadow-[0_15px_35px_rgba(0,0,0,0.05)] border border-white/20 cursor-pointer hover:scale-[1.02] transition-transform duration-300">
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
                <div className="flex justify-between items-baseline mb-5">
                    <h4 className="text-[26px] font-bold text-[#2D2D2D] font-[var(--font-poppins)]">
                        {title}
                    </h4>
                    <span className="text-[14px] text-gray-700 font-medium whitespace-nowrap">
                        {date}
                    </span>
                </div>
                <p className="text-[16px] text-gray-700 leading-[1.7] font-[var(--font-poppins)] mb-10 flex-grow opacity-90">
                    {excerpt}
                </p>
                <div className="mt-auto text-center">
                    <button className="text-[#51367E] font-bold text-[18px] hover:opacity-75 transition-all cursor-pointer">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BigBlogCard;
