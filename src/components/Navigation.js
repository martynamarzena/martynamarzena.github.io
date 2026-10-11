import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navigation.css';
export default function Navigation({ scrolled }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 200 && rect.bottom >= 200) {
                    setActiveSection(section.id);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'services', label: 'Services' },
        { id: 'youtube', label: 'YouTube' },
        { id: 'education', label: 'Education' },
        { id: 'social-media', label: 'Social Media' },
        { id: 'contact', label: 'Contact' },
    ];
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };
    return (_jsx("nav", { className: `navigation ${scrolled ? 'scrolled' : ''}`, children: _jsxs("div", { className: "nav-container", children: [_jsx("div", { className: "logo", children: _jsxs("a", { href: "#home", onClick: () => scrollToSection('home'), children: [_jsx("span", { className: "logo-text", children: "MARTYNA" }), _jsx("span", { className: "logo-accent", children: "URBAN" })] }) }), _jsx("button", { className: "menu-toggle", onClick: () => setIsOpen(!isOpen), "aria-label": "Toggle menu", children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) }), _jsx("ul", { className: `nav-links ${isOpen ? 'open' : ''}`, children: navItems.map(item => (_jsx("li", { children: _jsx("button", { className: `nav-link ${activeSection === item.id ? 'active' : ''}`, onClick: () => scrollToSection(item.id), children: item.label }) }, item.id))) })] }) }));
}
