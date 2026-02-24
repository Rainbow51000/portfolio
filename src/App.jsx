import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil.jsx";
import Parcours from "./pages/parcours.jsx";
import Projets from "./pages/projets.jsx";
import Contact from "./pages/contact.jsx";

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
