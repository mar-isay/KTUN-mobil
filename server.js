const express = require('express');
const authController = require('./authController');
app.use(express.json());
app.post('/register', authController.register);
app.post('/login', authController.login);
const app = express();
const port = 3000;

app.use(express.json());

// Ana sayfa testi
app.get('/', (req, res) => {
  res.send('KTÜN Mobil Uygulama Backend Çalışıyor!');
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde hazır.`);
});