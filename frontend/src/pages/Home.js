import React from "react";
import { Box, Typography, Button, Fade, Stack, Chip } from "@mui/material";
import logoInicial from "../assets/LogoRSD2.png";

function Home() {

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        px: { xs: 2, sm: 4, md: 6, lg: 10 },
        py: { xs: 8, md: 10 },
        backgroundImage: `url(${logoInicial})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay principal */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              135deg,
              rgba(5, 20, 45, 0.88) 0%,
              rgba(8, 30, 70, 0.78) 45%,
              rgba(0, 0, 0, 0.62) 100%
            )
          `,
          zIndex: 1,
        }}
      />

      {/* brilho decorativo */}
      <Box
        sx={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: { xs: 220, md: 360 },
          height: { xs: 220, md: 360 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,0.30) 0%, rgba(37,99,235,0) 70%)",
          zIndex: 1,
        }}
      />

      <Fade in timeout={1200}>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "760px" },
            }}
          >
            {/* selo */}
            <Chip
              label="Construção civil • manutenção • infraestrutura"
              sx={{
                mb: 3,
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
                fontWeight: 500,
                fontSize: { xs: "0.72rem", sm: "0.82rem" },
                height: 36,
              }}
            />

            {/* título */}
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontFamily: "Montserrat, sans-serif",
                textShadow: "0 6px 24px rgba(0,0,0,0.45)",
                fontSize: {
                  xs: "2.4rem",
                  sm: "3.3rem",
                  md: "4.4rem",
                  lg: "5.3rem",
                },
              }}
            >
              Construímos com
              <Box
                component="span"
                sx={{
                  display: "block",
                  color: "#60a5fa",
                }}
              >
                qualidade, confiança
              </Box>
              e resultado.
            </Typography>

            {/* subtítulo */}
            <Typography
              sx={{
                mt: 3,
                color: "rgba(255,255,255,0.92)",
                fontSize: {
                  xs: "1rem",
                  sm: "1.08rem",
                  md: "1.15rem",
                  lg: "1.22rem",
                },
                lineHeight: 1.8,
                maxWidth: "680px",
                textShadow: "0 2px 10px rgba(0,0,0,0.35)",
              }}
            >
              A RSD Construções entrega soluções completas em construção civil,
              reformas, manutenção e infraestrutura, com foco em segurança,
              compromisso e excelência em cada projeto.
            </Typography>

            {/* botões */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4.5 }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  window.open(
                    "https://wa.me/5551995435133?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.",
                    "_blank"
                  );
                }}
                sx={{
                  px: 4.5,
                  py: 1.5,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 700,
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  boxShadow: "0 10px 30px rgba(37,99,235,0.35)",
                  textTransform: "none",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 14px 34px rgba(37,99,235,0.42)",
                    background:
                      "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                  },
                }}
              >
                Fale conosco
              </Button>

              <Button
                variant="outlined"
                onClick={scrollToServices}
                sx={{
                  px: 4.5,
                  py: 1.5,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  fontWeight: 600,
                  borderRadius: "14px",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.35)",
                  textTransform: "none",
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  "&:hover": {
                    borderColor: "#fff",
                    backgroundColor: "rgba(255,255,255,0.10)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Conhecer serviços
              </Button>
            </Stack>

            {/* métricas */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 4 }}
              sx={{
                mt: 6,
                pt: 3,
                borderTop: "1px solid rgba(255,255,255,0.14)",
                maxWidth: "820px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#60a5fa",
                    fontWeight: 800,
                    fontSize: { xs: "1.6rem", md: "2rem" },
                  }}
                >
                  +100%
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.82)" }}>
                  Compromisso com qualidade
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#60a5fa",
                    fontWeight: 800,
                    fontSize: { xs: "1.6rem", md: "2rem" },
                  }}
                >
                  Segurança
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.82)" }}>
                  Execução com responsabilidade
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#60a5fa",
                    fontWeight: 800,
                    fontSize: { xs: "1.6rem", md: "2rem" },
                  }}
                >
                  Resultado
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.82)" }}>
                  Soluções sob medida para cada obra
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}

export default Home;