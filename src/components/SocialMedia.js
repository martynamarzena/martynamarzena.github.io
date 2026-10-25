import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './SocialMedia.css';
export default function SocialMedia() {
    const socialProjects = [
        {
            brand: 'Hjort Knudsen Polen',
            platforms: ['Facebook'],
            description: 'Realizowanie wpisów pod przewodnictwem i na potrzeby kierownika do spraw personalnych.',
            metrics: 'Od listopada 2024 do czerwca 2025.',
            image: 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/355157528_725793266015143_1118636123756802019_n.jpg?stp=dst-jpg_tt6&cstp=mx800x800&ctp=s800x800&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=G7y3aAdsmi0Q7kNvwHA7pDZ&_nc_oc=Adrshmj3DI9nJt-wjXjmRQ46pp8s16adR7cOCSLCF-uFcP3JbBJXtglZ26nyxo8xpXweQlFeRK0O3Mb_1DK4XxL6&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=JWSp_mzWjrhsPKgOmmeyiA&_nc_ss=7b2a8&oh=00_AQNs3WFoZ7jfjMg2EOBRl6K-CYQi5JbqKMa1Zulq7nuHig&oe=6AE45982'
        },
        {
            brand: 'Akademia Przywoływacza',
            platforms: ['Instagram', 'TikTok', 'Facebook', 'YouTube'],
            description: 'Marka własna opisana już we wcześniejszych sekcjach.',
            metrics: 'Od stycznia 2026 do teraz',
            image: 'https://p16-common-sign.tiktokcdn-eu.com/tos-no1a-avt-0068c001-no/60b4a74ccb289aa232ca732bfbc4d9c5~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=10399&refresh_token=257da779&x-expires=1793134800&x-signature=PhnFZYCOClk3r1RO%2F%2BtAXfMEoIg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=no1a'
        },
    ];
    return (_jsxs("div", { className: "social-media container", children: [_jsxs("div", { className: "social-media-header", children: [_jsx("h2", { children: "Social Media" }), _jsx("p", { children: "Marki, kt\u00F3rym mia\u0142am okazj\u0119 prowadzi\u0107 social media." })] }), _jsx("div", { className: "social-grid", children: socialProjects.map((project, idx) => (_jsxs("div", { className: "social-project-card", style: { animationDelay: `${idx * 0.1}s` }, children: [_jsx("div", { className: "social-image", children: _jsx("img", { src: project.image, alt: project.brand }) }), _jsxs("div", { className: "social-content", children: [_jsx("h3", { children: project.brand }), _jsx("div", { className: "social-platforms", children: project.platforms.map((platform, i) => (_jsx("span", { className: "platform-tag", children: platform }, i))) }), _jsx("p", { children: project.description }), _jsx("p", { className: "social-metrics", children: project.metrics })] })] }, idx))) })] }));
}
