import { useNavigate } from "react-router-dom";

interface SmallBlogCardProps {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    category: string;
    readTime: string;
}

const SmallBlogCard: React.FC<SmallBlogCardProps> = ({
    id,
    title,
    date,
    excerpt,
    image,
    category,
    readTime,
}) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/blog/${id}`)}
            className="flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-[#51367E20] group cursor-pointer hover:bg-[#51367E05] transition-colors px-0 md:px-4"
        >
            {/* Mobile Image (Top) */}
            <div className="w-full md:hidden mb-6">
                <div className="rounded-[25px] overflow-hidden aspect-[2/1]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Date - Desktop Left */}
            <div className="w-[15%] hidden md:block">
                <span className="text-[14px] text-gray-700 font-medium whitespace-nowrap">
                    {date}
                </span>
            </div>

            {/* Content - Center */}
            <div className="flex-grow md:w-[65%] md:px-10">
                <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold text-[#51367E] uppercase tracking-wider">{category}</span>
                        <span className="text-[11px] text-gray-400">•</span>
                        <span className="text-[11px] text-gray-500 font-medium">{readTime}</span>
                    </div>
                    {/* Header Area (Title & Date) */}
                    <div className="flex justify-between items-baseline mb-3">
                        <h4 className="text-[20px] md:text-[24px] font-semibold text-[#2D2D2D] font-[var(--font-poppins)] group-hover:text-[#51367E] transition-colors leading-tight">
                            {title}
                        </h4>
                        <span className="text-[12px] md:text-[14px] text-gray-500 font-medium whitespace-nowrap ml-4">
                            {date}
                        </span>
                    </div>

                    {/* Excerpt with inline Read more */}
                    <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed font-[var(--font-poppins)]">
                        {excerpt.length > 120 ? excerpt.substring(0, 120) + "..." : excerpt}
                        <span className="text-[#51367E] font-bold ml-1 hover:underline">Read more.</span>
                    </p>
                </div>
            </div>

            {/* Image - Desktop Right */}
            <div className="hidden md:block w-[150px] shrink-0">
                <div className="rounded-[25px] overflow-hidden aspect-[1.2/1]">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default SmallBlogCard;
