// server for task 6
const exp = require('express');
const app = exp();
const port = 1245;
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.listen(port, () => {
});
module.exports = app;
