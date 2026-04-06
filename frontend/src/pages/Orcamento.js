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

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload = {
        ...formData,
        whatsapp: formData.whatsapp.replace(/\D/g, ""),
      };

      const response = await fetch(
        "https://rsd-construcoes-site.onrender.com/api/orcamento",
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
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
        }}
      >
        {/* LADO ESQUERDO */}
        <Box
          sx={{
            background: "linear-gradient(180deg, #081224 0%, #102a5c 100%)",
            color: "#fff",
            p: { xs: 3, md: 4 },
          }}
        >
          <Chip label="Solicite seu orçamento" sx={{ mb: 2 }} />

          <Typography sx={{ fontSize: "2.5rem", fontWeight: 900 }}>
            Vamos tirar seu
            <br />
            projeto do papel
          </Typography>
        </Box>

        {/* FORM */}
        <Box sx={{ backgroundColor: "#f8fafc", p: 3 }}>
          <Typography sx={{ fontSize: "2rem", fontWeight: 900 }}>
            Solicitar orçamento
          </Typography>

          <Divider sx={{ my: 3 }} />

          {successMessage && <Alert severity="success">{successMessage}</Alert>}
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              required
              label="Nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              required
              label="Sobrenome"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              required
              label="WhatsApp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              required
              label="E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              required
              label="Endereço"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              required
              select
              label="Serviço desejado"
              name="servico"
              value={formData.servico}
              onChange={handleChange}
              sx={{ mb: 2 }}
            >
              <MenuItem value="">Selecione</MenuItem>
              <MenuItem value="Casa do zero">Casa do zero</MenuItem>
              <MenuItem value="Reforma">Reforma</MenuItem>
              <MenuItem value="Pisos">Pisos</MenuItem>
            </TextField>

            <TextField
              fullWidth
              multiline
              minRows={3}
              label="Especificações"
              name="especificacoes"
              value={formData.especificacoes}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />

            <Button type="submit" fullWidth variant="contained" disabled={loading}>
              {loading ? <CircularProgress size={24} /> : "Enviar orçamento"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}