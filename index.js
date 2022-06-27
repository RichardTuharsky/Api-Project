import express from 'express';
import bodyParser from 'body-parser';

//backend
const app = express();
const PORT = 5000;

//middleware
app.use(bodyParser.json()); //sending and requesting data trhough rest api

app.get('/', (req, res) => {
    console.log('[TEST]');

    res.send('Hello from Homepage.');
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));