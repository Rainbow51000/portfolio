import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div>
            <section className="max-w-4xl mx-auto px-8 py-24 text-center mt-9">
              <h3 className="text-sm font-mono tracking-widest uppercase mb-6" style={{ color: "#FFB310" }}>
                — CONTACT
              </h3>
              <h2 className="text-7xl font-black uppercase leading-none">
                PARLONS
              </h2>
              <h2 className="text-7xl font-black uppercase leading-none sans-outline text-[#944CB2]">
                ENSEMBLE
              </h2>
            </section>

            <section className="border-t border-zinc-800">
                <div className="max-w-4xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-xs font-mono tracking-widest uppercase mb-8" style={{ color: "#944CB2" }}>
                            — Mes coordonnées
                        </h3>
                        <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-6">
                            Vous avez une question, une proposition de stage ou un projet en tête ? N'hésitez pas à m'envoyer un e-mail directement.
                        </p>
                        <div className="mb-8 border-l-2 pl-4" style={{ borderColor: "#FFB310" }}>
                            <p className="text-xs font-mono uppercase text-zinc-500 mb-1">E-mail</p>
                            <a href="mailto:ruddy.gobillard@outlook.fr" className="text-lg font-mono text-white hover:underline">
                                ruddy.gobillard@outlook.fr
                            </a>
                        </div>
                        <div className="border-l-2 pl-4" style={{ borderColor: "#944CB2" }}>
                            <p className="text-xs font-mono uppercase text-zinc-500 mb-1">Localisation</p>
                            <p className="text-lg font-mono text-white">
                                Châlons-en-Champagne, France
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-mono tracking-widest uppercase mb-8" style={{ color: "#944CB2" }}>
                            — Formulaire de contact
                        </h3>

                        <form className="space-y-8">

                            <div>
                                <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-zinc-500">Nom</label>
                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    className="w-full bg-transparent border-b border-zinc-700 text-white font-mono text-sm py-3 outline-none focus:border-white transition-colors placeholder-zinc-700"
                                ></input>
                            </div>

                            <div>
                                <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-zinc-500">Email</label>
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="w-full bg-transparent border-b border-zinc-700 text-white font-mono text-sm py-3 outline-none focus:border-white transition-colors placeholder-zinc-700"
                                ></input>
                            </div>

                            <div>
                                <label className="block text-xs font-mono uppercase tracking-widest mb-2 text-zinc-500">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Votre message..."
                                    className="w-full bg-transparent border-b border-zinc-700 text-white font-mono text-sm py-3 outline-none focus:border-white transition-colors placeholder-zinc-700 resize-none"
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