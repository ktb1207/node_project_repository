import express from 'express';

const home = express.Router();

home.get('/', (req, res) => res.send('this is home page'));

export default home;
