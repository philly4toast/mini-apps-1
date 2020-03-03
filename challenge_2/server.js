const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('client'))

app.listen(port, () => console.log(`listening on port ${port}`));

// app.get('/express_backend', (req, res) => {
//   res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
// })