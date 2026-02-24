import { Link } from 'react-router-dom';

/**
 * Header with every buttons to other pages
 * @returns {React.JSX.Element}
 */
export default function Header() {
    return (
        <header className={ "header" }>
            <Link to="/">accueil</Link>
            <Link to="/parcours">parcours</Link>
            <Link to="/projets">projets</Link>
            <Link to="/contact">contact</Link>
        </header>
    )
}