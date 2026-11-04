import type {StaticImageData} from "next/image";

import allographic from "../public/images/allographic_website-1280.webp";
import annunziato from "../public/images/annunziato-1280.webp";
import diamondback from "../public/images/diamondback-1280.webp";
import deliciously from "../public/images/deliciously-1280.webp";
import hydes from "../public/images/hydes_haunt_seek-1280.webp";
import nmn from "../public/images/nmn_game-1280.webp";
import retroui from "../public/images/retroui_website-1280.webp";
import moria from "../public/images/return_to_moria-1280.webp";
import uprising from "../public/images/uprising-460.webp";
import virtuverseConcept from "../public/images/virtuverse_concept-1280.webp";
import virtuverseSite from "../public/images/virtuverse_website-1280.webp";

export type WebProject = {
    title: string;
    kind: string;
    blurb: string;
    stack: string[];
    image: StaticImageData;
    year?: string;
};

export const webProjects: WebProject[] = [
    {
        title: "Diamondback Studios",
        kind: "site + CMS",
        blurb:
            "A portfolio platform for a design studio, built around a fully fledged custom CMS. The owner publishes work, writes blog posts and reshapes their portfolio themselves — no developer in the loop.",
        stack: ["Next.js", "TypeScript", "Lexical", "PostgreSQL"],
        image: diamondback,
    },
    {
        title: "Annunziato",
        kind: "web app",
        blurb:
            "A martial-arts progress tracker designed to nudge students toward their personal goals. Achievements, leaderboards and prizes for hitting milestones turn discipline into something you want to open every day.",
        stack: ["Next.js", "TypeScript", "PostgreSQL"],
        image: annunziato,
    },
    {
        title: "Retro/UI",
        kind: "library + site",
        blurb:
            "Retro/UI is a component library styled after the golden era of web and desktop UIs — carved group boxes, sunken input wells, hatched title bars. Underneath it is all modern design tokens, theming and accessible semantics.",
        stack: ["Next.js", "React", "TypeScript", "Tailwind"],
        image: retroui,
    },
    {
        title: "Virtuverse",
        kind: "site + dashboard",
        blurb:
            "The web home of my day job. I have been a developer on Virtuverse for over five years; this site anchors the game's community and store.",
        stack: ["React", "Xsolla", "Vue", "PostgreSQL"],
        image: virtuverseSite,
    },
    {
        title: "Allographic.io",
        kind: "site + CRM",
        blurb:
            "A marketing site backed by a client CRM — the app includes a full project management dashboard for tracking projects, invoices, quotes and business metrics.",
        stack: ["Next.js", "TypeScript", "Auth.js", "PostgreSQL"],
        image: allographic,
    },
    {
        title: "Deliciously",
        kind: "site + CMS",
        blurb:
            "A recipe-sharing platform with a focus on quality over quantity: curated, tested recommendations rather than an endless feed.",
        stack: ["Next.js", "JavaScript", "Node", "Python", "PostgreSQL"],
        image: deliciously,
    },
];

export type GameProject = {
    title: string;
    blurb: string;
    credit?: string;
    stack: string[];
    image?: StaticImageData;
};

