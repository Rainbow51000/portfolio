import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil.jsx";
import Parcours from "./pages/parcours.jsx";
import Projets from "./pages/projets.jsx";
import Contact from "./pages/contact.jsx";

/**
 * Main function, appears on every pages!
 * Content of a page will appear on top of the <Routes> tag.
 * Do not edit it as the "index", edit only if you want content to appear everywhere.
 * @returns {React.JSX.Element} Page displayed
 */
function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path={"/parcours"} element={<Parcours />} />
      <Route path={"/projets"} element={<Projets />} />
      <Route path={"/contact"} element={<Contact />} />
    </Routes>
  </>);
}

export default App
