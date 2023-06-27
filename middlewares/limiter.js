const rateLimit = require('express-rate-limit');

// Для защиты от множества автоматических запросов
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

module.exports = limiter;
