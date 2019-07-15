import express from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import * as sapper from '@sapper/server';
import session from 'express-session';

const { PORT, NODE_ENV, DBLINK } = process.env;
const dev = NODE_ENV === 'development';

mongoose.connect(DBLINK || 'mongodb://localhost:27017/randomdb', { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });

const app = express(); // You can also use Express
	
app.use(
		compression({ threshold: 0 }),
		express.json(),
		express.static('static'),
		session({
			secret: 'thisisasuppersecret',
			saveUninitialized: false,
			resave: false
		}),
		sapper.middleware({
			session: req => ({ user: req.session.user })
		})
	);

app.listen(PORT, err => {
		if (err) console.log('error', err);
	});
