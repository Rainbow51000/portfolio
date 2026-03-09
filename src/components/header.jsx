import { Link } from 'react-router-dom';

/**
 * Header with every buttons to other pages
 * @returns {React.JSX.Element}
 */
export default function Header() {
    return (
      <header className="fixed w-full z-10 flex h-40 items-center justify-end px-10 transition-all bg-[url(/src/assets/portfolio-header.svg)]">
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-12 text-3xl font-mono ">
          <Link to="/" className="duration-300 hover:font-bold hover:scale-110">accueil</Link>
          <Link to="/parcours" className="duration-300 hover:font-bold hover:scale-110">parcours</Link>
          <Link to="/projets" className="duration-300 hover:font-bold hover:scale-110">projets</Link>
          <Link to="/contact" className="duration-300 hover:font-bold hover:scale-110">contact</Link>
        </nav>
        <img src="asset/logo.png" alt="logo" className="h-22 w-auto" />
      </header>
    )
}