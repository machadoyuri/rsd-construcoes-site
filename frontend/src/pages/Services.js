import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
  Stack,
  Chip,
  Grid,
  Divider,
} from "@mui/material";
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ConstructionIcon from "@mui/icons-material/Construction";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
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
  {
    id: 1,
    title: "Casas direto da planta",
    image: servico0,
    description:
      "Desenvolvemos projetos residenciais com planejamento completo, qualidade construtiva e acabamento profissional, acompanhando cada etapa da obra com atenção aos detalhes.",
    benefits: [
      "Planejamento completo da execução",
      "Maior valorização do imóvel",
      "Acompanhamento técnico da obra",
      "Acabamento profissional e durável",
    ],
    steps: [
      "Análise inicial do projeto e alinhamento das necessidades",
      "Planejamento da execução e definição de materiais",
      "Construção com acompanhamento em cada etapa",
      "Entrega final com revisão de acabamento",
    ],
  },
  {
    id: 2,
    title: "Construções de deques",
    image: servico3,
    description:
      "Criamos deques resistentes e bem acabados, ideais para áreas externas, lazer e valorização dos ambientes residenciais e comerciais.",
    benefits: [
      "Estrutura resistente para área externa",
      "Visual moderno e elegante",
      "Melhor aproveitamento do espaço",
      "Execução com ótimo acabamento",
    ],
    steps: [
      "Avaliação do terreno e do ambiente",
      "Definição do modelo e dos materiais",
      "Preparação da base estrutural",
      "Montagem e acabamento final",
    ],
  },
  {
    id: 3,
    title: "Muros e pátios",
    image: servico4,
    description:
      "Executamos muros, pátios e áreas externas com foco em segurança, resistência e estética, entregando soluções funcionais para seu imóvel.",
    benefits: [
      "Mais segurança para o imóvel",
      "Resistência e durabilidade",
      "Melhor organização da área externa",
      "Valorização visual da fachada",
    ],
    steps: [
      "Medição e definição da área",
      "Preparação do solo e fundação",
      "Execução estrutural",
      "Finalização e revisão de acabamento",
    ],
  },
  {
    id: 4,
    title: "Instalações de pisos",
    image: servico1,
    description:
      "Realizamos instalação de pisos com precisão, nivelamento adequado e acabamento refinado, garantindo beleza e longa durabilidade.",
    benefits: [
      "Assentamento preciso",
      "Melhor acabamento visual",
      "Maior durabilidade do piso",
      "Execução limpa e organizada",
    ],
    steps: [
      "Preparação e nivelamento da superfície",
      "Definição do layout de instalação",
      "Aplicação e assentamento",
      "Acabamento, limpeza e revisão final",
    ],
  },
  {
    id: 5,
    title: "Instalações de telhados",
    image: servico2,
    description:
      "Trabalhamos com instalação e estruturação de telhados priorizando segurança, proteção contra intempéries e excelente acabamento.",
    benefits: [
      "Proteção e vedação eficiente",
      "Estrutura segura",
      "Boa durabilidade dos materiais",
      "Acabamento de qualidade",
    ],
    steps: [
      "Avaliação da estrutura existente",
      "Escolha do sistema de cobertura",
      "Montagem e instalação",
      "Verificação final de vedação e acabamento",
    ],
  },
  {
    id: 6,
    title: "Reparos estruturais externos",
    image: servico5,
    description:
      "Executamos reparos em áreas externas com foco em recuperação estrutural, segurança e conservação estética do imóvel.",
    benefits: [
      "Correção de danos estruturais",
      "Prevenção de novos problemas",
      "Mais segurança",
      "Melhor conservação do imóvel",
    ],
    steps: [
      "Inspeção do problema identificado",
      "Definição da melhor solução",
      "Execução do reparo estrutural",
      "Acabamento e validação final",
    ],
  },
  {
    id: 7,
    title: "Reparos estruturais inferiores",
    image: servico6,
    description:
      "Atuamos em reparos estruturais inferiores com atenção técnica, reforço adequado e soluções que aumentam a estabilidade da construção.",
    benefits: [
      "Maior estabilidade estrutural",
      "Correção técnica do problema",
      "Redução de riscos futuros",
      "Serviço executado com cuidado",
    ],
    steps: [
      "Análise técnica da estrutura",
      "Planejamento da intervenção",
      "Execução do reforço ou reparo",
      "Revisão final e orientação ao cliente",
    ],
  },
];

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return width;
}

