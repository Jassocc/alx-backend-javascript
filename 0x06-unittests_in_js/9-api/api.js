// contains endppoint
const express = require('express');
const app = express();
const port = 7865;

app.get('/', (_, result) => {
  result.send('Welcome to the payment system');
});
app.get('/cart/:id(\\d+)', (request, result) => {
  const { id } = request.params;
  result.send(`Payment methods for cart ${id}`);
});
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
module.exports = app;
