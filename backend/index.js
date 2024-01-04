const express = require('express');
//const xss = require('xss');
const cors = require('cors');

const app = express();
//app.use(xss());
app.use(cors());
app.options('*',cors())
app.use(express.json());


app.listen(5000, () => {
    console.log('listen on 5000');
})