const express = require('express');
const app = express();
const PORT = 3000;

// Permite que o servidor entenda requisições com JSON no corpo
app.use(express.json());

// Array para armazenar feedbacks temporariamente (em memória)
let feedbacks = [];

// Endpoint para adicionar feedback
app.post('/api/feedback', (req, res) => {
  const { barbeiro, comentario, avaliacao } = req.body;

  if (!barbeiro || !comentario || !avaliacao) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  // Adiciona o feedback ao array
  feedbacks.push({ barbeiro, comentario, avaliacao });
  res.status(201).send('Feedback enviado com sucesso!');
});

// Endpoint para listar todos os feedbacks
app.get('/api/feedback', (req, res) => {
  res.status(200).json(feedbacks);
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const cors = require('cors');
app.use(cors()); // Permite requisições de qualquer origem

