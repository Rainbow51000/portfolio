export default function Accueil() {
    return (
        <div className="justify-center flex flex-col">

            {/* Hero */}
            <section className="max-w-4xl mx-auto px-8 py-32 text-center">
                <h1 className="text-8xl font-black uppercase leading-none mb-4">
                    RUDDY
                </h1>
                <h1 className="text-8xl font-black uppercase leading-none mb-12" style={{ WebkitTextStroke: "2px #FFB310", color: "transparent" }}>
                    GOBILLARD
                </h1>
                <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-12 font-mono leading-relaxed">
                    Étudiant en BUT Informatique,<br/>
                    j'étudie pour devenir développeur Fullstack et travailler dans ce qui me plaît.
                </p>
                <a
                    href="/cv.pdf"
                    className="inline-block border-2 border-white text-white font-mono text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-all"
                >
                    ↓ Télécharger le CV
                </a>
            </section>

            {/* Compétences */}
            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h2 className="text-xs font-mono tracking-widest uppercase mb-10" style={{ color: "#944CB2" }}>
                        — Outils utilisées
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">JavaScript</span>
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">React</span>
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">Node.js</span>
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">Python</span>
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">SQL</span>
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">PHP</span>
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">Docker</span>
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">Godot</span>
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">C#</span>
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">HTML & CSS</span>
                        <span className="border border-zinc-700 text-zinc-300 text-sm px-4 py-2 font-mono hover:border-white transition-colors">Git</span>
                    </div>
                </div>
            </section>

            {/* Projets mis en avant */}
            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20">
                    <h2 className="text-xs font-mono tracking-widest uppercase mb-10" style={{ color: "#944CB2" }}>
                        — Projets sélectionnés
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                           className="border border-zinc-800 p-8 hover:border-zinc-500 transition-colors group">
                            <span className="text-xs font-mono uppercase" style={{ color: "#FFB310" }}>Projet personnel</span>
                            <h3 className="text-xl font-black uppercase mt-2 mb-3">NOM DU PROJET</h3>
                            <p className="text-zinc-500 text-sm font-mono leading-relaxed">PLACEHOLDER — description courte.</p>
                            <p className="text-xs font-mono mt-6 group-hover:text-white transition-colors" style={{ color: "#944CB2" }}>Voir →</p>
                        </a>

                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                           className="border border-zinc-800 p-8 hover:border-zinc-500 transition-colors group">
                            <span className="text-xs font-mono uppercase" style={{ color: "#FFB310" }}>Projet académique</span>
                            <h3 className="text-xl font-black uppercase mt-2 mb-3">NOM DU PROJET</h3>
                            <p className="text-zinc-500 text-sm font-mono leading-relaxed">PLACEHOLDER — description courte.</p>
                            <p className="text-xs font-mono mt-6 group-hover:text-white transition-colors" style={{ color: "#944CB2" }}>Voir →</p>
                        </a>

                    </div>
                </div>
            </section>

        </div>
    )
}
