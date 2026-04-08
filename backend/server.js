const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API do orçamento funcionando");
});

app.post("/api/orcamento", async (req, res) => {
  try {
    console.log("BODY RECEBIDO:", req.body);

    if (!req.body) {
      return res.status(400).json({
        message: "Body da requisição não foi enviado.",
      });
    }

    const {
      nome,
      sobrenome,
      whatsapp,
      email,
      endereco,
      servico,
      especificacoes,
    } = req.body;

    if (!nome || !whatsapp || !email || !servico) {
      return res.status(400).json({
        message: "Preencha os campos obrigatórios.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlMessage = `
      <h2>Novo pedido de orçamento</h2>
      <p><strong>Nome:</strong> ${nome} ${sobrenome || ""}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Endereço:</strong> ${endereco || "-"}</p>
      <p><strong>Serviço desejado:</strong> ${servico}</p>
      <p><strong>Especificações:</strong></p>
      <p>${especificacoes || "-"}</p>
    `;

    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: process.env.OWNER_EMAIL,
    //   subject: "Novo orçamento solicitado pelo site",
    //   html: htmlMessage,
    // });

    res.status(200).json({
      message: "Orçamento enviado com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({
      message: "Erro interno ao enviar orçamento.",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});