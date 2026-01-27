import React, { useEffect } from "react";

interface SEOProps {
    title: string;
    description: string;
    schema?: object;
}

const SEO: React.FC<SEOProps> = ({ title, description, schema }) => {
    useEffect(() => {
        document.title = `${title} | Growwin Capital`;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = description;
            document.head.appendChild(meta);
        }

        // Update OG Tags
        const updateOGTag = (property: string, content: string) => {
            let tag = document.querySelector(`meta[property="${property}"]`);
            if (tag) {
                tag.setAttribute("content", content);
            } else {
                tag = document.createElement("meta");
                tag.setAttribute("property", property);
                tag.setAttribute("content", content);
                document.head.appendChild(tag);
            }
        };

        updateOGTag("og:title", title);
        updateOGTag("og:description", description);
        updateOGTag("twitter:title", title);
        updateOGTag("twitter:description", description);

        // Schema Markup
        const existingSchema = document.querySelector('script[type="application/ld+json"]');
        if (existingSchema) {
            existingSchema.remove();
        }

        if (schema) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.text = JSON.stringify(schema);
            document.head.appendChild(script);
        }

    }, [title, description, schema]);

    return null;
};

export default SEO;