function NextArrow(props) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        right: { md: "-10px", lg: "-14px" },
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 3,
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "#0f172a",
        color: "#fff",
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0,0,0,0.20)",
        transition: "0.25s",
        "&:hover": {
          backgroundColor: "#1d4ed8",
          transform: "translateY(-50%) scale(1.06)",
        },
      }}
    >
      <ArrowForwardIcon />
    </Box>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        left: { md: "-10px", lg: "-14px" },
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 3,
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "#0f172a",
        color: "#fff",
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 10px 25px rgba(0,0,0,0.20)",
        transition: "0.25s",
        "&:hover": {
          backgroundColor: "#1d4ed8",
          transform: "translateY(-50%) scale(1.06)",
        },
      }}
    >
      <ArrowBackIcon />
    </Box>
  );
}

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const windowWidth = useWindowWidth();

  const slidesToShow =
    windowWidth < 600 ? 1 :
    windowWidth < 960 ? 2 : 3;

  const showArrows = windowWidth >= 900;

  const goToOrcamento = () => {
    setSelectedService(null);

    setTimeout(() => {
      const element = document.getElementById("formsRsd");
      if (element) {
        const offset = 80;
        const top = element.offsetTop - offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }, 120);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: showArrows,
    nextArrow: showArrows ? <NextArrow /> : null,
    prevArrow: showArrows ? <PrevArrow /> : null,
  };

  if (selectedService) {
    return (
      <Box
        sx={{
          background:
            "linear-gradient(180deg, #f8fafc 0%, #eef4ff 45%, #ffffff 100%)",
          py: { xs: 4, sm: 5, md: 7 },
          px: { xs: 1.5, sm: 2.5, md: 4 },
        }}
      >
        <Container maxWidth="xl">
          <Button
            variant="outlined"
            onClick={() => setSelectedService(null)}
            startIcon={<ArrowBackIcon />}
            sx={{
              mb: { xs: 3, md: 4 },
              borderRadius: "14px",
              px: 2.5,
              py: 1,
              textTransform: "none",
              fontWeight: 700,
              borderColor: "#cbd5e1",
              color: "#0f172a",
              backgroundColor: "#fff",
              "&:hover": {
                borderColor: "#1d4ed8",
                backgroundColor: "#eff6ff",
              },
            }}
          >
            Voltar para serviços
          </Button>

          <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
            <Grid item xs={12} lg={7}>
              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 260, sm: 340, md: 430, lg: 560 },
                  borderRadius: { xs: "22px", md: "30px" },
                  overflow: "hidden",
                  boxShadow: "0 25px 60px rgba(15,23,42,0.18)",
                  backgroundImage: `url(${selectedService.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(15,23,42,0.18) 0%, rgba(15,23,42,0.40) 45%, rgba(15,23,42,0.82) 100%)",
                  }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 2,
                    p: { xs: 2.2, sm: 3, md: 5 },
                  }}
                >
                  <Chip
                    label="Serviço especializado"
                    sx={{
                      mb: 1.8,
                      backgroundColor: "#dbeafe",
                      color: "#1d4ed8",
                      fontWeight: 800,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: {
                        xs: "1.75rem",
                        sm: "2.2rem",
                        md: "2.9rem",
                        lg: "3.35rem",
                      },
                      lineHeight: 1.08,
                      mb: 1.5,
                      maxWidth: "700px",
                    }}
                  >
                    {selectedService.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.88)",
                      fontSize: { xs: "0.95rem", sm: "1rem", md: "1.05rem" },
                      lineHeight: 1.75,
                      maxWidth: "760px",
                    }}
                  >
                    {selectedService.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} lg={5}>
              <Stack spacing={{ xs: 2, md: 3 }} sx={{ height: "100%" }}>
                <Card
                  sx={{
                    borderRadius: { xs: "22px", md: "28px" },
                    boxShadow: "0 18px 45px rgba(15,23,42,0.08)",
                    p: { xs: 0.3, md: 0.8 },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                    <Stack direction="row" spacing={1.2} alignItems="center" mb={2}>
                      <DesignServicesIcon sx={{ color: "#2563eb" }} />
                      <Typography
                        sx={{
                          fontSize: { xs: "1.05rem", md: "1.2rem" },
                          fontWeight: 800,
                          color: "#0f172a",
                        }}
                      >
                        Sobre este serviço
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        color: "#475569",
                        lineHeight: 1.8,
                        fontSize: { xs: "0.95rem", md: "1rem" },
                      }}
                    >
                      Trabalhamos com foco em qualidade de execução, escolha
                      adequada de materiais e um acabamento que transmite
                      segurança, durabilidade e valorização ao seu imóvel.
                    </Typography>

                    <Divider sx={{ my: 2.5 }} />

                    <Stack spacing={1.3}>
                      {selectedService.benefits.map((benefit, index) => (
                        <Stack
                          key={index}
                          direction="row"
                          spacing={1.1}
                          alignItems="flex-start"
                        >
                          <CheckCircleIcon
                            sx={{
                              color: "#2563eb",
                              mt: "2px",
                              fontSize: { xs: 18, md: 20 },
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              color: "#334155",
                              lineHeight: 1.65,
                              fontSize: { xs: "0.92rem", md: "0.98rem" },
                            }}
                          >
                            {benefit}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    borderRadius: { xs: "22px", md: "28px" },
                    boxShadow: "0 18px 45px rgba(15,23,42,0.08)",
                    p: { xs: 0.3, md: 0.8 },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                    <Stack direction="row" spacing={1.2} alignItems="center" mb={2.3}>
                      <ConstructionIcon sx={{ color: "#2563eb" }} />
                      <Typography
                        sx={{
                          fontSize: { xs: "1.05rem", md: "1.2rem" },
                          fontWeight: 800,
                          color: "#0f172a",
                        }}
                      >
                        Como executamos
                      </Typography>
                    </Stack>

                    <Stack spacing={1.7}>
                      {selectedService.steps.map((step, index) => (
                        <Stack key={index} direction="row" spacing={1.4}>
                          <Box
                            sx={{
                              minWidth: { xs: 30, md: 34 },
                              width: { xs: 30, md: 34 },
                              height: { xs: 30, md: 34 },
                              borderRadius: "50%",
                              backgroundColor: "#dbeafe",
                              color: "#1d4ed8",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 800,
                              fontSize: "0.92rem",
                              mt: "2px",
                              flexShrink: 0,
                            }}
                          >
                            {index + 1}
                          </Box>

                          <Typography
                            sx={{
                              color: "#475569",
                              lineHeight: 1.7,
                              fontSize: { xs: "0.92rem", md: "0.98rem" },
                            }}
                          >
                            {step}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    borderRadius: { xs: "22px", md: "28px" },
                    background:
                      "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
                    color: "#fff",
                    boxShadow: "0 18px 45px rgba(15,23,42,0.18)",
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.2, sm: 3, md: 4 } }}>
                    <Stack direction="row" spacing={1.2} alignItems="center" mb={1.5}>
                      <WorkspacePremiumIcon sx={{ color: "#93c5fd" }} />
                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "1.05rem", md: "1.2rem" },
                        }}
                      >
                        Solicite um orçamento
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.82)",
                        lineHeight: 1.75,
                        mb: 2.5,
                        fontSize: { xs: "0.94rem", md: "1rem" },
                      }}
                    >
                      Fale com nossa equipe e receba um atendimento personalizado
                      para o seu projeto, reforma ou construção.
                    </Typography>

                    <Button
                      variant="contained"
                      onClick={goToOrcamento}
                      sx={{
                        width: { xs: "100%", sm: "auto" },
                        backgroundColor: "#fff",
                        color: "#0f172a",
                        borderRadius: "14px",
                        px: 3,
                        py: 1.2,
                        fontWeight: 800,
                        textTransform: "none",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#e2e8f0",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Pedir orçamento
                    </Button>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      id="services"
      sx={{
        position: "relative",
        backgroundColor: "#f8fafc",
        pt: { xs: 4, md: 5 },
        pb: { xs: 7, md: 9 },
        overflow: "hidden",
        scrollMarginTop: "80px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -120,
          left: -120,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.10) 0%, rgba(37,99,235,0) 70%)",
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1440px",
          mx: "auto",
          px: { xs: 1.5, sm: 2.5, md: 4, lg: 6 },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 5 },
            maxWidth: "980px",
            mx: "auto",
          }}
        >
          <Chip
            label="Nossos serviços"
            sx={{
              mb: 2,
              backgroundColor: "#dbeafe",
              color: "#1d4ed8",
              fontWeight: 700,
            }}
          />

          <Typography
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3.2rem",
                lg: "4rem",
              },
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.1,
              mb: 2,
              letterSpacing: "-0.03em",
            }}
          >
            Soluções completas para sua obra
          </Typography>

          <Typography
            sx={{
              maxWidth: "760px",
              mx: "auto",
              color: "#475569",
              fontSize: { xs: "0.96rem", md: "1.02rem" },
              lineHeight: 1.75,
              px: { xs: 1, sm: 0 },
            }}
          >
            Atuamos com serviços de construção, acabamento e reparos
            estruturais, entregando qualidade, segurança e confiança em cada
            etapa do projeto.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1360px",
            mx: "auto",
            ".slick-slider": {
              width: "100%",
            },
            ".slick-list": {
              overflow: "hidden",
              px: { xs: "2px", sm: "6px", md: "12px" },
            },
            ".slick-track": {
              display: "flex",
              alignItems: "stretch",
            },
            ".slick-slide": {
              height: "inherit",
              paddingBottom: "10px",
            },
            ".slick-slide > div": {
              height: "100%",
            },
            ".slick-dots": {
              bottom: "-34px",
            },
            ".slick-dots li button:before": {
              fontSize: "10px",
              color: "#94a3b8",
              opacity: 1,
            },
            ".slick-dots li.slick-active button:before": {
              color: "#2563eb",
            },
          }}
        >
          <Slider {...settings}>
            {services.map((service) => (
              <Box key={service.id} px={{ xs: 0.4, sm: 0.8, md: 1.1 }}>
                <Card
                  onClick={() => setSelectedService(service)}
                  sx={{
                    position: "relative",
                    height: { xs: 230, sm: 260, md: 300, lg: 320 },
                    borderRadius: { xs: "20px", md: "24px" },
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.6)",
                    boxShadow: "0 12px 35px rgba(15,23,42,0.10)",
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: { xs: "none", md: "translateY(-8px)" },
                      boxShadow: "0 22px 45px rgba(15,23,42,0.18)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(15,23,42,0.06) 0%, rgba(15,23,42,0.14) 38%, rgba(15,23,42,0.78) 100%)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      zIndex: 2,
                      p: { xs: 2, md: 2.5 },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: { xs: "1rem", sm: "1.08rem", md: "1.22rem" },
                        lineHeight: 1.35,
                        mb: 0.7,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.82)",
                        fontSize: { xs: "0.82rem", md: "0.92rem" },
                        lineHeight: 1.45,
                      }}
                    >
                      Clique para visualizar mais detalhes sobre este serviço.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;