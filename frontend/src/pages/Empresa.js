import React from "react";
import { Box, Typography, Button, Container, Grid, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ApartmentIcon from "@mui/icons-material/Apartment";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Empresa = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #081120 0%, #0D1B2A 45%, #13293D 100%)",
        color: "white",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/")}
          sx={{
            mb: 4,
            color: "#93c5fd",
            border: "1px solid rgba(147,197,253,0.25)",
            borderRadius: "12px",
            px: 2.5,
            py: 1,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(147,197,253,0.08)",
            },
          }}
        >
          Voltar
        </Button>

        <Box
          sx={{
            textAlign: "center",
            mb: 8,
          }}
        >
          <Chip
            label="Conheça nossa empresa"
            sx={{
              mb: 3,
              backgroundColor: "rgba(96,165,250,0.14)",
              color: "#93c5fd",
              border: "1px solid rgba(147,197,253,0.20)",
              fontWeight: 700,
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: "2.2rem", md: "4rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 3,
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            RSD Construções
          </Typography>

          <Typography
            sx={{
              maxWidth: 850,
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            A RSD Construções atua com dedicação, responsabilidade e excelência
            na execução de obras, reformas, manutenção e soluções em
            infraestrutura. Nosso compromisso é entregar resultados sólidos,
            com organização, qualidade e confiança em cada etapa do projeto.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: "100%",
                p: 4,
                borderRadius: "24px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
              }}
            >
              <EngineeringIcon sx={{ fontSize: 42, color: "#60a5fa", mb: 2 }} />
              <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, mb: 2 }}>
                Nossa Missão
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
                Executar projetos com eficiência, segurança e alto padrão de
                qualidade, sempre buscando atender as necessidades de cada
                cliente com seriedade e compromisso.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: "100%",
                p: 4,
                borderRadius: "24px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
              }}
            >
              <ApartmentIcon sx={{ fontSize: 42, color: "#60a5fa", mb: 2 }} />
              <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, mb: 2 }}>
                Nossa Atuação
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
                Trabalhamos com obras residenciais, corporativas, reformas,
                manutenção predial e soluções em infraestrutura, sempre
                priorizando organização, agilidade e durabilidade.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: "100%",
                p: 4,
                borderRadius: "24px",
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
              }}
            >
              <VerifiedIcon sx={{ fontSize: 42, color: "#60a5fa", mb: 2 }} />
              <Typography sx={{ fontSize: "1.3rem", fontWeight: 700, mb: 2 }}>
                Nossos Valores
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
                Transparência, confiança, qualidade, responsabilidade e foco em
                resultados. Esses são os pilares que sustentam a identidade da
                RSD Construções.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: "28px",
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(96,165,250,0.08) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2.1rem" },
              fontWeight: 800,
              mb: 2,
            }}
          >
            Por que escolher a RSD Construções?
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.9,
              fontSize: { xs: "1rem", md: "1.08rem" },
            }}
          >
            Porque acreditamos que cada obra representa mais do que uma entrega:
            representa confiança. Nosso objetivo é transformar ideias em
            projetos concretos, unindo planejamento, execução de qualidade e um
            relacionamento próximo com cada cliente.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Empresa;