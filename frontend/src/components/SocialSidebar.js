import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SIDEBAR_WIDTH = 60;
const BUTTON_WIDTH = 32;

export default function SocialSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        right: 0,
        transform: open
          ? "translateY(-50%) translateX(0)"
          : `translateY(-50%) translateX(${SIDEBAR_WIDTH}px)`,
        display: "flex",
        alignItems: "center",
        bgcolor: "#0D1B2A",
        borderRadius: "12px 0 0 12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        transition: "all 0.35s ease",
        zIndex: 3300,
      }}
    >
      {/* 🔘 BOTÃO */}
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          width: `${BUTTON_WIDTH}px`,
          height: "90px",
          borderRadius: "10px 0 0 10px",
          bgcolor: "#0D1B2A",
          color: "#fff",
          transition: "0.3s",
          "&:hover": {
            bgcolor: "#14263d",
          },
        }}
      >
        {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>

      {/* 📦 ÍCONES */}
      <Box
        sx={{
          px: 1,
          py: 1,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Tooltip title="Instagram" placement="left">
          <IconButton
            component="a"
            href="https://www.instagram.com/rsd_construcoes/"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "#E1306C",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.15)",
                bgcolor: "rgba(225,48,108,0.1)",
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>



        <Tooltip title="Facebook" placement="left">
          <IconButton
            component="a"
            href="https://www.facebook.com/people/RSD-Constru%25C3%25A7%25C3%25B5es/61582932433591/?locale=pt_BR"
            target="_blank"
            rel="noreferrer"
            sx={{
              color: "#1877F2",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.15)",
                bgcolor: "rgba(24,119,242,0.1)",
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}