export const games: GameProject[] = [
    {
        title: "Virtuverse",
        blurb:
            "An RCE MMO-RPG set in a virtual world — a sandbox-on-rails where players specialise in professions like crafting, mining and hunting, ally or fight factions, and explore large open worlds. I have been on this project for more than four years with an extremely talented team; together we have shipped six major updates and are writing the seventh now: a complete rewrite in Unreal Engine 5.",
        credit: "Artwork by Keegan Blazey — keeganblazey.artstation.com",
        stack: ["Unreal Engine 4/5", "C++", "AWS Gamelift", "DynamoDB", "Python", "Node", "PostgreSQL", "Perforce"],
        image: virtuverseConcept,
    },
    {
        title: "The Lord of the Rings: Return to Moria",
        blurb:
            "A survival crafting adventure set in the Fourth Age of Middle-earth. Lead the dwarves to reclaim Moria — mine, build, and battle through procedurally generated depths alone or with up to 8 players in co-op.",
        stack: ["Unreal Engine", "C++", "Perfoce"],
        image: moria,
    },
    {
        title: "No Man's North",
        blurb:
            "James Heresy is an average man in British Columbia who wakes up to the next ice age. With only his dog Monty at his side, he has to survive the wilderness before the storm finishes him off.",
        stack: ["Unity 3D", "C#", "Git"],
        image: nmn,
    },
    {
        title: "Hyde's Haunt & Seek",
        blurb:
            "A spooky asymmetrical hide-and-seek party game where you hunt ghosts... who happen to be your friends. One first-person Seeker against a team of three top-down poltergeists, published by Daedalic Entertainment and coming soon to Steam.",
        stack: ["Unity 3D", "C#", "Git"],
        image: hydes,
    },
    {
        title: "Uprising",
        blurb:
            "A modern-day riot simulator. Play the police — tear gas, shotguns, shield walls — or stand with the protestors, armed with everything from machetes to a surprising amount of cactus weaponry.",
        stack: ["Unreal Engine 5", "C++", "Subversion"],
        image: uprising,
    },
    {
        title: "Terraforma",
        blurb:
            "A 2D hex-tile game about controlling a network of plant roots to restore the soil's ecosystem — soil science as a game loop, with a message about taking care of the planet underneath it.",
        stack: ["Unity 2D", "C#", "Git"],
    },
    {
        title: "Galaxy of Battlecruisers",
        blurb:
            "Multiplayer space warfare with a tactics-first mindset: every ship class trades strengths for weaknesses, and a dynamic environment — asteroid fields, changing conditions — always fights back.",
        stack: ["Unreal Engine 5", "C++", "SteamAPI", "Perforce"],
    },
    {
        title: "Wildlife",
        blurb:
            "An animal-survival sandbox: pick your creature: be the prey or the predator. Roam a wide open world, survive the seasons, evolve, and hunt other players trying to make it through the same wild.",
        stack: ["Unreal Engine 5", "C++", "Perforce"],
    },
    {
        title: "Frostfall",
        blurb:
            "First-person survival horror on an Antarctic research station during a polar night that refuses to end. Keep the base alive, keep yourself alive, and find out why the night never ends.",
        stack: ["Unreal Engine 5", "C++", "Git"],
    },
];

export const softwareWorks: { title: string; blurb: string }[] = [
    {
        title: "alxLang",
        blurb:
            "A general-purpose language that started as a curiosity and spiraled into a full compiler: plaintext to AST, IR lowered to MIR, assembled to x86-64 and wasm. Currently deep in register selection.",
    },
    {
        title: "Compiler Explorer",
        blurb:
            "A fork of Matt Godbolt's godbolt.org that compiles and displays my own language, alxLang.",
    },
    {
        title: "cpp inquirer",
        blurb:
            "An interactive command-line prompt library for C++, in the spirit of Inquirer.js.",
    },
    {
        title: "coloforma",
        blurb:
            "Formatted terminal printing with full 8-bit colour support. I wrote it before I knew fmt existed.",
    },
    {
        title: "QCacheGrind",
        blurb:
            "Contributions to KDE and Qt's KCachegrind, the profiling-data visualiser I use near-daily to hunt performance problems in desktop apps.",
    },
];

export const smallProjects: { title: string; blurb: string }[] = [
    {title: "Invoicing", blurb: "the Python CLI I still run my quotes and invoices on"},
    {title: "AlxLib", blurb: "a C++ library of the utilities I kept rewriting"},
    {title: "SAP-1 emulator", blurb: "an 8-bit CPU emulator of Malvino and Brown's architecture"},
    {title: "74LS", blurb: "software emulation of a few popular TI chips"},
    {title: "QCalc", blurb: "thermodynamics and physics calcs, C#/WinForms"},
    {title: "RandomPulsarGraph", blurb: "random plots in tribute to Joy Division's Unknown Pleasures"},
    {title: "DownLink", blurb: "an Unreal Engine 4 homage to Introversion's Uplink"},
    {title: "Chemlist", blurb: "inventory tracking for my actual chemistry lab"},
    {title: "Space Invaders", blurb: "a clone with slightly different rules, built in UE5 in three days"},
    {title: "CppLT", blurb: "every C++ keyword redefined in Lithuanian, as a joke"},
];

export type ExperienceRole = {
    years: string;
    title: string;
    org: string;
    summary: string;
    bullets: string[];
    stack: string[];
};

