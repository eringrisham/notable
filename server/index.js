const express = require('express');
const port = 3007;
const router = require('./routes');
const app = express();

// the body parser
app.use(express.json());

// Set up our routes
app.use('/', router);

app.get('/', (req, res) => {
	res.send('HI!');
})

app.listen(port, () => console.log(`App listening on port ${port}!`));