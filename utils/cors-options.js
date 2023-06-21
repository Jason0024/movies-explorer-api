// Настройки для CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://api.jason.diploma.nomoreparties.sbs', 'https://jason.diploma.nomoreparties.sbs'],
  credentials: true,
};

module.exports = corsOptions;
