// contains endppoint
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7865;

app.use(bodyParser.json())
app.get('/', (_, result) => {
  result.send('Welcome to the payment system');
});
app.get('/cart/:id(\\d+)', (request, result) => {
  const { id } = request.params;
  result.send(`Payment methods for cart ${id}`);
});
app.get('/available_payments', (request, result) => {
  result.json({payment_methods: {
    credit_cards: true,
    paypal: false
  }
  });
});
app.post('/login', (request, result) => {
  const { userName } = request.body;
  result.send(`Welcome ${userName}`);
});
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
module.exports = app;
