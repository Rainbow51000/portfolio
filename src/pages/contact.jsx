export default function Contact() {
    return (
        <div>

            {/* Header */}
            <section className="max-w-4xl mx-auto px-8 py-24 text-center">
                <p className="text-sm font-mono tracking-widest uppercase mb-6" style={{ color: "#FFB310" }}>
                    — Contact
                </p>
                <h2 className="text-7xl font-black uppercase leading-none">
                    PARLONS
                </h2>
                <h2 className="text-7xl font-black uppercase leading-none" style={{ WebkitTextStroke: "2px #944CB2", color: "transparent" }}>
                    ENSEMBLE
                </h2>
            </section>

            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20 gap-16">

                    {/* Formulaire */}
                    <div>
                        <h3 className="text-xs font-mono tracking-widest uppercase mb-10" style={{ color: "#944CB2" }}>
                            — Formulaire de contact
                        </h3>

                        <form className="space-y-8">

                            <div>
                                <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-zinc-500">Nom</label>
                                <input
                                    type="text"
                                    placeholder="Ton nom"
                                    className="w-full bg-transparent border-b border-zinc-700 text-white font-mono text-sm py-3 outline-none placeholder-zinc-700"
                                ></input>
                            </div>

                            <div>
                                <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-zinc-500">Email</label>
                                <input
                                    type="email"
                                    placeholder="Ton email"
                                    className="w-full bg-transparent border-b border-zinc-700 text-white font-mono text-sm py-3 outline-none placeholder-zinc-700"
                                ></input>
                            </div>

                            <div>
                                <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-zinc-500">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Ton message..."
                                    className="w-full bg-transparent border-b border-zinc-700 text-white font-mono text-sm py-3 outline-none placeholder-zinc-700 resize-none"
                                />
                            </div>

                            <button
                                type="button"
                                className="w-full py-4 font-mono text-sm uppercase tracking-widest text-black font-bold opacity-50 cursor-not-allowed"
                                style={{ backgroundColor: "#FFB310" }}
                            >
                                Envoyer →
                            </button>
                        </form>
                    </div>

                </div>
            </section>

        </div>
    )
}
