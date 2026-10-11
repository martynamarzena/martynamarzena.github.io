import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './SocialMedia.css';
export default function SocialMedia() {
    const socialProjects = [
        {
            brand: 'Brand Name 1',
            platforms: ['Instagram', 'Facebook'],
            description: 'Complete social media strategy and visual content creation.',
            metrics: 'Placeholder for performance data',
            image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80'
        },
        {
            brand: 'Brand Name 2',
            platforms: ['Instagram', 'TikTok'],
            description: 'Short-form content creation and feed aesthetic development.',
            metrics: 'Placeholder for performance data',
            image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80'
        },
        {
            brand: 'Brand Name 3',
            platforms: ['Facebook', 'Instagram'],
            description: 'Ad campaigns and promotional graphics design.',
            metrics: 'Placeholder for performance data',
            image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80'
        }
    ];
    return (_jsxs("div", { className: "social-media container", children: [_jsxs("div", { className: "social-media-header", children: [_jsx("h2", { children: "Social Media Projects" }), _jsx("p", { children: "Case studies and social media management" })] }), _jsx("div", { className: "social-grid", children: socialProjects.map((project, idx) => (_jsxs("div", { className: "social-project-card", style: { animationDelay: `${idx * 0.1}s` }, children: [_jsx("div", { className: "social-image", children: _jsx("img", { src: project.image, alt: project.brand }) }), _jsxs("div", { className: "social-content", children: [_jsx("h3", { children: project.brand }), _jsx("div", { className: "social-platforms", children: project.platforms.map((platform, i) => (_jsx("span", { className: "platform-tag", children: platform }, i))) }), _jsx("p", { children: project.description }), _jsx("p", { className: "social-metrics", children: project.metrics })] })] }, idx))) })] }));
}
