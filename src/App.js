import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import YouTube from './components/YouTube';
import Experience from './components/Experience';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
export default function App() {
    const [activeSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsxs("div", { className: "app", children: [_jsx(Navigation, { activeSection: activeSection, scrolled: scrolled }), _jsxs("main", { children: [_jsx("section", { id: "home", className: "section", children: _jsx(Hero, {}) }), _jsx("section", { id: "about", className: "section", children: _jsx(About, {}) }), _jsx("section", { id: "education", className: "section", children: _jsx(Education, {}) }), _jsx("section", { id: "skills", className: "section", children: _jsx(Skills, {}) }), _jsx("section", { id: "portfolio", className: "section", children: _jsx(Portfolio, {}) }), _jsx("section", { id: "youtube", className: "section", children: _jsx(YouTube, {}) }), _jsx("section", { id: "experience", className: "experience", children: _jsx(Experience, {}) }), _jsx("section", { id: "social-media", className: "section", children: _jsx(SocialMedia, {}) }), _jsx("section", { id: "contact", className: "section", children: _jsx(Contact, {}) })] }), _jsx(Footer, {})] }));
}
