import React from "react";
import { Box, Typography, Button } from "@mui/material";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        px: { xs: 3, sm: 6, md: 12 },
        py: { xs: 6, md: 10 },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0D1B2A",
        color: "white",
        gap: { xs: 5, md: 8 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* TEXTOS */}
      <Box
        sx={{
          flex: 1,
          maxWidth: 600,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: "Montserrat, sans-serif",
            fontSize: { xs: 28, sm: 32, md: 38 },
          }}
        >
          Sobre Nossa Marca
        </Typography>

        <Typography
          sx={{
            mt: 3,
            lineHeight: 1.7,
            fontSize: { xs: 15, sm: 16, md: 18 },
            opacity: 0.95,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          A RSD Construções é especializada em soluções completas para obras,
          manutenção e infraestrutura. Atuamos com excelência e compromisso,
          oferecendo serviços de alta qualidade para clientes residenciais e corporativos.
        </Typography>

        <Typography
          sx={{
            mt: 2,
            lineHeight: 1.7,
            fontSize: { xs: 15, sm: 16, md: 18 },
            opacity: 0.95,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Com uma trajetória sólida e profissionais experientes, valorizamos
          segurança, eficiência e transparência em cada projeto realizado.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: { xs: 3, md: 4 },
            py: 1.5,
            fontSize: { xs: 14, md: 16 },
            fontWeight: 600,
            borderRadius: "8px",
            backgroundColor: "#2A9B3B",
            letterSpacing: 1,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#238B33",
              transform: "scale(1.03)",
              boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
            },
          }}
        >
          Saiba Mais
        </Button>
      </Box>

      {/* IMAGEM */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/sobre-imagem.jpg"
          alt="Sobre RSD"
          sx={{
            width: { xs: "100%", sm: "85%", md: "80%" },
            maxWidth: 520,
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
