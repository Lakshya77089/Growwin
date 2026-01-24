import ContactUs from "../components/common/ContactUs";
import Footer from "../components/common/Footer";
import BigBlogCard from "../components/cards/BigBlogCard";
import SmallBlogCard from "../components/cards/SmallBlogCard";

const categories = [
    "News",
    "Development",
    "Product Features",
    "Tips and Tutorial",
    "Resources",
];

const latestPosts = [
    {
        id: 1,
        title: "Blog Heading",
        date: "5 Hours ago",
        excerpt:
            "Figma ipsum component variant main layer. Image arrange font create hand duplicate figjam overflow. Library arrange thumbnail pixel object variant move variant thumbnail vector. Style community blur pen scale.",
        image: "/blogs/smartphones_new.png",
    },
    {
        id: 2,
        title: "Blog Heading",
        date: "5 Hours ago",
        excerpt:
            "Figma ipsum component variant main layer. Image arrange font create hand duplicate figjam overflow. Library arrange thumbnail pixel object variant move variant thumbnail vector. Style community blur pen scale.",
        image: "/blogs/newspapers_new.png",
    },
    {
        id: 3,
        title: "Blog Heading",
        date: "5 Hours ago",
        excerpt:
            "Figma ipsum component variant main layer. Image arrange font create hand duplicate figjam overflow. Library arrange thumbnail pixel object variant move variant thumbnail vector. Style community blur pen scale.",
        image: "/blogs/studio_new.png",
    },
];

const recentPosts = [
    {
        id: 4,
        title: "Blog Heading",
        date: "5 Hours ago",
        excerpt: "Figma ipsum component variant main layer. Image arrange font create hand duplicate figjam overflow. Library arrange thumbnail pixel object variant move variant thumbnail vector. Style community blur pen scale.",
        image: "/blogs/hand_phone.png",
    },
    {
        id: 5,
        title: "Blog Heading",
        date: "5 Hours ago",
        excerpt: "Figma ipsum component variant main layer. Image arrange font create hand duplicate figjam overflow. Library arrange thumbnail pixel object variant move variant thumbnail vector. Style community blur pen scale.",
        image: "/blogs/laptop_screen.png",
    },
    {
        id: 6,
        title: "Blog Heading",
        date: "5 Hours ago",
        excerpt: "Figma ipsum component variant main layer. Image arrange font create hand duplicate figjam overflow. Library arrange thumbnail pixel object variant move variant thumbnail vector. Style community blur pen scale.",
        image: "/blogs/reading_news.png",
    },
];

const Blog = () => {
    return (
        <div className="bg-[#F2F2F2] min-h-screen">
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
                            Latest
                        </h3>
                        <div className="w-full md:w-auto flex overflow-x-auto scrollbar-hide md:overflow-visible items-center justify-start md:justify-center gap-3 pb-4 md:pb-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className="px-6 py-2.5 rounded-xl text-[14px] text-[#F2F2F2] font-medium transition-all duration-300 bg-[#51367E] text-white hover:bg-[#624496] shadow-sm active:scale-95 whitespace-nowrap"
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Latest Blog Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        {latestPosts.map((post) => (
                            <BigBlogCard key={post.id} {...post} />
                        ))}
                    </div>

                    {/* Recent Blogs Section */}
                    <div className="mb-24">
                        <h3 className="text-xl font-semibold text-[#2D2D2D] font-[var(--font-poppins)] mb-2">
                            Recent Blogs
                        </h3>
                        <div className="space-y-0">
                            {recentPosts.map((post) => (
                                <SmallBlogCard key={post.id} {...post} />
                            ))}
                            {/* Closing line for the last item */}
                            <div className="border-t border-[#51367E20]" />
                        </div>
                    </div>
                </div>
            </section>

            <ContactUs />
            <Footer />
        </div>
    );
};

export default Blog;
