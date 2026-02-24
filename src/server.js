import express from 'express';
import router from './routes/router.routes.js';
import path from 'path';
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router)


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servido rodando em http://localhost:${process.env.SERVER_PORT}`)

})