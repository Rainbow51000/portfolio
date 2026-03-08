import { Link } from "react-router-dom";

export default function Projets() {
    return (
        <div>
            <section className="max-w-4xl mx-auto px-8 py-24 text-center mt-9">
                <h3 className="text-sm font-mono tracking-widest uppercase mb-6" style={{ color: "#FFB310" }}>
                    — Projets
                </h3>
                <h2 className="text-7xl font-black uppercase leading-none">
                    MES
                </h2>
                <h2 className="text-7xl font-black uppercase leading-none" style={{ WebkitTextStroke: "2px #944CB2", color: "transparent" }}>
                    TRAVAUX
                </h2>
            </section>

            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20 space-y-20">

                    <div id="fight-or-flight" className="border border-zinc-800">
                        <img
                            src="/public/asset/fightorflight.png"
                            alt="Projet 1"
                            className="w-full h-44 object-cover group-hover:grayscale-0 transition-all duration-500"
                        />

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

                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Contexte</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Jeu réalisé en groupe de trois lors de la GameJam III organisée par l'IUT de Reims.
                                    Contrainte de temps : Une semaine pour développer un jeu jouable sur le thème imposé "Pirate contre Chevalier, et une poule qui court...".
                                </p>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ma contribution</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Développement de la structure du joueur et des IA avec leur boîte de collision et leur hitbox correspondante. Création du système d'arme au joueur, des animations en fonction des actions de joueur et de l'IA, du système de scène.
                                </p>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Comment c'est réalisé</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Le jeu tourne sous <strong className="text-white">Godot Engine 4</strong>. La logique est écrite en <strong className="text-white">GDScript</strong>. Le jeu est du genre "Runner", où le joueur court à l'infini vers la droite avec un système de score, où le niveau est générée procédurallement de façon déterminée avec un système de parcelles aléatoire. Le joueur rencontre 2 types d'ennemis qui requiert une arme précise, forçant le joueur à utiliser la bonne arme au bon moment.
                                </p>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">Stack technique</p>
                                <div className="flex flex-wrap gap-2">
                                    <Tag label="Godot 4" />
                                    <Tag label="GDScript" />
                                    <Tag label="Git" />
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ce que j'ai appris</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Comment réaliser un jeu vidéo en groupe, avec des rôles attribuée (Développeur, Designer / Sprite maker), selon certaines contraintes de temps et des critères à remplir.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="colive" className="border border-zinc-800">
                        <img
                            src="/public/asset/colive.png"
                            alt="Projet 2"
                            className="w-full h-44 object-cover group-hover:grayscale-0 transition-all duration-500"
                        />

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

                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Contexte</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Projet réalisé dans le cadre de la SAÉ 3.01 à l'IUT de Reims, en groupe. L'objectif était de concevoir et développer une application web CRUD complète avec toutes les opérations CRUD, gestion des utilisateurs, et base de données relationnelle.
                                </p>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ce que fait l'application</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    CoLive est une plateforme de mise en relation pour la colocation des étudiants. Les utilisateurs peuvent créer un compte, publier des annonces de colocation, consulter celles des autres et contacter les annonceurs. Chaque annonce inclut une description, une localisation et des photos associées.
                                </p>
                            </div>

                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ma contribution</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Leading sur les rôles des membres du groupe avec leur tâches associées. Création des contrôleurs d'index, avec une mise en place de la pagination. Intégration du système de comptes des utilisateurs, avec la sécurité associée. Correction de certains bugs sur les contrôleurs et sur les entitées. Optimisation des requêtes sur les pages d'Index. Mise en place d'une barre de recherche.
                                </p>
                            </div>

                            {/* Fonctionnement technique */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Comment c'est réalisé</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Architecture MVC avec <strong className="text-white">Symfony</strong>. La base de données est <strong className="text-white">MariaDB</strong>, gérée via <strong className="text-white">Doctrine ORM</strong>. Le front est rendu avec <strong className="text-white">Twig</strong> et stylisé avec <strong className="text-white">Bootstrap 5</strong>. Le projet est versionné sur <strong className="text-white">Git</strong> avec un workflow de branches par fonctionnalité. Les tests unitaires utilisent une base de données <strong className="text-white">SQLite</strong>
                                </p>
                            </div>

                            {/* Stack */}
                            <div className="mb-6">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-3">Stack technique</p>
                                <div className="flex flex-wrap gap-2">
                                    <Tag label="PHP 8.3" />
                                    <Tag label="Symfony" />
                                    <Tag label="MySQL" />
                                    <Tag label="phpMyAdmin" />
                                    <Tag label="Doctrine ORM" />
                                    <Tag label="Twig" />
                                    <Tag label="Bootstrap 5" />
                                    <Tag label="Git" />
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">Ce que j'ai appris</p>
                                <p className="text-zinc-400 font-mono text-sm leading-relaxed">
                                    Structure d'un projet Symfony du recueil de besoins, jusqu'au développement et aux tests unitaires des pages du site web. Mise en pratique du développement avec une équipe de 5 personnes de façon organisée.
                                </p>
                            </div>
                        </div>
                    </div>

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
                                Application <strong className="text-white">React</strong> avec <strong className="text-white">Vite</strong> comme bundler. Routing côté client avec <strong className="text-white">React Router</strong>. CSS utilitaire avec <strong className="text-white">Tailwind CSS</strong>. Composants modulaires (Header, Footer, ScrollToTop). Design entièrement manuel, sans composants UI tiers. Site web single-page grâce à React et React Routeur.
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
