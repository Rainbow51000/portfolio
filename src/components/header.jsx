import { Link } from 'react-router-dom';

/**
 * Header with every buttons to other pages
 * @returns {React.JSX.Element}
 */
export default function Header() {
    return (
        <header className="w-full py-15 bg-[url(/src/assets/portfolio-header.svg)] fixed">
            <nav className="flex justify-center gap-12 text-3xl font-mono transition-all">
                <Link to="/" className="duration-300 hover:font-bold hover:scale-110">
                    accueil
                </Link>
                <Link to="/parcours" className="duration-300 hover:font-bold hover:scale-110">
                    parcours
                </Link>
                <Link to="/projets" className="duration-300 hover:font-bold hover:scale-110">
                    projets
                </Link>
                <Link to="/contact" className="duration-300 hover:font-bold hover:scale-110">
                    contact
                </Link>
            </nav>
        </header>
    )
}