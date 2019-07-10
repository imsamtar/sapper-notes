import express from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

mongoose.connect('mongodb://localhost:27017/randomdb', { useNewUrlParser: true, useCreateIndex: true });

const app = express(); // You can also use Express
	
app.use(
		compression({ threshold: 0 }),
		express.json(),
		express.static('static'),
		sapper.middleware()
	);

app.listen(PORT, err => {
		if (err) console.log('error', err);
	});
