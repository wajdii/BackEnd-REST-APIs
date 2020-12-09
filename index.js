const express = require('express');

const app = express();
const PORT = process.env.PORT || 7000;

var cors = require('cors');
app.use(cors());

const bodyParser = require ('body-parser');
app.use(bodyParser.json());

const myRouter = require('./Routers/router');
app.use(myRouter);

app.listen(PORT, () => console.log(`Server is listening on port : ${PORT}`));
