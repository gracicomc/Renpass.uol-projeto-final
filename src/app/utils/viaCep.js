const axios = require('axios');

axios.get('https://viacep.com.br/ws/66023140/json').then((data) => {
	console.log(data);
});
