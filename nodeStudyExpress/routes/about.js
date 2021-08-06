import express from 'express';

const about = express.Router();

about.get('/', (req, res) => res.send('this is about page'));

export default about;
