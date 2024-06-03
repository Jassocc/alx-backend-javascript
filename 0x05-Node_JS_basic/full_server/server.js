// Sercer for https mod
const exp = require('express');
const route = require('./routes/index');

const app = exp();
const port = 1245;
app.use('/', route);
app.use('/students', route);
app.use('/students/:major', route);
app.listen(port);
export default app;
