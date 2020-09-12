import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'connect-flash';
import compression from 'compression';
import helmet from 'helmet';
import cookieSession from 'cookie-session';
import createError from 'http-errors';
import dbConfig from './db';
import initPassport from './api/auth/passport/init';
// api routes
import loginRouter from './api/auth/login';
import signupRouter from './api/auth/signup';
import logoutRouter from './api/auth/logout';
import userRouter from './api/user/user.router';
import foodRouter from './api/food/food.router';

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useFindAndModify: false,
});
const { connection } = mongoose;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 365 * 24 * 60 * 60 * 1000,
}));

app.use(passport.initialize());
app.use(passport.session());
initPassport(passport);

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ['*'],
      styleSrc: ["'self'", 'http://*', "'unsafe-inline'"],
      scriptSrc: ["'self'", 'http://*', "'unsafe-inline'", "'unsafe-eval'"],
    },
  },
}));

app.use(cors({
  origin: [
    'http://127.0.0.1:8080',
    'http://localhost:8080',
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://192.168.0.15:3000',
  ],
  credentials: true,
}));

const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) {
    return false;
  }
  return compression.filter(req, res);
};
app.use(compression({ filter: shouldCompress }));

app.use('/api/login', loginRouter(passport));
app.use('/api/signup', signupRouter(passport));
app.use('/api/logout', logoutRouter());
app.use('/api/user', userRouter);
app.use('/api/food', foodRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
