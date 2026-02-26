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
                            <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-2">Lycée Oehmichen | Châlons-en-Champâgne</p>
                            <p className="text-zinc-400 font-mono text-sm max-w-xl">
                                Spécialité Mathématiques et NSI (Numérique et science de l’Informatique)
                                Avec mention, certification Cambridge (C1)
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -left-10 top-1 w-3 h-3 rotate-45" style={{ backgroundColor: "#FFB310" }} />
                            <span className="text-xs font-mono" style={{ color: "#FFB310" }}>2024 - En cours</span>
                            <h4 className="text-2xl font-black uppercase mt-1 mb-1">BUT Informatique</h4>
                            <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider mb-2">IUT de Reims</p>
                            <p className="text-zinc-400 font-mono text-sm max-w-xl">Formation en Informatique, axée sur le développement.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Langages */}
            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h3 className="text-xs font-mono tracking-widest uppercase mb-10" style={{ color: "#FFB310" }}>
                        — Langages
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#FFB310", color: "#FFB310" }}>HTML & CSS</span>
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#FFB310", color: "#FFB310" }}>JavaScript</span>
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#FFB310", color: "#FFB310" }}>PHP</span>
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#FFB310", color: "#FFB310" }}>SQL</span>
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#FFB310", color: "#FFB310" }}>Python</span>
                    </div>
                </div>
            </section>

            {/* Frameworks */}
            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h3 className="text-xs font-mono tracking-widest uppercase mb-10" style={{ color: "#944CB2" }}>
                        — Frameworks &amp; Outils
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#944CB2", color: "#944CB2" }}>React</span>
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#944CB2", color: "#944CB2" }}>Express</span>
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#944CB2", color: "#944CB2" }}>Tailwind CSS</span>
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#944CB2", color: "#944CB2" }}>Symfony</span>
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#944CB2", color: "#944CB2" }}>Phaser</span>
                        <span className="border text-sm px-4 py-2 font-mono" style={{ borderColor: "#944CB2", color: "#944CB2" }}>Git</span>
                    </div>
                </div>
            </section>

        </div>
    )
}
