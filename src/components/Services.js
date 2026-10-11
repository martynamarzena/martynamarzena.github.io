import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Services.css';
export default function Services() {
    const services = [
        {
            category: 'Graphic Design & Branding',
            items: ['Logo Design', 'Visual Identity', 'Business Cards', 'Packaging', 'Branding Books']
        },
        {
            category: 'Video & Motion',
            items: ['Short-form Editing', 'Long-form YouTube', 'Motion Graphics', 'Animation', 'Promotional Videos']
        },
        {
            category: 'Photography',
            items: ['Product Photography', 'Portrait Photography', 'Photo Editing', 'Retouching', 'Compositing']
        },
        {
            category: '3D & Digital Art',
            items: ['3D Modeling', 'Product Visualization', 'Rendering', 'Digital Illustration', 'Visual Projects']
        },
        {
            category: 'Social Media',
            items: ['Profile Management', 'Content Design', 'Graphics & Posts', 'Visual Identity', 'Content Strategy']
        },
        {
            category: 'Content Creation',
            items: ['YouTube Production', 'Video Editing', 'Thumbnail Design', 'Channel Optimization', 'Content Direction']
        }
    ];
    return (_jsxs("div", { className: "services container", children: [_jsxs("div", { className: "services-header", children: [_jsx("h2", { children: "Services & Specializations" }), _jsx("p", { children: "What I can create for you" })] }), _jsx("div", { className: "services-grid", children: services.map((service, idx) => (_jsxs("div", { className: "service-card", children: [_jsx("h3", { children: service.category }), _jsx("ul", { className: "service-items", children: service.items.map((item, i) => (_jsx("li", { children: item }, i))) })] }, idx))) })] }));
}
