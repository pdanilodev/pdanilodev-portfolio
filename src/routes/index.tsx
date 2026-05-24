import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFigma,
  SiGit,
  SiNodedotjs,
  SiVite,
} from "react-icons/si";
import {
  Sun,
  Moon,
  Github,
  Mail,
  Linkedin,
  Languages,
  ExternalLink,
  Trophy,
  Globe2,
  Flag,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import avatarUrl from "@/assets/avatar.png";
import roboticsWorld from "@/assets/robotics-world.jpg";
import roboticsNational from "@/assets/robotics-national.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pablo Danilo — Front-End Developer" },
      {
        name: "description",
        content:
          "Portfólio de Pablo Danilo — Front-End Developer focado em React, Next.js e UI/UX.",
      },
    ],
  }),
});

type Lang = "pt" | "en";

const t = {
  pt: {
    role: "Front-End Developer",
    contents: "CONTEÚDO",
    home: "Início",
    projects: "Projetos",
    robotics: "Robótica",
    principles: "Princípios",
    about: "Sobre",
    path_front: "/front-end",
    headline: "Construo interfaces que saem do caminho do usuário.",
    about_label: "/sobre",
    about_text: "Quem, o que, por quê",
    now_label: "/robotica",
    now_text: "Campeão mundial de robótica",
    stack: "/stack-e-ferramentas",
    projects_path: "/projetos",
    robotics_path: "/robotica",
    principles_path: "/principios",
    about_section: "/sobre",
    about_headline: "Quem, o que, por quê.",
    about_body:
      "Sou Pablo Danilo, Front-End Developer focado em construir interfaces simples, performáticas e acessíveis. Trabalho com Robótica & STEAM e gosto de tipografia, espaços em branco e detalhes que somem do caminho do usuário.",
    robotics_body:
      "Desde 2022 competindo em robótica — regionais, nacionais e mundiais. Campeão mundial e múltiplas vezes pódio em torneios oficiais. Robótica me ensinou a pensar em sistemas, prototipar rápido e iterar sob pressão.",
    robotics_items: [
      {
        title: "Campeão Mundial",
        year: "Mundial · FTC",
        desc: "Título mundial conquistado representando o Brasil no FIRST Tech Challenge — equipe Space Tech #23504.",
        icon: "globe",
        photo: "world",
      },
      {
        title: "Festival SESI / Nacional",
        year: "Brasil · 2026",
        desc: "Winning Alliance Award, Design Award e Control Award no Festival SESI de Educação — pódio em múltiplas categorias.",
        icon: "flag",
        photo: "national",
      },
    ],
    principles_items: [
      {
        title: "Simples vence complexo",
        desc: "Toda decisão de UI começa pela pergunta: dá pra remover?",
      },
      {
        title: "Performance é respeito",
        desc: "Tempo do usuário é caro. Otimizar não é luxo, é obrigação.",
      },
      {
        title: "Detalhe importa",
        desc: "Espaçamento, tipografia e microinterações são o que separam bom de memorável.",
      },
      {
        title: "Aprender em público",
        desc: "Documentar, compartilhar e errar à vista de todos — robótica me ensinou isso.",
      },
    ],
    cta: "Vamos construir algo juntos?",
    cta_link: "Me chama no e-mail",
    view_repo: "Ver repositório",
  },
  en: {
    role: "Front-End Developer",
    contents: "CONTENTS",
    home: "Home",
    projects: "Projects",
    robotics: "Robotics",
    principles: "Principles",
    about: "About",
    path_front: "/front-end",
    headline: "I build interfaces that get out of the way.",
    about_label: "/about",
    about_text: "Who, what, why",
    now_label: "/robotics",
    now_text: "Robotics world champion",
    stack: "/stack-and-tools",
    projects_path: "/projects",
    robotics_path: "/robotics",
    principles_path: "/principles",
    about_section: "/about",
    about_headline: "Who, what, why.",
    about_body:
      "I'm Pablo Danilo, a Front-End Developer focused on building simple, performant and accessible interfaces. I work with Robotics & STEAM and love typography, whitespace and details that get out of the user's way.",
    robotics_body:
      "Competing in robotics since 2022 — regional, national and world stages. World champion and multiple podiums in official tournaments. Robotics taught me to think in systems, prototype fast and iterate under pressure.",
    robotics_items: [
      {
        title: "World Champion",
        year: "World · FTC",
        desc: "World title won representing Brazil at FIRST Tech Challenge — team Space Tech #23504.",
        icon: "globe",
        photo: "world",
      },
      {
        title: "SESI Festival / National",
        year: "Brazil · 2026",
        desc: "Winning Alliance Award, Design Award and Control Award at the SESI Education Festival — podium across multiple categories.",
        icon: "flag",
        photo: "national",
      },
    ],
    principles_items: [
      {
        title: "Simple beats complex",
        desc: "Every UI decision starts with: can this be removed?",
      },
      {
        title: "Performance is respect",
        desc: "The user's time is expensive. Optimizing isn't a luxury, it's a duty.",
      },
      {
        title: "Details matter",
        desc: "Spacing, typography and microinteractions are what turn good into memorable.",
      },
      {
        title: "Learn in public",
        desc: "Document, share, fail in the open — robotics taught me that.",
      },
    ],
    cta: "Shall we build something together?",
    cta_link: "Drop me an email",
    view_repo: "View repository",
  },
} as const;

