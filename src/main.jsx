import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>,
)
