import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import logoRSD from "../assets/logoRSD.png";

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const top = element.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
}

const navItems = [
  { label: "Home", id: "home" },
  { label: "Serviços", id: "services" },
  { label: "Sobre", id: "about" },
  { label: "Orçamentos", id: "orcamento" },
];

const Navbar = () => {
  const [transparent, setTransparent] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTransparent(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={transparent ? 0 : 4}
        sx={{
          bgcolor: transparent ? "transparent" : "rgba(8,17,32,0.95)",
          backdropFilter: "blur(8px)",
          transition: "0.4s",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 64, md: 72 }, // 🔥 aumenta um pouco
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 3 },
          }}
        >
          {/* LOGO */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // 🔥 centraliza vertical
              justifyContent: "flex-start",
              flex: 1,
              height: "100%", // 🔥 garante alinhamento total
            }}
          >
            <Box
              component="img"
              src={logoRSD}
              alt="Logo"
              sx={{
                height: { xs: 44, md: 52 }, // 🔥 MENOR que a navbar
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>
          {/* MENU DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 5,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
                sx={{ fontWeight: 500 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* MENU MOBILE */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* DRAWER MOBILE */}
      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    scrollToSection(item.id);
                    setOpenMenu(false);
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;