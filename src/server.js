// const swaggerUi = require('swagger-ui-express');
// const swaggerDocs = require('../swagger.json');
const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Running API on PORT ${PORT}`);
});
