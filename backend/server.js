const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/traduzir", async (req, res) => {
  const { text, target_lang } = req.body;

  try {
    const response = await axios.post("https://api-free.deepl.com/v2/translate", null, {
      params: {
        auth_key: process.env.DEEPL_KEY,
        text,
        target_lang
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro na tradução." });
  }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
