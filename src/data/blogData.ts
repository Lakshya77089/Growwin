export interface BlogContentBlock {
    type: 'paragraph' | 'heading' | 'image' | 'list' | 'quote' | 'split_section';
    value: any;
    imageCaption?: string;
    image?: string;

    layout?: 'left' | 'right';
}

export interface SplitSectionContent {
    title: string;
    description: string;
    subTitle: string;
    list: string[];
    footer: string;
}

export interface BlogPost {
    id: number;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    image: string;

    category: string;
    readTime: string;
    content: BlogContentBlock[];
}

export const categories = [
    "All",
    "Beginner Friendly",
    "Trust & Transparency",
    "Investment Tips",
    "Market News",
];

export const allPosts: BlogPost[] = [
    {
        id: 1,
        title: "What is Fixed Return Investing and How Does It Work?",
        date: "Jan 24, 2026",
        author: "Alex Rivera",
        excerpt: "Discover the fundamentals of fixed return investing and how it provides a predictable path to wealth building in a volatile market.",
        image: "/blogs/asset_management.png",
     
        category: "Beginner Friendly",
        readTime: "5 min read",
        content: [
            {
                type: 'paragraph',
                value: "Fixed return investing is one of the most reliable strategies for those who prioritize capital preservation and steady income. Unlike traditional equity markets where prices can fluctuate wildly, fixed return investments offer a predetermined yield over a specific period. This predictability makes them an essential component of any balanced portfolio."
            },
            {
                type: 'split_section',
                layout: 'left',
                value: {
                    title: "The Mechanics of Stability",
                    description: "When you choose a fixed return plan, your capital is deployed into high-liquidity, low-volatility assets like government bonds, high-grade corporate debt, or structured fintech products. The interest or yield is calculated upfront, ensuring you know exactly what hits your account.",
                    subTitle: "Why it works:",
                    list: [
                        "Exclusion of market emotional swings from your returns.",
                        "Guaranteed payout schedules that simplify financial planning.",
                        "Lower barrier to entry for first-time investors looking for safety."
                    ],
                    footer: "By locking in your returns, you move from speculating to actual wealth management."
                },
                image: "/blogs/laptop_screen.png"
            },
            {
                type: 'split_section',
                layout: 'right',
                value: {
                    title: "Risk-Adjusted Performance",
                    description: "While high-growth assets can offer rapid gains, they often come with high risks. Fixed return models focus on the consistency of performance, which is the true engine of compounding wealth over the long term.",
                    subTitle: "Key advantages:",
                    list: [
                        "Preservation of principal amount even in downturns.",
                        "Reliable cash flow that can be reinvested automatically.",
                        "Peace of mind knowing your foundation is secure."
                    ],
                    footer: "The secret to financial success isn't just winning big; it's never losing your base."
                },
                image: "/blogs/asset_management.png"
            },
            {
                type: 'quote',
                value: "Stability is not the absence of growth, but the foundation upon which real growth is built."
            }
        ]
    },
    {
        id: 2,
        title: "Why Monthly Income Plans Are Better Than Traditional Savings",
        date: "Jan 22, 2026",
        author: "Sarah Chen",
        excerpt: "Traditional savings accounts are losing value to inflation every day. Learn why monthly income plans are the modern alternative for your wealth.",
        image: "/blogs/market_diversification.png",
 
        category: "Beginner Friendly",
        readTime: "7 min read",
        content: [
            {
                type: 'paragraph',
                value: "For decades, the standard advice was to put money in a savings account. However, in 2026, with inflation often outpacing the minimal interest rates offered by traditional banks, 'saving' has effectively become 'losing.' Monthly income plans (MIPs) represent a proactive shift toward making your money work harder for you."
            },
            {
                type: 'split_section',
                layout: 'left',
                value: {
                    title: "The Inflation Gap",
                    description: "Inflation is the hidden tax on your hard-earned money. If your bank gives you 3% interest but inflation is at 5%, your purchasing power is shrinking. MIPs are designed to target returns that significantly exceed inflation benchmarks.",
                    subTitle: "The MIP Edge:",
                    list: [
                        "Higher yield potential through diversified asset backing.",
                        "Monthly payouts that can cover recurring living expenses.",
                        "Flexibility to reinvest and build a massive corpus over time."
                    ],
                    footer: "Don't just store your wealth; grow it at a rate that keeps you ahead of the curve."
                },
                image: "/blogs/market_diversification.png"
            },
            {
                type: 'split_section',
                layout: 'right',
                value: {
                    title: "Modern Financial Liquidity",
                    description: "One common myth is that high-return plans lock your money away forever. Modern fintech platforms provide the liquidity you need while still providing superior returns compared to legacy banking systems.",
                    subTitle: "Liquidity Features:",
                    list: [
                        "Transparent withdrawal windows and clear terms.",
                        "Digital-first management through secure mobile apps.",
                        "Real-time tracking of every dollar and its performance."
                    ],
                    footer: "You deserve a partner that respects both your growth goals and your need for access."
                },
                image: "/blogs/newspapers_new.png"
            },
            {
                type: 'quote',
                value: "A savings account is a place where money goes to sleep. An income plan is a place where money goes to work."
            }
        ]
    },
    {
        id: 3,
        title: "Smart Investing for Beginners: A Simple Guide to Stable Returns",
        date: "Jan 20, 2026",
        author: "Michael Vance",
        excerpt: "New to the world of finance? This beginner-friendly guide breaks down the complex world of stable investing into easy, actionable steps.",
        image: "/blogs/secure_investing.png",
        category: "Beginner Friendly",
        readTime: "6 min read",
        content: [
            {
                type: 'paragraph',
                value: "The biggest barrier for most beginners is the fear of complexity. They see flashing numbers and complex charts and assume that investing isn't for them. But the truth is, the most successful investors often follow the simplest strategies: pick a goal, stay consistent, and prioritize stability."
            },
            {
                type: 'split_section',
                layout: 'left',
                value: {
                    title: "Starting with a 'Safety First' Mindset",
                    description: "Your first priority as a new investor should be to understand your risk profile. While high-vibe crypto and tech stocks get the headlines, the 'boring' stable returns are what actually build the foundation of your freedom.",
                    subTitle: "Beginner Pillars:",
                    list: [
                        "Define your financial goal: is it a house, travel, or retirement?",
                        "Start small: consistent monthly contributions beat timing the market.",
                        "Focus on fixed-return assets to avoid the beginner's panic of volatility."
                    ],
                    footer: "The best time to start was yesterday. The second best time is right now."
                },
                image: "/blogs/secure_investing.png"
            },
            {
                type: 'split_section',
                layout: 'right',
                value: {
                    title: "The Power of Compounding",
                    description: "Compounding is mathematically the most powerful tool in your financial arsenal. By reinvesting your gains, you start earning interest on your interest. Over a decade, this effect is nothing short of transformative.",
                    subTitle: "Compounding Rules:",
                    list: [
                        "Patience is your greatest asset: let time do the heavy lifting.",
                        "Avoid withdrawing your principal; let it stay in the engine.",
                        "Automate your investments to remove emotional decision-making."
                    ],
                    footer: "Small, regular steps lead to massive, life-changing results."
                },
                image: "/blogs/studio_new.png"
            },
            {
                type: 'quote',
                value: "Investing is not about being the smartest; it's about being the most disciplined."
            }
        ]
    },
    {
        id: 4,
        title: "How to Start Investing Safely in 2026",
        date: "Jan 10, 2026",
        author: "Emma Stone",
        excerpt: "The investment landscape is changing rapidly. Discover the most secure ways to deploy your capital in the current year.",
        image: "/blogs/crypto_trends.png",
        category: "Trust & Transparency",
        readTime: "5 min read",
        content: [
            {
                type: 'paragraph',
                value: "2026 has brought new challenges and opportunities to the global market. With the rise of AI-driven trading and decentralized finance, the old methods of safety need an update. Safe investing today means leveraging technology to build a multi-layered defense for your capital."
            },
            {
                type: 'split_section',
                layout: 'left',
                value: {
                    title: "Digital Safety and Verification",
                    description: "Cybersecurity is now an inseparable part of financial safety. When you choose a platform, you aren't just choosing an investment; you are choosing a digital partner to guard your identity and data.",
                    subTitle: "What to look for:",
                    list: [
                        "Two-factor or biometric authentication for all fund movements.",
                        "End-to-end encryption for your personal and financial data.",
                        "Regular third-party security audits and regulatory compliance."
                    ],
                    footer: "In 2026, your data is just as valuable as your dollars. Protect both."
                },
                image: "/blogs/crypto_trends.png"
            },
            {
                type: 'quote',
                value: "Risk comes from not knowing what you are doing. Safety comes from having a transparent partner."
            }
        ]
    },
    {
        id: 5,
        title: "Why Transparency Matters in Investment Platforms",
        date: "Jan 03, 2026",
        author: "James Wilson",
        excerpt: "In the world of finance, 'trust' is earned through transparency. Learn why we believe in being an open book for our investors.",
        image: "/blogs/reading_news.png",
        category: "Trust & Transparency",
        readTime: "4 min read",
        content: [
            {
                type: 'paragraph',
                value: "The biggest scandals in financial history have one thing in common: a lack of transparency. At Growwin, we believe that you have the absolute right to know where your money is, how it's performing, and who is managing it. Transparency is the antidote to fear."
            },
            {
                type: 'split_section',
                layout: 'left',
                value: {
                    title: "The Open Door Policy",
                    description: "Modern investors shouldn't be kept in the dark by complex jargon and hidden fees. We provide real-time dashboards and detailed reports that show exactly what's happening under the hood.",
                    subTitle: "Transparency Checklist:",
                    list: [
                        "Zero hidden fees: what you see is what you get.",
                        "Real-time performance tracking with 24/7 digital access.",
                        "Direct communication channels with professional fund managers."
                    ],
                    footer: "When everything is in the light, confidence naturally."
                },
                image: "/blogs/reading_news.png"
            },
            {
                type: 'quote',
                value: "Trust is the result of thousands of small acts of honesty and transparency."
            }
        ]
    },
    {
        id: 6,
        title: "How Growwin Capital Ensures Secure and Stable Returns",
        date: "Dec 20, 2025",
        author: "Robert King",
        excerpt: "Our team uses a proprietary mix of data analytics and market expertise to deliver results that our clients can rely on.",
        image: "/blogs/newspapers_new.png",
        category: "Investment Tips",
        readTime: "8 min read",
        content: [
            {
                type: 'paragraph',
                value: "How do we maintain stability in a world of volatility? The answer lies in our disciplined approach to fund management. We combine high-tech AI analysis with decades of human experience to identify the most resilient asset classes."
            },
            {
                type: 'split_section',
                layout: 'left',
                value: {
                    title: "Data-Driven Decision Making",
                    description: "We analyze millions of data points every day to forecast market shifts. This allows us to rebalance our funds proactively, moving capital away from risk and toward stability before the 'herd' even notices a change.",
                    subTitle: "Our process:",
                    list: [
                        "Sentiment analysis of global markets and economic indicators.",
                        "Stress-testing every portfolio against extreme historical scenarios.",
                        "Algorithmic hedging to neutralize downside during flash crashes."
                    ],
                    footer: "Our tech works for your peace of mind, every second of every day."
                },
                image: "/blogs/laptop_screen.png"
            },
            {
                type: 'quote',
                value: "Excellence is not a singular act, but a habit formed through consistent, data-driven discipline."
            }
        ]
    },
    {
        id: 7,
        title: "Top Features of a Secure Investment App in 2026",
        date: "Dec 15, 2025",
        author: "Linda Grey",
        excerpt: "An investment app should be more than just a list of numbers. It should be a secure, intuitive gateway to your future.",
        image: "/blogs/laptop_screen.png",
        category: "Trust & Transparency",
        readTime: "5 min read",
        content: [
            {
                type: 'paragraph',
                value: "As we move further into the digital age, your investment app is the primary way you interact with your wealth. In 2026, the best apps focus on three things: uncompromising security, radical transparency, and effortless usability."
            },
            {
                type: 'split_section',
                layout: 'left',
                value: {
                    title: "The Security Suite",
                    description: "Your wealth deserves military-grade protection. We've integrated the most advanced security features to ensure your capital remains entirely under your control.",
                    subTitle: "Top App Features:",
                    list: [
                        "Biometric (Face/Fingerprint) login for every session.",
                        "Encrypted push notifications for every fund movement.",
                        "One-tap account freezing for immediate peace of mind."
                    ],
                    footer: "Your security is our top priority, and we innovate daily to keep it that way."
                },
                image: "/blogs/smartphones.png"
            },
            {
                type: 'quote',
                value: "A great tool is one that makes the complex feel simple and the dangerous feel safe."
            }
        ]
    },
    {
        id: 8,
        title: "Building Investor Confidence Through Professional Fund Management",
        date: "Dec 10, 2025",
        author: "Mark S.",
        excerpt: "Confidence isn't just about high returns; it's about knowing you have the best minds in the industry working for you.",
        image: "/blogs/wealth_management_main.png",
        category: "Investment Tips",
        readTime: "6 min read",
        content: [
            {
                type: 'paragraph',
                value: "At the end of the day, fund management is a human business built on trust. Our track record is a testament to the expertise and dedication of our team members who work tirelessly to protect and grow our clients' capital."
            },
            {
                type: 'split_section',
                layout: 'left',
                value: {
                    title: "Expert Oversight",
                    description: "While we use the best technology, the final decisions are always made by seasoned professionals who have seen every market cycle. This human oversight is what provides the nuanced risk management that AI alone cannot achieve.",
                    subTitle: "The Professional Edge:",
                    list: [
                        "Decades of collective experience in global finance and fintech.",
                        "A shared commitment to the Growwin values of trust and transparency.",
                        "Continuous learning and adaptation to the ever-shifting global landscape."
                    ],
                    footer: "You aren't just investing in a fund; you are investing in a team dedicated to your success."
                },
                image: "/blogs/asset_management.png"
            },
            {
                type: 'quote',
                value: "Confidence is built on clarity, and clarity is the result of expert management."
            }
        ]
    }
];
