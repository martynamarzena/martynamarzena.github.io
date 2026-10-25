import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { skillsData } from '../data/skills';
import './Skills.css';
export default function Skills() {
    const [expandedSkill, setExpandedSkill] = useState(null);
    return (_jsxs("div", { className: "skills container", children: [_jsxs("div", { className: "skills-header", children: [_jsx("h2", { children: "Skills & Tools" }), _jsx("p", { children: "Professional expertise in leading creative software" })] }), _jsx("div", { className: "skills-grid", children: skillsData.map((skill) => (_jsxs("div", { className: `skill-card ${expandedSkill === skill.id ? 'expanded' : ''}`, onClick: () => setExpandedSkill(expandedSkill === skill.id ? null : skill.id), children: [_jsx("div", { className: "skill-header", children: _jsxs("div", { className: "skill-info", children: [_jsx("h3", { children: skill.name }), _jsxs("div", { className: "skill-level", children: [_jsx("div", { className: "skill-bars", children: [...Array(5)].map((_, i) => (_jsx("div", { className: `level-bar ${i < skill.level ? 'active' : ''}` }, i))) }), _jsxs("span", { className: "level-text", children: [skill.level, "/5"] })] })] }) }), expandedSkill === skill.id && (_jsxs("div", { className: "skill-details", children: [_jsx("p", { children: skill.description }), _jsx("div", { className: "skill-tags", children: skill.applications.map((app, idx) => (_jsx("span", { className: "tag", children: app }, idx))) })] }))] }, skill.id))) })] })) ;
}
