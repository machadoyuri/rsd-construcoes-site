import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoRSD from "../assets/logoRSD.png";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const Navbar = () => {
  const [transparent, setTransparent] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTransparent(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Serviços", id: "services" },
    { label: "Sobre", id: "about" },
    { label: "Orçamentos", id: "orcamento" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={transparent ? 0 : 4}
        sx={{
          height: "7vh",
          bgcolor: transparent ? "transparent" : "#0D1B2A",
          transition: "0.4s",
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* BOTÃO MENU - SOMENTE MOBILE/TABLET */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* LOGO - SOMENTE DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <img
              src={logoRSD}
              alt="Logo RSD"
              style={{ width: 90, marginBottom: 30 }}
            />
          </Box>

          {/* MENU DESKTOP */}
          <Box
            sx={{
              ml: "auto",
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 260,
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {/* LOGO */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <img
              src={logoRSD}
              alt="Logo RSD"
              style={{ width: 120 }}
            />
          </Box>

          {/* MENU */}
          {menuItems.map((item) => (
            <Button
              key={item.id}
              fullWidth
              sx={{ justifyContent: "flex-start" }}
              onClick={() => {
                scrollToSection(item.id);
                setOpen(false);
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Drawer>


    </>
  );
};

export default Navbar;
