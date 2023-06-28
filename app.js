import 'dotenv/config.js'
import './config/db.js'
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cors from 'cors'
import { __dirname } from './utils.js';
import indexRouter from './routes/index.js';

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/api', indexRouter);


export default app
