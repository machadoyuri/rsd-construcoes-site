import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import FormsOrc from "./pages/Orcamento";
import Empresa from "./pages/Empresa";

function HomePage() {
  return (
    <>
      <Navbar />
      <SocialSidebar />

      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="formsRsd">
        <FormsOrc />
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/empresa" element={<Empresa />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;