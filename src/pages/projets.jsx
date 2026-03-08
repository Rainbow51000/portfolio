import { Link } from "react-router-dom";

export default function Projets() {
    return (
        <div>

            {/* Header */}
            <section className="max-w-4xl mx-auto px-8 py-24 text-center">
                <p className="text-sm font-mono tracking-widest uppercase mb-6" style={{ color: "#FFB310" }}>
                    — Projets
                </p>
                <h2 className="text-7xl font-black uppercase leading-none">
                    MES
                </h2>
                <h2 className="text-7xl font-black uppercase leading-none" style={{ WebkitTextStroke: "2px #944CB2", color: "transparent" }}>
                    TRAVAUX
                </h2>
            </section>

            {/* Projets détaillés */}
            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20 space-y-20">

                    {/* Projet 1 — Fight or Flight */}
                    <div id="fight-or-flight" className="border border-zinc-800">
                        {/* PLACEHOLDER: Remplace /public/asset/fightorflight.png par la vraie capture d'écran du jeu */}
                        <div className="w-full h-52 bg-zinc-900 flex items-center justify-center border-b border-zinc-800">
                            <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">[ Capture d'écran du jeu — à remplacer ]</p>
                        </div>

                        <div className="p-8">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div>
                                    <span className="text-xs font-mono uppercase" style={{ color: "#FFB310" }}>Projet personnel — GameJam</span>
                                    <h3 className="text-3xl font-black uppercase mt-1">Fight or Flight</h3>
                                </div>
                                <a href="https://github.com/Rainbow51000/fight-or-flight" target="_blank" rel="noopener noreferrer"
                                   className="text-xs font-mono border px-4 py-2 hover:border-white transition-colors"
                                   style={{ borderColor: "#944CB2", color: "#944CB2" }}>
                                    GitHub →
                                </a>
                            </div>

                            {/* Contexte */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Contexte</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Jeu réalisé en groupe de trois lors de la GameJam III organisée par l'IUT de Reims. Contrainte de temps : 48h pour produire un jeu jouable sur le thème imposé.
                                    {/* PLACEHOLDER: Précise le thème de la GameJam ici */}
                                </p>
                            </div>

                            {/* Ce que j'ai fait */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ma contribution</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    {/* PLACEHOLDER: Décris précisément ce que tu as fait (mécaniques, UI, level design, code...) */}
                                    [À préciser — ex : j'ai géré la logique de déplacement du personnage, le système de collision, et le level design des deux premiers niveaux en GDScript.]
                                </p>
                            </div>

                            {/* Fonctionnement technique */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Comment c'est réalisé</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Le jeu tourne sous <strong className="text-white">Godot Engine 4</strong>. La logique est écrite en <strong className="text-white">GDScript</strong>. Les scènes sont découpées par niveau, avec un système de gestion d'état pour les ennemis (machine à états simple). Les assets graphiques ont été créés ou adaptés pendant la jam.
                                    {/* PLACEHOLDER: Détaille les mécaniques spécifiques que tu as codées */}
                                </p>
                            </div>

                            {/* Stack */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">Stack technique</p>
                                <div className="flex flex-wrap gap-2">
                                    <Tag label="Godot 4" />
                                    <Tag label="GDScript" />
                                    <Tag label="Git" />
                                    {/* PLACEHOLDER: Ajoute d'autres outils utilisés si besoin */}
                                </div>
                            </div>

                            {/* Ce que j'ai appris */}
                            <div>
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ce que j'ai appris</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    {/* PLACEHOLDER: Ex : gestion du temps sous contrainte, organisation en équipe en 48h, architecture de scènes Godot */}
                                    [À préciser — ex : travail en équipe sous forte contrainte de temps, structuration rapide d'un projet Godot, communication sur les tâches à faire.]
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Projet 2 — CoLive */}
                    <div id="colive" className="border border-zinc-800">
                        {/* PLACEHOLDER: Remplace /public/asset/colive.png par la vraie capture */}
                        <div className="w-full h-52 bg-zinc-900 flex items-center justify-center border-b border-zinc-800">
                            <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">[ Capture d'écran du site — à remplacer ]</p>
                        </div>

                        <div className="p-8">
                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                <div>
                                    <span className="text-xs font-mono uppercase" style={{ color: "#FFB310" }}>Projet académique — SAÉ 3.01</span>
                                    <h3 className="text-3xl font-black uppercase mt-1">CoLive</h3>
                                </div>
                                <a href="https://github.com/Rainbow51000/sae3-01" target="_blank" rel="noopener noreferrer"
                                   className="text-xs font-mono border px-4 py-2 hover:border-white transition-colors"
                                   style={{ borderColor: "#944CB2", color: "#944CB2" }}>
                                    GitHub →
                                </a>
                            </div>

                            {/* Contexte */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Contexte</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Projet réalisé dans le cadre de la SAÉ 3.01 à l'IUT de Reims, en groupe. L'objectif était de concevoir et développer une application web complète avec toutes les opérations CRUD, gestion des utilisateurs, et base de données relationnelle.
                                </p>
                            </div>

                            {/* Ce que c'est */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ce que fait l'application</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    CoLive est une plateforme de mise en relation pour la colocation. Les utilisateurs peuvent créer un compte, publier des annonces de colocation, consulter celles des autres et contacter les annonceurs. Chaque annonce inclut une description, une localisation et le nombre de colocataires.
                                    {/* PLACEHOLDER: Complète avec les vraies fonctionnalités si différentes */}
                                </p>
                            </div>

                            {/* Ma contribution */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ma contribution</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    {/* PLACEHOLDER: Ex : j'ai géré le système d'authentification, les controllers Symfony, la modélisation BDD */}
                                    [À préciser — ex : j'ai développé les contrôleurs Symfony pour les annonces (création, modification, suppression), configuré Doctrine pour les entités et mis en place le système d'authentification.]
                                </p>
                            </div>

                            {/* Fonctionnement technique */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Comment c'est réalisé</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Architecture MVC avec <strong className="text-white">Symfony 6</strong>. La base de données est <strong className="text-white">MySQL</strong>, gérée via <strong className="text-white">Doctrine ORM</strong>. Le front est rendu avec <strong className="text-white">Twig</strong> et stylisé avec <strong className="text-white">Bootstrap 5</strong>. Le projet est versionné sur <strong className="text-white">Git</strong> avec un workflow de branches par fonctionnalité.
                                    {/* PLACEHOLDER: Précise si vous avez utilisé Docker, un hébergement particulier, des tests... */}
                                </p>
                            </div>

                            {/* Stack */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">Stack technique</p>
                                <div className="flex flex-wrap gap-2">
                                    <Tag label="PHP 8" />
                                    <Tag label="Symfony 6" />
                                    <Tag label="MySQL" />
                                    <Tag label="Doctrine ORM" />
                                    <Tag label="Twig" />
                                    <Tag label="Bootstrap 5" />
                                    <Tag label="Git" />
                                </div>
                            </div>

                            {/* Ce que j'ai appris */}
                            <div>
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ce que j'ai appris</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    {/* PLACEHOLDER: Décris les apprentissages concrets */}
                                    [À préciser — ex : structuration d'un projet Symfony de A à Z, gestion de la BDD avec Doctrine, travail en équipe sur Git avec résolution de conflits.]
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Projet 3 — Ce portfolio */}
                    <div id="portfolio" className="border border-zinc-800 p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div>
                                <span className="text-xs font-mono uppercase" style={{ color: "#FFB310" }}>Projet personnel</span>
                                <h3 className="text-3xl font-black uppercase mt-1">Ce portfolio</h3>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ce que c'est</p>
                            <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                Portfolio personnel conçu pour présenter mon parcours, mes projets et mes compétences. Développé entièrement en React avec Vite, stylisé avec Tailwind CSS, sans template ni framework CSS tiers.
                            </p>
                        </div>

                        <div className="mb-6">
                            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Comment c'est réalisé</p>
                            <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                Application <strong className="text-white">React</strong> avec <strong className="text-white">Vite</strong> comme bundler. Routing côté client avec <strong className="text-white">React Router</strong>. CSS utilitaire avec <strong className="text-white">Tailwind CSS v4</strong>. Composants modulaires (Header, Footer, ScrollToTop). Design entièrement manuel, sans composants UI tiers.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">Stack technique</p>
                            <div className="flex flex-wrap gap-2">
                                <Tag label="React" />
                                <Tag label="Vite" />
                                <Tag label="JavaScript" />
                                <Tag label="Tailwind CSS v4" />
                                <Tag label="React Router" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Retour accueil */}
            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-12">
                    <Link to="/" className="text-xs font-mono uppercase tracking-widest border border-zinc-700 px-6 py-3 hover:border-white transition-colors inline-block">
                        ← Retour à l'accueil
                    </Link>
                </div>
            </section>

        </div>
    )
}

function Tag({ label }) {
    return (
        <span className="text-xs font-mono px-3 py-1 border" style={{ borderColor: "#944CB2", color: "#944CB2" }}>
            {label}
        </span>
    );
}
