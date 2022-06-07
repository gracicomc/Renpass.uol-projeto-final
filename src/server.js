const morgan = require('morgan');
const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Running API on PORT ${PORT}`);
});

app.use(morgan('dev'));