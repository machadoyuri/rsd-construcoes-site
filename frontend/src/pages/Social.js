import React from "react";
import { Box, Typography, Card } from "@mui/material";

const socials = [
  { id: 1, name: "Instagram", link: "#", img: "/instagram.png" },
  { id: 2, name: "Facebook", link: "#", img: "/facebook.png" },
  { id: 3, name: "Email", link: "#", img: "/email.png" },
];

const Social = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        p: { xs: 4, md: 8 },
        pt: 12,
        textAlign: "center",
        backgroundColor: "#F5F7FA",
      }}
    >
      {/* Título profissional */}
      <Typography
        variant="h3"
        sx={{
          mb: 6,
          fontWeight: 700,
          fontFamily: "Montserrat, sans-serif",
          letterSpacing: 1.5,
          color: "#1F4E79",
        }}
      >
        Siga-nos nas Redes Sociais
      </Typography>

      {/* Container dos cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 5,
        }}
      >
        {socials.map((social) => (
          <Card
            key={social.id}
            sx={{
              width: 250,
              height: 250,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "18px",
              backgroundColor: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "0.25s ease",

              "&:hover": {
                transform: "scale(1.06)",
                boxShadow: "0 6px 30px rgba(0,0,0,0.18)",
              },
            }}
            onClick={() => window.open(social.link, "_blank")}
          >
            <img
              src={social.img}
              alt={social.name}
              style={{
                width: "50%",
                objectFit: "contain",
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.25))",
              }}
            />
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Social;
