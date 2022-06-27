import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

//backend
const app = express();
const PORT = 5000;

//middleware
app.use(bodyParser.json()); //sending and requesting data trhough rest api

app.use('/users', usersRoutes);

app.get('/', (req, res) =>  res.send('Hello from Homepage.')); 

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));