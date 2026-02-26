import githubIcon from '@/assets/github-icon.svg';
import linkedinIcon from '@/assets/linkedin-icon.svg';

/**
 * Footer with basic links and info
 * @returns {React.JSX.Element}
 */
export default function Footer() {
    return (
        <footer className="w-full bg-black flex p-5">
            <div className="flex max-w-1/12">
                <a href={"https://github.com/Rainbow51000"}>
                    <img src={githubIcon}  alt={"Icône GitHub"}/>
                </a>
                <a href={"https://www.linkedin.com/in/ruddy-gobillard-a903ba289/"}>
                    <img src={linkedinIcon}  alt={"Icône LinkedIn"}/>
                </a>
            </div>

            <p className="flex items-center flex-1 justify-center">
                @Ruddy Gobillard — Tous droits réservés
            </p>

            <div className="flex items-center flex-col">
                <p>
                    Outils utilisée : React, Vite, Javascript
                </p>
                <p>
                    Auteurs - Ruddy Gobillard
                </p>
                <p>
                    Dernière mise à jour : fev. 2026
                </p>
            </div>
        </footer>
    )
}