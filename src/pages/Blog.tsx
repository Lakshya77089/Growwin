import { useState, useMemo } from "react";
import ContactUs from "../components/common/ContactUs";
import Footer from "../components/common/Footer";
import BigBlogCard from "../components/cards/BigBlogCard";
import SmallBlogCard from "../components/cards/SmallBlogCard";
import { categories, allPosts, type BlogPost } from "../data/blogData";
import SEO from "../components/common/SEO";

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = useMemo(() => {
        if (activeCategory === "All") return allPosts;
        return allPosts.filter(post => post.category === activeCategory);
    }, [activeCategory]);

    const latestPosts = useMemo(() => allPosts.slice(0, 3), []);
    const recentPosts = useMemo(() => allPosts.slice(3), []);

    return (
        <div className="bg-[#F2F2F2] min-h-screen">
            <SEO
                title="Blog"
                description="Insights, tips, and tutorials on fixed returns, smart investing, and financial growth from Growwin Capital."
            />
            <section className="relative w-full pt-28  overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-[2%] left-[3%] w-[450px] h-[700px] bg-[#941bb9]/20 rounded-full blur-[160px]" />
                <div className="absolute top-[20%] left-[35%] w-[450px] h-[450px] bg-[#941bb9]/20 rounded-full blur-[160px]" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-[var(--font-jost)] font-semibold text-[#51367e] mb-6 uppercase">
                            BLOGS
                        </h2>
                        <p className="text-[#2D2D2D] max-w-5xl mx-auto text-sm md:text-base leading-relaxed font-[var(--font-poppins)]">
                            Our blog is a space where ideas, insights, and experiences come together. We share thoughtful content on design, technology, and digital innovation to help creators and businesses stay informed and inspired. Each article is crafted to offer practical value, clear perspectives, and real-world relevance.
                        </p>
                    </div>

                    {/* Latest & Tags */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 border-b border-[#51367E20] pb-8">
                        <h3 className="text-xl font-semibold text-[#2D2D2D] font-[var(--font-poppins)] self-start md:self-center">
                            {activeCategory === "All" ? "Latest" : activeCategory}
                        </h3>
                        <div className="w-full md:w-auto flex overflow-x-auto scrollbar-hide md:overflow-visible items-center justify-start md:justify-center gap-3 pb-4 md:pb-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-300 shadow-sm active:scale-95 whitespace-nowrap ${activeCategory === cat
                                        ? "bg-[#51367E] text-white"
                                        : "bg-white text-[#51367E] hover:bg-[#51367E10]"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {activeCategory === "All" ? (
                        <>
                            {/* Latest Blog Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                                {latestPosts.map((post: BlogPost) => (
                                    <BigBlogCard key={post.id} {...post} />
                                ))}
                            </div>

                            {/* Recent Blogs Section */}
                            <div className="mb-24">
                                <h3 className="text-xl font-semibold text-[#2D2D2D] font-[var(--font-poppins)] mb-2">
                                    Recent Blogs
                                </h3>
                                <div className="space-y-0">
                                    {recentPosts.map((post: BlogPost) => (
                                        <SmallBlogCard key={post.id} {...post} />
                                    ))}
                                    {/* Closing line for the last item */}
                                    <div className="border-t border-[#51367E20]" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                            {filteredPosts.map((post) => (
                                <BigBlogCard key={post.id} {...post} />
                            ))}
                            {filteredPosts.length === 0 && (
                                <div className="col-span-full text-center py-20">
                                    <p className="text-gray-500 text-lg">No posts found in this category.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <ContactUs />
            <Footer />
        </div>
    );
};

export default Blog;
