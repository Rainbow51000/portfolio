import { Link } from "react-router-dom";

export default function Accueil() {
    return (
        <div className="justify-center flex flex-col">

            <section className="max-w-4xl mx-auto px-8 py-32 text-center">
                <img src="asset/logo.png" alt="logo" />
                <p className="text-zinc-400 text-base max-w-xl mx-auto mb-4 font-mono leading-relaxed">
                    Étudiant en BUT Informatique à l'IUT de Reims — je me spécialise en <span className="text-white">développement web fullstack</span>, avec un intérêt pour la data et le développement de jeux vidéo.
                </p>
                <p className="text-zinc-600 text-sm max-w-xl mx-auto mb-10 font-mono leading-relaxed">
                    Je cherche à intégrer des projets concrets où je peux contribuer sur la partie front (React, JavaScript) comme back (Node.js, PHP, Python, SQL).
                </p>
                <a
                    href="/asset/cv.pdf"
                    className="inline-block border-2 border-white text-white font-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-all"
                >
                    ↓ Télécharger le CV
                </a>
            </section>

            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h2 className="text-xs font-mono tracking-widest uppercase mb-10" style={{ color: "#FFB310" }}>
                        — Ce que je fais
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-zinc-800 p-6">
                            <p className="text-white font-mono font-bold uppercase text-sm mb-2">Développement Web</p>
                            <p className="text-zinc-500 font-mono text-sm leading-relaxed">Sites et applications web avec React, Vue, PHP/Symfony. Maîtrise du cycle complet : base de données, API, interface.</p>
                        </div>
                        <div className="border border-zinc-800 p-6">
                            <p className="text-white font-mono font-bold uppercase text-sm mb-2">Data & Scripts</p>
                            <p className="text-zinc-500 font-mono text-sm leading-relaxed">Traitement et manipulation de données avec Python et SQL. Écriture de scripts automatisés, requêtes complexes.</p>
                        </div>
                        <div className="border border-zinc-800 p-6">
                            <p className="text-white font-mono font-bold uppercase text-sm mb-2">Jeux vidéo</p>
                            <p className="text-zinc-500 font-mono text-sm leading-relaxed">Développement de jeux avec Godot (GDScript/C#) et Phaser (JavaScript). Participation à des Game Jams.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h2 className="text-xs font-mono tracking-widest uppercase mb-10" style={{ color: "#944CB2" }}>
                        — Projets sélectionnés
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <Link to="/projets#fight-or-flight"
                              className="border border-zinc-800 p-8 hover:border-zinc-500 transition-colors group block">
                            <span className="text-xs font-mono uppercase" style={{ color: "#FFB310" }}>Projet personnel</span>
                            <h3 className="text-xl font-black uppercase mt-2 mb-3">Fight or Flight</h3>
                            <p className="text-zinc-500 text-sm font-mono leading-relaxed">Jeu Godot — Réalisé lors de la GameJam III de l'IUT de Reims en groupe de trois. Mécaniques de survie, level design, logique de jeu en GDScript.</p>
                            <p className="text-xs font-mono mt-6 group-hover:text-white transition-colors" style={{ color: "#944CB2" }}>Voir le projet →</p>
                        </Link>

                        <Link to="/projets#colive"
                              className="border border-zinc-800 p-8 hover:border-zinc-500 transition-colors group block">
                            <span className="text-xs font-mono uppercase" style={{ color: "#FFB310" }}>Projet académique</span>
                            <h3 className="text-xl font-black uppercase mt-2 mb-3">CoLive</h3>
                            <p className="text-zinc-500 text-sm font-mono leading-relaxed">Application web CRUD avec Symfony — gestion d'annonces de colocation, authentification, base de données MySQL, déployée en groupe.</p>
                            <p className="text-xs font-mono mt-6 group-hover:text-white transition-colors" style={{ color: "#944CB2" }}>Voir le projet →</p>
                        </Link>

                    </div>

                    <div className="mt-8">
                        <Link to="/projets" className="text-xs font-mono uppercase tracking-widest border border-zinc-700 px-6 py-3 hover:border-white transition-colors inline-block">
                            Voir tous les projets →
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

function SkillBar({ label, level, note, color = "#FFB310" }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-mono text-white">{label}</span>
                <span className="text-xs font-mono text-zinc-600">{note}</span>
            </div>
            <div className="w-full h-1 bg-zinc-800 rounded-none">
                <div
                    className="h-1 transition-all"
                    style={{ width: `${level}%`, backgroundColor: color }}
                />
            </div>
        </div>
    );
}