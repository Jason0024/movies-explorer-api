require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

const { PORT = 3000, NODE_ENV, DATABASE } = process.env;
const cors = require('cors');
const helmet = require('helmet');
const corsOptions = require('./utils/cors-options');
const responseHandler = require('./middlewares/response-handler');

const app = express();
// Защита сервера
const limiter = require('./middlewares/limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');

// Импорт основных роутов
const mainRouter = require('./routes/index');

// Блок кода для работы с mongoDB
mongoose.set('strictQuery', false);
mongoose.connect(NODE_ENV === 'production' ? DATABASE : 'mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
});

app.use('*', cors(corsOptions));
// Логгер
app.use(requestLogger);
// Автоматически проставлять заголовки безопасности
app.use(express.json());
app.use(limiter);
app.use(helmet());
app.use(cookieParser());
// Основные рабочие роуты
app.use('/', mainRouter);
app.use(errorLogger);
// Обработчик ответов
app.use(errors());
app.use(responseHandler);

// Служебная информация: адрес запущенного сервера
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Сервер успешно запущен — ${PORT}`);
});
