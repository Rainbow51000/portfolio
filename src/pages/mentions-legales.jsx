import { Link } from "react-router-dom";

export default function MentionsLegales() {
    return (
        <div>
            <section className="max-w-4xl mx-auto px-8 py-32">
                <h3 className="text-sm font-mono tracking-widest uppercase mb-6" style={{ color: "#FFB310" }}>
                    — Informations légales
                </h3>
                <h2 className="text-5xl font-black uppercase leading-none mb-16">
                    Mentions légales
                </h2>

                <div className="space-y-12 font-mono text-sm text-zinc-400 leading-relaxed">

                    <div>
                        <h3 className="text-xs uppercase tracking-widest mb-4 text-white">Éditeur du site</h3>
                        <p>Ruddy Gobillard — étudiant en BUT Informatique, IUT de Reims</p>
                        <p>Email : <a href="mailto:ruddy.gobillard@outlook.fr" className="text-white underline underline-offset-2">ruddy.gobillard@outlook.fr</a></p>
                    </div>

                    <div>
                        <h3 className="text-xs uppercase tracking-widest mb-4 text-white">Hébergement</h3>
                        <p>Hébergement par...</p>
                    </div>

                    <div>
                        <h3 className="text-xs uppercase tracking-widest mb-4 text-white">Propriété intellectuelle</h3>
                        <p>
                            L'ensemble du contenu de ce site (textes, projets, code présenté) est la propriété de Ruddy Gobillard, sauf mention contraire. Toute reproduction sans autorisation est interdite.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xs uppercase tracking-widest mb-4 text-white">Données personnelles & Cookies</h3>
                        <p>
                            Ce site ne collecte aucune donnée personnelle de manière automatique. Le formulaire de contact, lorsqu'il sera fonctionnel, collectera uniquement les informations que vous renseignez (nom, email, message) dans le but d'y répondre. Ces données ne sont pas transmises à des tiers.
                        </p>
                        <p className="mt-3">
                            Ce site n'utilise pas de cookies de traçage ou de publicité. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en me contactant directement par email.
                        </p>
                        {/* PLACEHOLDER: Si tu intègres un service tiers (Google Analytics, Formspree, etc.), précise-le ici */}
                    </div>

                    <div>
                        <h3 className="text-xs uppercase tracking-widest mb-4 text-white">Liens externes</h3>
                        <p>
                            Ce site contient des liens vers des profils GitHub et LinkedIn. Ces sites sont soumis à leurs propres politiques de confidentialité.
                        </p>
                    </div>

                </div>
            </section>

            {/* Retour */}
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