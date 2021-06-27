const express = require('express');
const path = require('path');
const app = express();
const developers = require('./developers/Developers');
const port = process.env.PORT || 4000;

app.use('/developers', developers);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('devrepoclient/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.join('devrepoclient','build', 'index.html'),{ root: __dirname });
  });
}
app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});
