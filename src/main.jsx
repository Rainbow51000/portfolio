import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import './style.css'

/**
 * Page content will appear inside the <main> tag.
 */
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <main>
      <App />
    </main>
    <Footer />
  </BrowserRouter>,
)
