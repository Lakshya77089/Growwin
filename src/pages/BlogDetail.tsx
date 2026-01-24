import { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { allPosts, categories } from "../data/blogData";
import type { SplitSectionContent } from "../data/blogData";
import ContactUs from "../components/common/ContactUs";
import Footer from "../components/common/Footer";
import BigBlogCard from "../components/cards/BigBlogCard";
import SEO from "../components/common/SEO";

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const post = allPosts.find((p) => p.id === Number(id));

    // Scroll to top on id change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const relatedPosts = useMemo(() => {
        if (!post) return [];
        return allPosts
            .filter((p) => p.category === post.category && p.id !== post.id)
            .slice(0, 3);
    }, [post]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F2F2F2]">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#51367e] mb-4">Post Not Found</h2>
                    <Link to="/blog" className="text-growwin hover:underline">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#F2F2F2] min-h-screen">
            <SEO
                title={post.title}
                description={post.excerpt}
                schema={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "description": post.excerpt,
                    "author": {
                        "@type": "Person",
                        "name": post.author
                    },
                    "datePublished": post.date,
                    "image": window.location.origin + post.image,
                    "publisher": {
                        "@type": "Organization",
                        "name": "Growwin Capital",
                        "logo": {
                            "@type": "ImageObject",
                            "url": window.location.origin + "/logo.png"
                        }
                    }
                }}
            />

            <section className="relative w-full pt-28 pb-10 overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[120px] -z-10" />
                <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-purple-50 rounded-full blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Header Row: BLOGS + Categories */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-20 border-b border-[#51367E20] pb-8">
                        <Link to="/blog" className="text-4xl md:text-5xl font-[var(--font-jost)] font-bold text-[#51367e] tracking-tight hover:opacity-80 transition-opacity">
                            BLOGS
                        </Link>
                        <div className="w-full md:w-auto flex overflow-x-auto scrollbar-hide md:overflow-visible items-center justify-start md:justify-center gap-2 pb-4 md:pb-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => navigate('/blog')}
                                    className="px-5 py-2.5 rounded-lg text-[13px] font-medium bg-[#51367E] text-white whitespace-nowrap hover:bg-[#624496] transition-colors"
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-5xl text-left">
                        {/* Category & Read Time */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-[#51367E15] text-[#51367E] rounded-full text-[12px] font-bold uppercase tracking-wider">{post.category}</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-[14px] text-gray-500 font-medium">{post.readTime}</span>
                        </div>

                        {/* Blog Title */}
                        <h1 className="text-4xl md:text-[64px] font-[var(--font-jost)] font-bold text-[#2D2D2D] mb-8 leading-[1.1]">
                            {post.title}
                        </h1>

                        {/* Meta Info */}
                        <div className="text-[14px] md:text-[16px] font-[var(--font-poppins)] text-gray-800 mb-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
                            <div className="flex items-center">
                                <span className="font-bold text-[#51367E] mr-2">Published on :</span>
                                <span className="text-blue-600 font-medium">{post.date}</span>
                            </div>
                            <span className="mx-6 hidden sm:inline text-gray-300">|</span>
                            <div className="flex items-center">
                                <span className="font-bold text-[#51367E] mr-2">Author:</span>
                                <span className="text-blue-600 font-medium">{post.author}</span>
                            </div>
                        </div>

                        {/* Lead Paragraph */}
                        <p className="text-[18px] md:text-[20px] text-gray-600 font-[var(--font-poppins)] leading-relaxed mb-16 max-w-4xl italic border-l-4 border-[#51367E] pl-6">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Main Featured Image */}
                    <div className="relative rounded-[40px] overflow-hidden mb-24 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group max-h-[600px]">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Content Body Content */}
                    <div className="space-y-20 font-[var(--font-poppins)] mb-32">
                        {post.content.map((block, index) => {
                            switch (block.type) {
                                case "paragraph":
                                    return (
                                        <p key={index} className="text-[18px] md:text-[20px] text-gray-700 leading-[1.8] text-left max-w-4xl">
                                            {block.value}
                                        </p>
                                    );
                                case "heading":
                                    return (
                                        <h2 key={index} className="text-3xl md:text-4xl font-[var(--font-jost)] font-bold text-[#2D2D2D] pt-10">
                                            {block.value}
                                        </h2>
                                    );
                                case "image":
                                    return (
                                        <div key={index} className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-12 items-start">
                                            <div className="rounded-[32px] overflow-hidden shadow-lg group">
                                                <img
                                                    src={block.value as string}
                                                    alt="Section content"
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="flex items-center h-full">
                                                <p className="text-gray-600 text-[17px] leading-relaxed italic border-l-2 border-gray-200 pl-6">
                                                    {block.imageCaption}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                case "list":
                                    return (
                                        <div key={index} className="py-4 bg-[#51367E05] p-8 md:p-12 rounded-[40px] border border-[#51367E10]">
                                            <h4 className="text-2xl font-bold text-[#2D2D2D] mb-8">Key Takeaways:</h4>
                                            <ul className="space-y-6">
                                                {(block.value as string[]).map((item, i) => (
                                                    <li key={i} className="flex gap-4 items-start text-gray-700 text-[17px] md:text-[19px]">
                                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#51367E] text-white flex items-center justify-center text-[12px] mt-1">✓</span>
                                                        <span className="font-medium">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                case "split_section": {
                                    const content = block.value as SplitSectionContent;
                                    return (
                                        <div key={index} className="py-12">
                                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${block.layout === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                                                <div className={`rounded-[40px] overflow-hidden shadow-2xl group ${block.layout === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                                                    <img
                                                        src={block.image}
                                                        alt={content.title}
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className={`flex flex-col gap-8 ${block.layout === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                                                    <h3 className="text-3xl md:text-4xl font-[var(--font-jost)] font-bold text-[#2D2D2D] leading-tight">
                                                        {content.title}
                                                    </h3>
                                                    <p className="text-[17px] md:text-[18px] text-gray-600 leading-[1.8]">
                                                        {content.description}
                                                    </p>
                                                    <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100">
                                                        <h4 className="text-[18px] font-bold text-[#51367E] mb-6 flex items-center gap-2">
                                                            <span className="w-8 h-[2px] bg-[#51367E]"></span>
                                                            {content.subTitle}
                                                        </h4>
                                                        <ul className="space-y-4">
                                                            {content.list.map((item, i) => (
                                                                <li key={i} className="flex gap-4 items-start text-gray-600 text-[16px]">
                                                                    <span className="text-[#51367E] font-bold mt-0.5">•</span>
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <p className="text-[16px] text-gray-500 font-medium italic">
                                                        {content.footer}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                                case "quote":
                                    return (
                                        <div key={index} className="text-center py-24 px-6 bg-[#51367E] rounded-[60px] text-white relative overflow-hidden shadow-2xl">
                                            {/* Decorative Background Icon */}
                                            <div className="absolute top-[-20px] left-[-20px] opacity-10">
                                                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.34315 15.3601 2 17.017 2H19.017C20.6738 2 22.017 3.34315 22.017 5V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V5C2.01697 3.34315 3.36011 2 5.01697 2H7.01697C8.67382 2 10.017 3.34315 10.017 5V15C10.017 18.3137 7.33067 21 4.01697 21H2.01697Z" />
                                                </svg>
                                            </div>
                                            <p className="text-[26px] md:text-[36px] font-[var(--font-jost)] font-bold italic mb-8 relative z-10">
                                                &quot;{block.value}&quot;
                                            </p>
                                            <div className="flex items-center justify-center gap-4 relative z-10">
                                                <div className="w-12 h-[2px] bg-white opacity-50"></div>
                                                <span className="text-white/80 font-medium tracking-widest uppercase text-sm">{post.author}</span>
                                                <div className="w-12 h-[2px] bg-white opacity-50"></div>
                                            </div>
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="pt-20 border-t border-gray-200">
                            <h3 className="text-[32px] font-[var(--font-jost)] font-bold text-[#2D2D2D] mb-12">
                                Related Articles
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.map((rp) => (
                                    <BigBlogCard key={rp.id} {...rp} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <ContactUs />
            <Footer />
        </div>
    );
};

export default BlogDetail;
