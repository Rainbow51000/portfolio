import './components/navbar.jsx'
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil.jsx";
import Parcours from "./pages/parcours.jsx";
import Projets from "./pages/projets.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (<>
  <Routes>
    <Route path="/" component={Accueil} />
    <Route path={"/parcours"} component={Parcours} />
    <Route path={"/projets"} component={Projets} />
    <Route path={"/contact"} component={Contact} />
  </Routes>
  </>);
}

export default App
