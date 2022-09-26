import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Contact from "./pages/Contact";
import Groupe from "./pages/Groupe";
import Moyens from "./pages/Moyens";
import Secteurs from "./pages/Secteurs";
import Services from "./pages/Services";
const App = () => {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Accueil />} />
<Route path="/Connexion" element={<Connexion />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/Groupe" element={<Groupe />} />
<Route path="/Moyens" element={<Moyens />} />
<Route path="/Secteurs" element={<Secteurs />} />
<Route path="/Services" element={<Services />} />
<Route path="*" element={<Accueil />} />
</Routes>
</BrowserRouter>
);
};
export default App;
