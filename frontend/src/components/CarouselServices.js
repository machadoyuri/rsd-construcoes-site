import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const services = [
  { id: 1, title: "Serviço 1", image: "/imagens/servico1.jpg" },
  { id: 2, title: "Serviço 2", image: "/imagens/servico2.jpg" },
  { id: 3, title: "Serviço 3", image: "/imagens/servico3.jpg" },
  { id: 4, title: "Serviço 4", image: "/imagens/servico4.jpg" },
  { id: 5, title: "Serviço 5", image: "/imagens/servico5.jpg" },
  { id: 6, title: "Serviço 6", image: "/imagens/servico6.jpg" },
  { id: 7, title: "Serviço 7", image: "/imagens/servico7.jpg" },
  { id: 8, title: "Serviço 8", image: "/imagens/servico8.jpg" },
  { id: 9, title: "Serviço 9", image: "/imagens/servico9.jpg" },
  { id: 10, title: "Serviço 10", image: "/imagens/servico10.jpg" },
];

const CarouselServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {services.map((service) => (
        <Box
          key={service.id}
          component={Link}
          to={`/services/${service.id}`}
          sx={{
            position: "relative",
            margin: 1,
            height: 250,
            textDecoration: "none",
            "&:hover .overlay": {
              opacity: 1,
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 2,
            }}
          />
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.3s",
            }}
          >
            <Typography variant="body1" sx={{ color: "#fff", textAlign: "center", p: 2 }}>
              Clique para saber mais sobre o serviço
            </Typography>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default CarouselServices;
