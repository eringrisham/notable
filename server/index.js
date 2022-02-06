const express = require('express');
const port = 3007;
const router = require('./routes');
const app = express();

app.use(express.json());

app.use('/', router);

app.listen(port, () => console.log(`App listening on port ${port}!`));