export const experience: ExperienceRole[] = [
    {
        years: "May 2024 — Oct. 2026",
        title: "Full-stack Web Developer (Freelance)",
        org: "Self-employed",
        summary:
            "Independent consultant delivering full-stack web projects from idea to deployment, working with clients from first concept to launch.",
        bullets: [
            "Built and shipped full-stack web apps in Next.js, React, and TypeScript — business performance and accounting tools, CMS, CRM solutions, personal sites.",
            "Deployed to on-premise and AWS environments (EC2, VPC, S3, Lambda) with Docker, using GitHub Actions or TeamCity CI/CD; maintained client PostgreSQL databases.",
            "Wrote responsive, accessible interfaces with Tailwind/CSS3 and guarded against regressions with Vitest and Playwright-based tests.",
        ],
        stack: ["Next.js", "React", "TypeScript", "AWS", "Docker", "PostgreSQL", "GitHub Actions"],
    },
    {
        years: "Jun. 2022 — Jan. 2025",
        title: "Development Consultant (Contract)",
        org: "Magna Ludum Creatives LTD (MLC)",
        summary:
            "Contract consultant for clients shipping mobile, desktop, 2D and 3D titles in Unity and Unreal. Delivered gameplay design and development, UI/UX, bug fixing, and QA.",
        bullets: [
            "Designed and implemented performant user interfaces that don't get in the way of gameplay experience using Unity UI Toolkit and Unreal UMG.",
            "Optimised existing UIs averaging 10x performance increase.",
            "Started providing programming services to MLC clients as there was no such role prior to me joining.",
            "Worked with over 15 clients over the nearly three years, ranging from a few weeks to several years per project."
        ],
        stack: ["Unity", "Unreal Engine", "C#", "C++", "Figma"],
    },
    {
        years: "Feb. 2019 — May 2024",
        title: "Senior Programmer (Full-time)",
        org: "Virtuverse A.B.",
        summary:
            "Grew from junior developer to senior developer and project manager on a massively-multiplayer role-playing game's live services, also representing the studio at various conferences around the world.",
        bullets: [
            "Built reliable back-end REST APIs in Node.js/JavaScript serving 7,000 active users at 100% uptime, deployed to AWS Lambda or EC2.",
            "Migrated the back-end from Python (Django) and DynamoDB to Node.js (Express) and PostgreSQL saving 45% in infra costs.",
            "Created the homepage, user portal, storefront, and admin dashboard using React for the front-end, Xsolla for payments, and Node.js (Express) back-end.",
            "Created a Node.js, Redis, and WebSockets based chat service, decoupling it from the game's servers.",
            "Implemented a Lua-based UI framework for complementing Unreal UMG and allowing user-defined UIs.",
            "Managed a team of over 20 developers, designers, and artists, deciding deliverables and deadlines.",
        ],
        stack: ["Node.js", "React", "PostgreSQL", "AWS", "Docker", "Redis"],
    },
];

export type SkillRow = {
    label: string;
    values: string[];
};

export const skills: SkillRow[] = [
    {label: "Front-end", values: ["React", "Next.js", "Tailwind", "Figma", "HTML5", "CSS3"]},
    {label: "Back-end & Cloud", values: ["Node.js", ".NET", "AWS", "GCP", "Docker", "CI/CD"]},
    {label: "Languages", values: ["JavaScript", "TypeScript", "C#", "SQL", "C++", "Java"]},
    {label: "Data", values: ["MySQL", "PostgreSQL", "MSSQL", "Redis", "DynamoDB", "S3"]},
    {label: "Tools & AI", values: ["Git", "Perforce", "OpenCode", "ComfyUI"]},
    {label: "OS", values: ["Linux", "Windows"]},
];

export const profile =
    "Software developer with 7+ years shipping software, including 5+ years of professional JavaScript/TypeScript across back-end APIs (Node.js) and React front-ends, owning features end to end from design through QA and deployment.";

export const contactInfo = {
    location: "Vilnius, Lithuania",
    email: "mockus49@gmail.com",
    github: "https://github.com/aelliixx",
    linkedin: "https://linkedin.com/in/d-mockus",
    site: "https://aelliixx.com",
};