const STACK = [
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

const EMAIL = "pablodanilo2007@gmail.com";
const GITHUB = "https://github.com/pdanilodev";
const LINKEDIN = "https://www.linkedin.com/in/pdanilodev/";

const PROJECTS = [
  {
    name: "pdanilodev-portfolio",
    repo: "https://github.com/pdanilodev/pdanilodev-portfolio",
    year: "2026",
    pt: "Meu portfólio pessoal — minimalista, multilíngue (PT/EN), dark/light mode e foco em tipografia e performance.",
    en: "My personal portfolio — minimalist, multilingual (PT/EN), dark/light mode and focused on typography and performance.",
    tags: ["React", "TypeScript", "TanStack", "Vite"],
  },
  {
    name: "SintecEnergy-Hub",
    repo: "https://github.com/pdanilodev/SintecEnergy-Hub",
    year: "2026",
    pt: "Landing page para empresa de energia solar — design moderno, responsivo e otimizado para conversão.",
    en: "Landing page for a solar energy company — modern, responsive design optimized for conversion.",
    tags: ["React", "Tailwind", "Vite"],
  },
];

const ROBOTICS_ICONS = { globe: Globe2, flag: Flag } as const;
const ROBOTICS_PHOTOS: Record<string, string> = {
  world: roboticsWorld,
  national: roboticsNational,
};

function Index() {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [lang, setLang] = useState<Lang>("pt");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "dark";
    const savedLang = (localStorage.getItem("lang") as Lang) || "pt";
    setTheme(savedTheme);
    setLang(savedLang);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute(
      "lang",
      lang === "pt" ? "pt-BR" : "en",
    );
  }, [lang]);

  useEffect(() => {
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ["home", "projects", "robotics", "principles", "about"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const i = t[lang];
  const TOC = [
    { id: "home", label: i.home, num: "01" },
    { id: "projects", label: i.projects, num: "02" },
    { id: "robotics", label: i.robotics, num: "03" },
    { id: "principles", label: i.principles, num: "04" },
    { id: "about", label: i.about, num: "05" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <header className="brand">
            <img
              src={avatarUrl}
              alt="Pablo Danilo"
              className="avatar"
              width={56}
              height={56}
              loading="eager"
              decoding="async"
            />
            <div>
              <h1 className="brand-name">Pablo Danilo</h1>
              <p className="brand-role">{i.role} · Robótica & STEAM</p>
              <nav className="socials" aria-label="Social">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                >
                  <Github size={18} strokeWidth={1.8} />
                </a>
                <a href={`mailto:${EMAIL}`} aria-label="Email">
                  <Mail size={18} strokeWidth={1.8} />
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} strokeWidth={1.8} />
                </a>
              </nav>
            </div>
          </header>

          <div>
            <p className="contents-label">{i.contents}</p>
            <ul className="toc">
              {TOC.map((row) => (
                <li
                  key={row.id}
                  className={active === row.id ? "active" : ""}
                  onClick={() => scrollTo(row.id)}
                >
                  <span className="dot" />
                  <span>{row.label}</span>
                  <span className="dots" />
                  <span className="num">{row.num}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-actions">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? (
                <Sun size={14} strokeWidth={1.8} />
              ) : (
                <Moon size={14} strokeWidth={1.8} />
              )}
            </button>
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              aria-label="Toggle language"
              title="Idioma / Language"
            >
              <Languages size={14} strokeWidth={1.8} />
              <span>{lang.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </aside>

      <main className="main">
        <section id="home" className="section">
          <p className="path">{i.path_front}</p>
          <h2 className="headline">{i.headline}</h2>
          <div className="duo">
            <div className="duo-item" onClick={() => scrollTo("about")}>
              <span className="path">{i.about_label}</span>
              <span className="duo-text">{i.about_text}</span>
            </div>
            <div className="duo-item" onClick={() => scrollTo("robotics")}>
              <span className="path">{i.now_label}</span>
              <span className="duo-text">{i.now_text}</span>
            </div>
          </div>
        </section>

        <section className="section">
          <p className="path">{i.stack}</p>
          <ul className="stack">
            {STACK.map(({ name, Icon, color }) => (
              <li key={name}>
                <Icon size={14} color={color} />
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section">
          <p className="path">{i.projects_path}</p>
          <ul className="list">
            {PROJECTS.map((p) => (
              <li key={p.name} className="project-item">
                <div className="row">
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener"
                    className="title repo-title"
                  >
                    pdanilodev/{p.name}
                  </a>
                  <span className="sep">•</span>
                  <span className="year">{p.year}</span>
                </div>
                <p className="desc">{lang === "pt" ? p.pt : p.en}</p>
                <div className="project-meta">
                  <div className="tags">
                    {p.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener"
                    className="repo-link"
                  >
                    <Github size={12} strokeWidth={1.8} />
                    <span>{i.view_repo}</span>
                    <ExternalLink size={11} strokeWidth={1.8} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="robotics" className="section">
          <p className="path">{i.robotics_path}</p>
          <div className="robotics-hero">
            <Trophy size={18} strokeWidth={1.8} className="trophy" />
            <p className="desc long">{i.robotics_body}</p>
          </div>
          <ul className="robotics-grid">
            {i.robotics_items.map((r) => {
              const RIcon =
                ROBOTICS_ICONS[r.icon as keyof typeof ROBOTICS_ICONS] ?? Trophy;
              const photo = (r as { photo?: string }).photo;
              return (
                <li key={r.title} className="robotics-card">
                  <div className="robotics-photo">
                    {photo && ROBOTICS_PHOTOS[photo] && (
                      <img
                        src={ROBOTICS_PHOTOS[photo]}
                        alt={r.title}
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={450}
                      />
                    )}
                  </div>
                  <div className="robotics-card-head">
                    <RIcon size={14} strokeWidth={1.8} />
                    <span className="year">{r.year}</span>
                  </div>
                  <h3 className="title">{r.title}</h3>
                  <p className="desc">{r.desc}</p>
                </li>
              );
            })}
          </ul>
        </section>

        <section id="principles" className="section">
          <p className="path">{i.principles_path}</p>
          <ul className="list">
            {i.principles_items.map((p) => (
              <li key={p.title}>
                <div className="row">
                  <span className="title">{p.title}</span>
                </div>
                <p className="desc">{p.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="about" className="section">
          <p className="path">{i.about_section}</p>
          <h2 className="headline-sm">{i.about_headline}</h2>
          <p className="desc long">{i.about_body}</p>
        </section>

        <footer className="footer">
          <div className="cta-card">
            <div className="cta-glow" aria-hidden="true" />
            <div className="cta-card-text">
              <p className="cta-eyebrow">
                <Sparkles size={11} strokeWidth={2} />
                <span>
                  {lang === "pt"
                    ? "Disponível para novos projetos"
                    : "Available for new projects"}
                </span>
              </p>
              <h3 className="cta-title">{i.cta}</h3>
              <p className="cta-sub">
                {lang === "pt"
                  ? "Front-end, UI/UX e ideias fora da caixa. Bora trocar uma ideia."
                  : "Front-end, UI/UX and out-of-the-box ideas. Let's chat."}
              </p>
            </div>
            <div className="cta-actions">
              <a href={`mailto:${EMAIL}`} className="cta-btn primary">
                <span className="cta-btn-label">
                  <Mail size={14} strokeWidth={2} />
                  <span>
                    {lang === "pt"
                      ? "Iniciar conversa"
                      : "Start a conversation"}
                  </span>
                </span>
                <ArrowUpRight size={14} strokeWidth={2} className="cta-arrow" />
              </a>
              <span className="cta-divider" aria-hidden="true" />
              <div className="cta-secondary">
                <a
                  href={`mailto:${EMAIL}`}
                  className="cta-icon-btn"
                  aria-label="Email"
                  title={EMAIL}
                >
                  <Mail size={16} strokeWidth={1.8} />
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener"
                  className="cta-icon-btn"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github size={16} strokeWidth={1.8} />
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener"
                  className="cta-icon-btn"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin size={16} strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Pablo Danilo ·{" "}
            {lang === "pt" ? "Feito com cuidado" : "Crafted with care"}
          </p>
        </footer>
      </main>
    </div>
  );
}
