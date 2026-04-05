import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import servico0 from "../assets/HouseTheZero.jpg";
import servico1 from "../assets/Pisos.jpg";
import servico2 from "../assets/Telhados.jpg";
import servico3 from "../assets/Deques.jpg";
import servico4 from "../assets/Muros.jpg";
import servico5 from "../assets/Interior.jpg";
import servico6 from "../assets/Reparoexeterno1.jpg";

const services = [
  { id: 1, title: "Casas direto da planta", image: servico0 },
  { id: 2, title: "Construções de deques", image: servico3 },
  { id: 3, title: "Muros e pátios", image: servico4 },
  { id: 4, title: "Instalações de Pisos", image: servico1 },
  { id: 5, title: "Instalações de Telhados", image: servico2 },
  { id: 6, title: "Reparos estruturais externos", image: servico5 },
  { id: 7, title: "Reparos estruturais inferior", image: servico6 },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: true,

    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 3 } },
      { breakpoint: 1100, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: "60px" } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  /* ================= DETALHES ================= */
  if (selectedService) {
    return (
      <Box sx={{ minHeight: "100vh", p: { xs: 3, md: 6 } }}>
        <Button variant="outlined" onClick={() => setSelectedService(null)}>
          Voltar
        </Button>

        <Typography
          fontWeight={700}
          mt={3}
          sx={{ fontSize: { xs: 28, sm: 36, md: 48 } }}
        >
          {selectedService.title}
        </Typography>

        <Box
          component="img"
          src={selectedService.image}
          alt={selectedService.title}
          sx={{
            width: "100%",
            maxWidth: 720,
            borderRadius: 3,
            mt: 4,
            boxShadow: 4,
          }}
        />

        <Typography sx={{ mt: 4, fontSize: { xs: 16, sm: 18 } }}>
          Aqui você poderá detalhar o que o serviço oferece, benefícios,
          processos, prazos e diferenciais da RSD Construções.
        </Typography>
      </Box>
    );
  }

  /* ================= LISTAGEM ================= */
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e2e8f0, #cbd5e1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, md: 6 },
      }}
    >
      <Typography
        textAlign="center"
        fontWeight={700}
        mb={6}
        sx={{
          fontSize: { xs: 26, sm: 32, md: 40 },
          letterSpacing: 2,
        }}
      >
        NOSSOS SERVIÇOS
      </Typography>

      <Box sx={{ width: "100%", maxWidth: 1400 }}>
        <Slider {...settings}>
          {services.map((service) => (
            <Box key={service.id} px={2}>
              <Card
                onClick={() => setSelectedService(service)}
                tabIndex={0}
                sx={{
                  height: { xs: 300, sm: 360, md: 400 },
                  borderRadius: 4,
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "0.3s",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.15))",
                  },
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: 10,
                  },
                  "&:focus-visible": {
                    outline: "3px solid #2A9B3B",
                  },
                }}
              >
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    zIndex: 1,
                    textAlign: "center",
                    color: "#fff",
                    py: 3,
                  }}
                >
                  <Typography
                    fontWeight={600}
                    sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}
                  >
                    {service.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Services;
