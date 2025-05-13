const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Para carregar variáveis de ambiente de um arquivo .env, se necessário

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/consume-flask', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000');
    
    res.json({
      message: 'Response from Flask API:',
      data: response.data
    });
  } catch (error) {
    console.error('Error consuming Flask API:', error);
    res.status(500).json({ error: 'Failed to consume Flask API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
