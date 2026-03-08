export default function Parcours() {
    return (
        <div>
            {/* Header */}
            <section className="max-w-4xl mx-auto px-8 py-24 text-center">
                <p className="text-sm font-mono tracking-widest uppercase mb-6" style={{ color: "#FFB310" }}>
                    — Parcours
                </p>
                <h2 className="text-7xl font-black uppercase leading-none">
                    FORMATION
                </h2>
                <h2 className="text-7xl font-black uppercase leading-none" style={{ WebkitTextStroke: "2px #944CB2", color: "transparent" }}>
                    &amp; SKILLS
                </h2>
            </section>

            {/* Diplômes */}
            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h3 className="text-xs font-mono tracking-widest uppercase mb-12" style={{ color: "#944CB2" }}>
                        — Diplômes
                    </h3>

                    <div className="space-y-12 border-l-2 border-zinc-800 pl-8">

                        <div className="relative">
                            <div className="absolute -left-10 top-1 w-3 h-3 rotate-45" style={{ backgroundColor: "#FFB310" }} />
                            <span className="text-xs font-mono" style={{ color: "#FFB310" }}>2024</span>
                            <h4 className="text-2xl font-black uppercase mt-1 mb-1">BAC Général</h4>
                            <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-2">Lycée Oehmichen | Châlons-en-Champagne</p>
                            <p className="text-zinc-400 font-mono text-sm max-w-xl">
                                Spécialité Mathématiques et NSI (Numérique et sciences informatiques).
                                Avec mention, certification Cambridge (C1).
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-10 top-1 w-3 h-3 rotate-45" style={{ backgroundColor: "#FFB310" }} />
                            <span className="text-xs font-mono" style={{ color: "#FFB310" }}>2024 - En cours</span>
                            <h4 className="text-2xl font-black uppercase mt-1 mb-1">BUT Informatique</h4>
                            <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-2">IUT de Reims</p>
                            <p className="text-zinc-400 font-mono text-sm max-w-xl">
                                Formation de niveau Bac+3 spécialisée dans la conception, le développement et le déploiement d'applications. Apprentissage des bonnes pratiques (Clean Code, Agile, tests).
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Compétences détaillées */}
            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h3 className="text-xs font-mono tracking-widest uppercase mb-10" style={{ color: "#FFB310" }}>
                        — Domaines de compétences techniques
                    </h3>

                    <div className="space-y-10">
                        {/* Dev Frontend */}
                        <div>
                            <h4 className="text-xl font-bold font-mono mb-4 text-white">Développement Frontend</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-[#FFB310]">React & JSX</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Niveau intermédiaire. Utilisé pour créer des SPA (comme ce portfolio). Bonne maîtrise des hooks (useState, useEffect) et de React Router.
                                    </p>
                                </div>
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-[#FFB310]">HTML, CSS & Tailwind</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Niveau avancé. Intégration responsive web design. Utilisation de Tailwind pour un prototypage rapide et un code CSS maintenable.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Dev Backend & Data */}
                        <div>
                            <h4 className="text-xl font-bold font-mono mb-4 text-white">Développement Backend & Data</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-[#944CB2]">PHP & Symfony</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Base solide. Modèle MVC, création d'API REST, gestion des entités avec Doctrine (Projet universitaire CoLive).
                                    </p>
                                </div>
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-[#944CB2]">SQL (PostgreSQL / MySQL)</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Compréhension des modèles relationnels, requêtes complexes, jointures et gestion de bases de données locales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Outils et autres */}
                        <div>
                            <h4 className="text-xl font-bold font-mono mb-4 text-white">Outils & Autres langages</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-white">Git / GitHub</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Versionning de code au quotidien. Habitué au travail collaboratif (branches, pull requests, résolution de conflits).
                                    </p>
                                </div>
                                <div className="border border-zinc-800 p-4">
                                    <span className="font-bold text-white">Godot & C# / GDScript</span>
                                    <p className="text-sm text-zinc-400 mt-2 font-mono">
                                        Utilisé lors de GameJams pour le prototypage rapide de logiques de jeu et gestion de la physique 2D/3D.
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