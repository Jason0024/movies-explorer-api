// Настройки для CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://localhost:3000', 'http://localhost:3001', 'https://localhost:3001', 'http://api.jason.diploma.nomoreparties.sbs', 'https://api.jason.diploma.nomoreparties.sbs', 'http://jason.diploma.nomoreparties.sbs', 'https://jason.diploma.nomoreparties.sbs'],
  credentials: true,
};

module.exports = corsOptions;
