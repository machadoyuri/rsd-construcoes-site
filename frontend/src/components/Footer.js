import React from "react";
import { Box, Typography, Link, Stack, Divider } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: "#081120",
      color: "white",
      pt: { xs: 5, md: 7 },
      pb: 3,
      px: { xs: 3, sm: 4, md: 8 },
      borderTop: "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <Box
      sx={{
        maxWidth: "1300px",
        mx: "auto",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          lg: "1.3fr 1fr 1fr",
        },
        gap: { xs: 4, md: 6 },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 800,
            letterSpacing: 1.2,
            fontFamily: "Montserrat, sans-serif",
            textTransform: "uppercase",
          }}
        >
          RSD Construções Ltda
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: "rgba(255,255,255,0.78)",
            lineHeight: 1.9,
            maxWidth: "380px",
          }}
        >
          Construindo com qualidade, segurança e compromisso, oferecendo
          soluções completas para obras, reformas e infraestrutura.
        </Typography>

        <Typography
          variant="body2"
          sx={{ mt: 2.5, color: "rgba(255,255,255,0.72)" }}
        >
          Desenvolvido por{" "}
          <Link
            href="https://github.com/machadoyuri"
            target="_blank"
            rel="noreferrer"
            color="#60a5fa"
            underline="hover"
            sx={{ fontWeight: 700 }}
          >
            DevMSDaRosa
          </Link>
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "0.95rem",
            fontWeight: 700,
            mb: 2,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Localização
        </Typography>

        <Stack spacing={1.5}>
          <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.2 }}>
            <LocationOnOutlinedIcon
              sx={{ fontSize: 18, color: "#60a5fa", mt: "2px" }}
            />
            <Box>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.78)" }}>
                Rua Palmeira, 256
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.78)" }}>
                Campo Bom, RS – Brasil
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: "0.95rem",
            fontWeight: 700,
            mb: 2,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          Contato
        </Typography>

        <Stack spacing={1.5}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <EmailOutlinedIcon sx={{ fontSize: 18, color: "#60a5fa" }} />
            <Link
              href="mailto:rsdconstrucoes@gmail.com"
              underline="hover"
              color="inherit"
              sx={{ color: "rgba(255,255,255,0.78)" }}
            >
              rsdconstrucoes@gmail.com
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
            <PhoneOutlinedIcon sx={{ fontSize: 18, color: "#60a5fa" }} />
            <Link
              href="tel:+5551995435133"
              underline="hover"
              color="inherit"
              sx={{ color: "rgba(255,255,255,0.78)" }}
            >
              (51) 99543-5133
            </Link>
          </Box>
        </Stack>
      </Box>
    </Box>

    <Divider
      sx={{
        maxWidth: "1300px",
        mx: "auto",
        mt: { xs: 4, md: 5 },
        mb: 3,
        borderColor: "rgba(255,255,255,0.08)",
      }}
    />

    <Box sx={{ maxWidth: "1300px", mx: "auto", textAlign: "center" }}>
      <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.58)" }}>
        © {new Date().getFullYear()} RSD Construções. Todos os direitos reservados.
      </Typography>
    </Box>
  </Box>
);

export default Footer;