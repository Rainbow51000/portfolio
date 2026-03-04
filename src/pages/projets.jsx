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

            {/* Grille */}
            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Carte 1 */}
                        <div className="border border-zinc-800 overflow-hidden group">
                            <img
                                src="/public/asset/fightorflight.png"
                                alt="Projet 1"
                                className="w-full h-44 object-cover group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="p-6">
                                <span className="text-xs font-mono uppercase" style={{ color: "#FFB310" }}>Projet personnel</span>
                                <h3 className="text-xl font-black uppercase mt-2 mb-2">Fight or Flight</h3>
                                <p className="text-zinc-500 text-sm font-mono leading-relaxed mb-4">
                                    Un jeu sur Godot, réalisée lors de la GameJam III de l'IUT de Reims, en groupe de trois.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <span className="text-xs font-mono px-2 py-1 border" style={{ borderColor: "#944CB2", color: "#944CB2" }}>Godot</span>
                                    </div>
                                    <a href="https://github.com/Rainbow51000/fight-or-flight" target="_blank" rel="noopener noreferrer"
                                       className="text-xs font-mono hover:text-white transition-colors" style={{ color: "#944CB2" }}>
                                        Voir →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Carte 2 */}
                        <div className="border border-zinc-800 overflow-hidden group">
                            <img
                                src="/public/asset/colive.png"
                                alt="Projet 2"
                                className="w-full h-44 object-cover group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="p-6">
                                <span className="text-xs font-mono uppercase" style={{ color: "#FFB310" }}>Projet académique</span>
                                <h3 className="text-xl font-black uppercase mt-2 mb-2">CoLive</h3>
                                <p className="text-zinc-500 text-sm font-mono leading-relaxed mb-4">
                                    Un site Crud réalisée lors de la SAÉ 3.01 à l'IUT de Reims, en groupe.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        <span className="text-xs font-mono px-2 py-1 border" style={{ borderColor: "#944CB2", color: "#944CB2" }}>PHP</span>
                                        <span className="text-xs font-mono px-2 py-1 border" style={{ borderColor: "#944CB2", color: "#944CB2" }}>Symfony</span>
                                        <span className="text-xs font-mono px-2 py-1 border" style={{ borderColor: "#944CB2", color: "#944CB2" }}>Bootstrap</span>
                                    </div>
                                    <a href="https://github.com/Rainbow51000/sae3-01" target="_blank" rel="noopener noreferrer"
                                       className="text-xs font-mono hover:text-white transition-colors" style={{ color: "#944CB2" }}>
                                        Voir →
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}
