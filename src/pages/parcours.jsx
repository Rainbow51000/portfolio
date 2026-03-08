export default function Parcours() {
    return (
        <div>
            <section className="max-w-4xl mx-auto px-8 py-24 text-center mt-9">
                <h3 className="text-sm font-mono tracking-widest uppercase mb-6" style={{ color: "#FFB310" }}>
                    — Parcours
                </h3>
                <h2 className="text-7xl font-black uppercase leading-none">
                    FORMATION
                </h2>
                <h2 className="text-7xl font-black uppercase leading-none" style={{ WebkitTextStroke: "2px #944CB2", color: "transparent" }}>
                    &amp; SKILLS
                </h2>
            </section>

            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h3 className="text-xs font-mono tracking-widest uppercase mb-12" style={{ color: "#944CB2" }}>
                        — Diplômes
                    </h3>

                    <div className="relative">
                        <span className="text-xs font-mono" style={{ color: "#FFB310" }}>2024</span>
                        <h4 className="text-2xl font-black uppercase mt-1 mb-1">BAC Général</h4>
                        <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-2">Lycée Oehmichen | Châlons-en-Champagne</p>
                        <p className="text-zinc-400 font-mono text-sm max-w-xl">
                            Spécialité Mathématiques et NSI (Numérique et sciences informatiques).
                            Avec mention, certification Cambridge (C1).
                        </p>
                    </div>

                    <div className="relative mt-9">
                        <span className="text-xs font-mono" style={{ color: "#FFB310" }}>2024 - En cours</span>
                        <h4 className="text-2xl font-black uppercase mt-1 mb-1">BUT Informatique</h4>
                        <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-2">IUT de Reims</p>
                        <p className="text-zinc-400 font-mono text-sm max-w-xl">
                            Formation de niveau Bac+3 spécialisée dans la conception, le développement et le déploiement d'applications. Apprentissage des bonnes pratiques (Clean Code, Agile, tests).
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h3 className="text-xs font-mono tracking-widest uppercase mb-10" style={{ color: "#FFB310" }}>
                        — Domaines de compétences techniques
                    </h3>

                    <div className="space-y-10">
                        <div>
                            <h4 className="text-xl font-bold font-mono mb-4 text-[#FFB310]">Développement Frontend</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-[#FFB310]">JavaScript, React & JSX</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Niveau intermédiaire. Utilisé pour créer des SPA (comme ce portfolio). Bonne maîtrise de la logique JS, des hooks (useState, useEffect) et de React Router.
                                    </p>
                                </div>
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-[#FFB310]">HTML, CSS & Tailwind</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Niveau avancé. Intégration responsive web design. Utilisation de Tailwind pour un prototypage rapide avec un CSS simple.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold font-mono mb-4 text-[#944CB2]">Développement Backend & Data</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-[#944CB2]">PHP, Symfony, API Platform</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Base solide. Modèle MVC, développement de sites en PHP et le Framework Symfony, création d'API REST grâce à API Platform, gestion des entités avec Doctrine.
                                    </p>
                                </div>
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-[#944CB2]">Python</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Développement de scripts, automatisation de tâches et traitement de données. Syntaxe claire et programmation orientée objet.
                                    </p>
                                </div>
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-[#944CB2]">SQL (Oracle)</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Compréhension des modèles relationnels, écriture de requêtes complexes, jointures, gestion de bases de données et de procédures, fonctions, triggers, curseurs grâce au PL/SQL sous environnement Oracle.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold font-mono mb-4 text-white">Outils, Game Dev & Autres</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-white">Godot & GDScript</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Réalisation de jeux personnels et en groupe lors de GameJams, jeux 2D et 3D. Utilisation du scriptage événementiel grâce aux signaux des Nodes.
                                    </p>
                                </div>
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-white">Lua</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Niveau débutant. Développement de jeux vidéo grâce à Roblox Studio, connaissance générale de la syntaxe et des interactions Client - Serveur grâce aux Remote Events.
                                    </p>
                                </div>
                                <div className="border border-zinc-800 p-4 md:col-span-2 lg:col-span-1">
                                    <span className="font-bold text-white">Git / GitHub</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Versioning de code au quotidien. Habitué au travail collaboratif (branches, pull requests, résolution de conflits).
                                    </p>
                                </div>
                                <div className="border border-zinc-800 p-4 md:col-span-2 lg:col-span-1">
                                    <span className="font-bold text-white">Docker</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Utilisation d'un projet Docker avec une version Dev et une version Prod. Conteneurisation d'un projet déjà existant.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}