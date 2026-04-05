import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  Divider,
  Paper,
  Chip,
  Alert,
  CircularProgress,
} from "@mui/material";

const initialState = {
  nome: "",
  sobrenome: "",
  whatsapp: "",
  email: "",
  endereco: "",
  servico: "",
  especificacoes: "",
};

export default function Orcamento() {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function normalizeWhatsApp(value) {
    return value.replace(/\D/g, "");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload = {
        ...formData,
        whatsapp: normalizeWhatsApp(formData.whatsapp),
      };

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/enviar-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const raw = await response.text();
      let data = {};

      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        data = { message: raw || "Resposta inválida do servidor." };
      }

      if (!response.ok) {
        throw new Error(data.message || "Erro ao enviar orçamento.");
      }

      setSuccessMessage(data.message || "Orçamento enviado com sucesso.");
      setFormData(initialState);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || "Erro ao enviar orçamento.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      id="orcamento"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        pt: 0,
        pb: 0,
        mt: 0,
        mb: 0,
        scrollMarginTop: "80px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          borderRadius: 0,
          boxShadow: "none",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          mt: 0,
        }}
      >
        <Box
          sx={{
            background: "linear-gradient(180deg, #081224 0%, #102a5c 100%)",
            color: "#fff",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Chip
            label="Solicite seu orçamento"
            sx={{
              width: "fit-content",
              mb: 2,
              backgroundColor: "rgba(255,255,255,0.10)",
              color: "#fff",
              fontWeight: 700,
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: "2.1rem", sm: "2.8rem", md: "3.2rem" },
              fontWeight: 900,
              lineHeight: 1.08,
              mb: 2,
              letterSpacing: "-0.03em",
            }}
          >
            Vamos tirar seu
            <br />
            projeto do papel
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.08rem" },
              maxWidth: "620px",
              mb: 4,
            }}
          >
            Preencha o formulário com as informações do serviço desejado.
            Nossa equipe analisará os dados e entrará em contato para dar
            continuidade ao seu orçamento.
          </Typography>

          <Box
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: "20px",
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              maxWidth: "650px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "1.05rem",
                mb: 1,
              }}
            >
              Atendimento profissional
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.84)",
                lineHeight: 1.8,
                fontSize: { xs: "0.98rem", md: "1rem" },
              }}
            >
              Obras, reformas, pisos, decks, serviços estruturais e soluções
              sob medida para clientes residenciais e corporativos.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            backgroundColor: "#f8fafc",
            p: { xs: 3, md: 4 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
              fontWeight: 900,
              color: "#0f172a",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Solicitar orçamento
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#64748b",
              mt: 1.5,
              mb: 3,
              fontSize: { xs: "0.98rem", md: "1.05rem" },
            }}
          >
            Preencha os dados abaixo para receber retorno da empresa
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {successMessage && (
            <Alert severity="success" sx={{ mb: 3, borderRadius: "12px" }}>
              {successMessage}
            </Alert>
          )}

          {errorMessage && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: "12px" }}>
              {errorMessage}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                gap: 2,
              }}
            >
              <TextField
                fullWidth
                required
                label="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                required
                label="Sobrenome"
                name="sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                required
                label="WhatsApp"
                name="whatsapp"
                type="tel"
                placeholder="(51) 99999-9999"
                value={formData.whatsapp}
                onChange={handleChange}
                inputProps={{
                  inputMode: "numeric",
                  maxLength: 20,
                }}
              />

              <TextField
                fullWidth
                required
                label="E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <Box sx={{ gridColumn: { xs: "span 1", md: "span 2" } }}>
                <TextField
                  fullWidth
                  required
                  label="Endereço"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                />
              </Box>

              <Box sx={{ gridColumn: { xs: "span 1", md: "span 2" } }}>
                <TextField
                  fullWidth
                  required
                  select
                  label="Serviço desejado"
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                >
                  <MenuItem value="">Selecione</MenuItem>
                  <MenuItem value="Casa do zero">Casa do zero</MenuItem>
                  <MenuItem value="Reforma interna">Reforma interna</MenuItem>
                  <MenuItem value="Reforma externa">Reforma externa</MenuItem>
                  <MenuItem value="Pisos">Pisos</MenuItem>
                  <MenuItem value="Decks">Decks</MenuItem>
                  <MenuItem value="Muros e pátios">Muros e pátios</MenuItem>
                  <MenuItem value="Telhados">Telhados</MenuItem>
                </TextField>
              </Box>

              <Box sx={{ gridColumn: { xs: "span 1", md: "span 2" } }}>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  label="Especificações do serviço"
                  name="especificacoes"
                  value={formData.especificacoes}
                  onChange={handleChange}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "stretch", sm: "flex-end" },
                mt: 3,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  minWidth: { sm: "220px" },
                  px: 4,
                  py: 1.4,
                  borderRadius: "14px",
                  fontWeight: 800,
                  textTransform: "none",
                  fontSize: "1rem",
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  boxShadow: "0 12px 26px rgba(37,99,235,0.24)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#fff" }} />
                ) : (
                  "Enviar orçamento"
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}