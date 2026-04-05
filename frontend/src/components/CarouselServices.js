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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        ".slick-slide": {
          padding: { xs: "0 4px", sm: "0 8px" },
          boxSizing: "border-box",
        },
        ".slick-list": {
          margin: { xs: "0 -4px", sm: "0 -8px" },
        },
        ".slick-dots": {
          bottom: "-30px",
        },
      }}
    >
      <Slider {...settings}>
        {services.map((service) => (
          <Box
            key={service.id}
            component={Link}
            to={`/services/${service.id}`}
            sx={{
              position: "relative",
              display: "block",
              height: { xs: 220, sm: 240, md: 250 },
              textDecoration: "none",
              borderRadius: 3,
              overflow: "hidden",
              "&:hover .overlay": {
                opacity: { xs: 0, md: 1 },
              },
            }}
          >
            <Box
              sx={{
                height: "100%",
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 3,
              }}
            />

            <Box
              className="overlay"
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: { xs: 1, md: 0 },
                transition: "opacity 0.3s",
                p: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                }}
              >
                Clique para saber mais sobre o serviço
              </Typography>
            </Box>

            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                p: 2,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: { xs: "1rem", md: "1.05rem" },
                }}
              >
                {service.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselServices;