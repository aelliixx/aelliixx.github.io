import Link from "next/link";
import Image, {type StaticImageData} from "next/image";

import {
    contactInfo,
    experience,
    games,
    profile,
    skills,
    smallProjects,
    softwareWorks,
    webProjects,
} from "./data";
import ProjectIndex from "./project-index";
import TechChips from "./tech-chips";
import ThemeToggle from "./theme-toggle";
import type {GameProject} from "./data";

const email = contactInfo.email;

function githubUrl(handle: string) {
    return `https://github.com/${handle}`;
}

const navLinks = [
    {href: "#work", label: "work"},
    {href: "#games", label: "games"},
    {href: "#software", label: "software"},
    {href: "#experience", label: "experience"},
    {href: "#contact", label: "contact"},
];

function SectionHead({
                         id,
                         title,
                         count,
                     }: {
    id: string;
    title: string;
    count?: string;
}) {
    return (
        <h2 id={id} className="section-title">
            {title}
            {count && (
                <sup className="count mono" aria-hidden="true">{count}</sup>
            )}
        </h2>
    );
}

export default function Home() {
    return (
        <>
            <a className="skip-link" href="#main">Skip to content</a>

            <header className="site-nav">
                <a href="/#" className="handle mono">aelliixx</a>
                <nav aria-label="Main">
                    {navLinks.map((l) => (
                        <a key={l.href} href={l.href}>{l.label}</a>
                    ))}
                </nav>
                <ThemeToggle/>
            </header>

            <main id="main">
                {/* Hero */}
                <section className="hero inner">
                    <p className="availability">
                        <span className="bead" aria-hidden="true"/> Open to work
                    </p>
                    <h1>
                        Donatas
                        <br/>
                        Mockus
                    </h1>
                    <p className="hero-job mono">Full-stack Web Developer</p>
                    <p className="hero-role">
                        I spend my days shipping websites with Next.js and TypeScript,
                        my evenings in Unreal Engine 5, and my odd hours writing a
                        compiler nobody asked for.
                    </p>
                    <div className="hero-actions">
                        <a href={`mailto:${email}`} className="btn">Email me</a>
                        <a href="#experience" className="btn btn-quiet">See résumé</a>
                    </div>
                </section>

                {/* About */}
                <section className="section inner" aria-labelledby="about">
                    <SectionHead id="about" title="About"/>
                    <div className="about-grid">
                        <div className="about-copy">
                            <p>{profile}</p>
                            <p>
                                I started programming at thirteen, making simple 2D platformers
                                in Unity with C# and JavaScript (remember when that ran in
                                Unity?) C++, HTML and CSS followed, and stayed.
                            </p>
                            <p>
                                My mid-teens went sideways in the useful way: I designed logos,
                                took up 3D modelling, drew murals, then got pulled back
                                in through cryptography and netsec. Somewhere around sixteen I
                                was asked to help on an RPG called Growth of Glia, and ended up
                                leading the artists, writers and composers before graduating
                                school. I didn&apos;t choose game development — it chose me.
                            </p>
                            <p className="beyond">
                                Outside of work I enjoy digital electronics, music, chemistry,
                                photography, woodworking, knitting, baking, gardening. Listing
                                it all would mean updating this website monthly.
                            </p>
                        </div>
                        <figure className="about-facts mono">
                            <div>
                                <span className="k">based in</span>
                                <span>{contactInfo.location}</span>
                            </div>
                            <div>
                                <span className="k">programming since</span>
                                <span>age 13</span>
                            </div>
                            <div>
                                <span className="k">games shipped on</span>
                                <span>8+ titles</span>
                            </div>
                            <div>
                                <span className="k">years on Virtuverse</span>
                                <span>5+</span>
                            </div>
                        </figure>
                    </div>
                </section>

                {/* Work */}
                <section className="section inner" aria-labelledby="work">
                    <SectionHead
                        id="work"
                        title="Web"
                        count={`${(webProjects.length + "").padStart(2, "0")}`}
                    />
                    <p className="section-note">
                        Client and product work from the last few years. Hover a row to
                        preview it; open it for the story.
                    </p>
                    <ProjectIndex rows={webProjects}/>
                </section>

                {/* Games */}
                <section className="section inner" aria-labelledby="games">
                    <SectionHead id="games" title="Games" count="06+"/>
                    <div className="games">
                        {games.map((g, i) => (
                            <GameRow key={g.title} game={g} flip={i % 2 === 1}/>
                        ))}
                    </div>
                </section>

                {/* Software */}
                <section className="section inner" aria-labelledby="software">
                    <SectionHead id="software" title="Software" count="05"/>
                    <div className="soft-list">
                        {softwareWorks.map((s) => (
                            <div key={s.title} className="soft-row">
                                <h3>{s.title}</h3>
                                <p>{s.blurb}</p>
                            </div>
                        ))}
                    </div>
                    <p className="minor-intro">
                        And the stuff that never quite made it (but taught me plenty):
                    </p>
                    <div className="minor-list">
                        {smallProjects.map((p, i) => (
                            <div key={p.title}>
                                <strong>{p.title}:</strong> {p.blurb}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section className="section inner" aria-labelledby="experience">
                    <SectionHead id="experience" title="Experience"/>
                    <ol className="xp-list">
                        {experience.map((r) => (
                            <li key={r.title} className="xp-row">
                                <p className="xp-years mono">{r.years}</p>
                                <div>
                                    <h3>{r.title}</h3>
                                    <p className="xp-org">{r.org}</p>
                                    <p>{r.summary}</p>
                                    <ul className="xp-bullets mono">
                                        {r.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                    <TechChips items={r.stack} label={`Tech used at ${r.org}`}/>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Skills */}
                <section className="section inner" aria-labelledby="skills">
                    <SectionHead id="skills" title="Technical Skills"/>
                    <ul className="soft-list">
                        {skills.map((s) => (
                            <li key={s.label} className="soft-row">
                                <span className="k mono">{s.label}</span>
                                <TechChips items={s.values} label={`Skills: ${s.label}`}/>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Testimony */}
                <section className="section inner" aria-labelledby="testimony-h">
                    <h2 id="testimony-h" className="visually-hidden">
                        A word from a client
                    </h2>
                    <figure className="testimony">
                        <blockquote>
                            <p>
                                Donatas is a talented developer who comprehends assigned tasks.
                                He willingly offers suggestions and technical assistance to
                                ensure well-executed features. He&apos;s efficient and organised
                                in his coding work.
                            </p>
                        </blockquote>
                        <figcaption>
                            <span className="who">Sam</span>
                            <span className="role mono">Lead Producer, Mindflair Games</span>
                        </figcaption>
                    </figure>
                </section>

                {/* Contact */}
                <section className="section contact inner" aria-labelledby="contact">
                    <SectionHead id="contact" title="Contact"/>
                    <p className="contact-note">
                        Need my expertise? Whether it&apos;s a website, an enterprise
                        application, or your next game, I can take your project from idea
                        to ship.
                    </p>
                    <address className="contact-detail mono">
                        <span>{contactInfo.location}</span>
                    </address>
                    <a className="contact-mail" href={`mailto:${email}`}>
                        {email}
                    </a>
                    <div className="contact-links mono">
                        <a href={contactInfo.github}>github</a>
                        <a href={contactInfo.linkedin}>linkedin</a>
                        <a href="/resume.pdf">résumé</a>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <p className="mono">© 2026 Donatas Mockus</p>
                <p className="mono">aelliixx</p>
            </footer>
        </>
    );
}

function GameRow({game, flip}: { game: GameProject; flip: boolean }) {
    const fig = game.image ? (
        <figure className="game-fig">
            <Image
                src={game.image}
                alt={`Artwork or screenshot for ${game.title}`}
                placeholder="blur"
                sizes="(min-width: 900px) 46vw, 100vw"
            />
            {game.credit && <figcaption className="mono">{game.credit}</figcaption>}
        </figure>
    ) : null;
    const body = (
        <div className="game-body">
            <h3>{game.title}</h3>
            <p>{game.blurb}</p>
            <TechChips items={game.stack} label={`Tech used in ${game.title}`}/>
        </div>
    );
    return (
        <article className={`game-row ${flip ? "flip" : ""} ${game.image ? "" : "game-row--no-image"}`}>
            {fig}
            {body}
        </article>
    );
}
