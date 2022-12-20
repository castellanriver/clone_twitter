import express from 'express';
<<<<<<< HEAD
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors';

// Router import

import tweetsRouter from './router/tweets.js'

const app = express();

//Middleware
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))
=======
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import tweetsRouter from './router/tweets.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
>>>>>>> dcca2ac (frontend changes)

app.use('/tweets', tweetsRouter);

app.use((req, res, next) => {
<<<<<<< HEAD
  res.sendStatus(404)
=======
  res.sendStatus(404);
>>>>>>> dcca2ac (frontend changes)
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
<<<<<<< HEAD
})
app.listen(8080);
=======
});
app.listen(8080);
>>>>>>> dcca2ac (frontend changes)
