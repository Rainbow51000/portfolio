import { Link } from 'react-router-dom';
import githubIcon from '@/assets/github-icon.svg';
import linkedinIcon from '@/assets/linkedin-icon.svg';

/**
 * Footer with basic links and info
 * @returns {React.JSX.Element}
 */
export default function Footer() {
    return (
        <footer className="w-full bg-black text-zinc-500 py-8 px-4 border-t border-zinc-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex gap-4">
                    <a
                        href="https://github.com/Rainbow51000"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-75 transition-opacity"
                    >
                        <img src={githubIcon} alt="Icône GitHub" className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ruddy-gobillard-a903ba289/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-75 transition-opacity"
                    >
                        <img src={linkedinIcon} alt="Icône LinkedIn" className="w-6 h-6" />
                    </a>
                </div>

                <div className="text-center text-xs font-mono flex flex-col items-center gap-2">
                    <p>© {new Date().getFullYear()} Ruddy Gobillard — Tous droits réservés</p>
                    <Link to="/mentions-legales" className="hover:text-white transition-colors underline decoration-zinc-700">
                        Mentions Légales & Confidentialité
                    </Link>
                </div>

                <div className="flex flex-col items-center md:items-end text-xs font-mono">
                    <p>Fait avec React, Vite & Tailwind</p>
                    <p>Dernière mise à jour : fév. 2026</p>
                </div>

            </div>
        </footer>
    );
}