const express = require('express');
const app = express();
const developers = require('./developers/Developers');
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Server home!');
});

app.use('/developers', developers);

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});