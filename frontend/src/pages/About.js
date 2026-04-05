import React from "react";
import { Box, Typography, Button, Chip, Stack } from "@mui/material";
import sobreImg from "../assets/sobre-imagem.jpeg";
import { useNavigate } from "react-router-dom";




const About = () => {
  const navigate = useNavigate();
  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        height: "auto",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "flex-start",
        gap: { xs: 5, md: 8 },
        px: { xs: 3, sm: 4, md: 6 },
        py: { xs: 5, md: 6 },
        background:
          "linear-gradient(135deg, #081120 0%, #0D1B2A 45%, #13293D 100%)",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: { xs: 220, md: 340 },
          height: { xs: 220, md: 340 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(37,99,235,0) 70%)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "-140px",
          right: "-100px",
          width: { xs: 240, md: 380 },
          height: { xs: 240, md: 380 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96,165,250,0.14) 0%, rgba(96,165,250,0) 70%)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          flex: 1,
          maxWidth: 620,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Chip
          label="Sobre a RSD Construções"
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
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            fontFamily: "Montserrat, sans-serif",
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3.2rem",
              lg: "3.8rem",
            },
            mb: 3,
          }}
        >
          Construindo projetos com
          <Box
            component="span"
            sx={{
              display: "block",
              color: "#60a5fa",
            }}
          >
            qualidade, confiança e excelência
          </Box>
        </Typography>

        <Typography
          sx={{
            lineHeight: 1.9,
            fontSize: { xs: "1rem", md: "1.08rem" },
            color: "rgba(255,255,255,0.88)",
            fontFamily: "Roboto, sans-serif",
            mb: 2.5,
          }}
        >
          A RSD Construções é especializada em soluções completas para obras,
          manutenção e infraestrutura, atendendo com compromisso, organização
          e alto padrão de execução em projetos residenciais e corporativos.
        </Typography>

        <Typography
          sx={{
            lineHeight: 1.9,
            fontSize: { xs: "1rem", md: "1.08rem" },
            color: "rgba(255,255,255,0.82)",
            fontFamily: "Roboto, sans-serif",
            mb: 4,
          }}
        >
          Nossa atuação é guiada pela segurança, eficiência e transparência em
          cada etapa do processo, sempre buscando entregar resultados duradouros
          e soluções que valorizem o investimento de cada cliente.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Box
            sx={{
              px: 2.5,
              py: 1.5,
              borderRadius: "14px",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography sx={{ fontWeight: 700, color: "#60a5fa" }}>
              Compromisso
            </Typography>
            <Typography
              sx={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)" }}
            >
              Atendimento sério e responsável
            </Typography>
          </Box>

          <Box
            sx={{
              px: 2.5,
              py: 1.5,
              borderRadius: "14px",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography sx={{ fontWeight: 700, color: "#60a5fa" }}>
              Qualidade
            </Typography>
            <Typography
              sx={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)" }}
            >
              Execução com alto padrão
            </Typography>
          </Box>

          <Box
            sx={{
              px: 2.5,
              py: 1.5,
              borderRadius: "14px",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography sx={{ fontWeight: 700, color: "#60a5fa" }}>
              Segurança
            </Typography>
            <Typography
              sx={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.78)" }}
            >
              Processos confiáveis em cada obra
            </Typography>
          </Box>
        </Stack>

        <Button
          onClick={() => navigate("/empresa")}
          variant="contained"
          sx={{
            px: 4.5,
            py: 1.6,
            fontSize: "1rem",
            fontWeight: 700,
            borderRadius: "14px",
            background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
            textTransform: "none",
            boxShadow: "0 10px 30px rgba(37,99,235,0.30)",
            "&:hover": {
              background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
              transform: "translateY(-2px)",
              boxShadow: "0 16px 36px rgba(37,99,235,0.35)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Conhecer nossa empresa
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "85%", md: "100%" },
            maxWidth: 560,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: "-16px 16px 16px -16px",
              borderRadius: "28px",
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.20) 0%, rgba(96,165,250,0.10) 100%)",
              filter: "blur(10px)",
            }}
          />

          <Box
            sx={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
              transition: "all 0.4s ease",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow:
                  "0 30px 70px rgba(0,0,0,0.45), 0 0 0 1px rgba(96,165,250,0.18)",
              },
              "&:hover .about-image": {
                transform: "scale(1.06)",
              },
              "&:hover .about-overlay": {
                opacity: 1,
                transform: "translateY(0)",
              },
              "&:hover .about-glow": {
                opacity: 1,
              },
            }}
          >
            <Box
              className="about-glow"
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(37,99,235,0.20), rgba(37,99,235,0.02), transparent)",
                opacity: 0,
                transition: "all 0.4s ease",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            <Box
              component="img"
              src={sobreImg}
              alt="Sobre RSD"
              className="about-image"
              sx={{
                position: "relative",
                width: "100%",
                display: "block",
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
            />

            <Box
              className="about-overlay"
              sx={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                px: 2.5,
                py: 2,
                background:
                  "linear-gradient(to top, rgba(8,17,32,0.96) 0%, rgba(8,17,32,0.82) 70%, rgba(8,17,32,0.15) 100%)",
                backdropFilter: "blur(8px)",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                opacity: 0,
                transform: "translateY(100%)",
                transition: "all 0.4s ease",
                zIndex: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "0.92rem", md: "1rem" },
                  fontWeight: 700,
                  color: "#f8fafc",
                  textAlign: "center",
                  letterSpacing: "0.01em",
                }}
              >
                Fundador da RSD Construções - Rogério Samuel Da Rosa
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;