import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';
import './Portfolio.css';
export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const categories = [
        'all',
        'graphic-design',
        'branding',
        'video-editing',
        'motion-design',
        '3d-blender',
        'photography',
        'photo-retouching',
        'illustration',
        'social-media',
        'youtube-thumbnails'
    ];
    const filteredProjects = selectedCategory === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === selectedCategory);
    const getCategoryLabel = (cat) => {
        const labels = {
            'all': 'WSZYSTKIE',
            'graphic-design': 'Grafika',
            'branding': 'Branding',
            'video-editing': 'Wideo',
            'motion-design': 'Motion Design',
            '3d-blender': '3D & Blender',
            'photography': 'Fotografia',
            'photo-retouching': 'Retusz zdjęć',
            'illustration': 'Ilustracje',
            'social-media': 'Social Media',
            'youtube-thumbnails': 'Miniaturka YT'
        };
        return labels[cat] || cat;
    };
    return (_jsxs("div", { className: "portfolio container", children: [_jsxs("div", { className: "portfolio-header", children: [_jsx("h2", { children: "Portfolio" }), _jsx("p", { children: "Wybrane prace z ka\u017Cdego zakresu." })] }), _jsx("div", { className: "category-filters", children: categories.map(cat => (_jsx("button", { className: `filter-btn ${selectedCategory === cat ? 'active' : ''}`, onClick: () => setSelectedCategory(cat), children: getCategoryLabel(cat) }, cat))) }), _jsx("div", { className: "portfolio-grid", children: filteredProjects.map(project => (_jsxs("div", { className: "portfolio-item", onClick: () => setSelectedProject(project), children: [_jsxs("div", { className: "portfolio-image", children: [_jsx("img", { src: project.image, alt: project.title }), _jsx("div", { className: "portfolio-overlay", children: _jsx("span", { className: "view-text", children: "View Project" }) })] }), _jsxs("div", { className: "portfolio-info", children: [_jsx("span", { className: "portfolio-category", children: getCategoryLabel(project.category) }), _jsx("h3", { children: project.title }), _jsx("p", { children: project.description })] })] }, project.id))) }), selectedProject && (_jsx(ProjectModal, { project: selectedProject, onClose: () => setSelectedProject(null) }))] }));
}
