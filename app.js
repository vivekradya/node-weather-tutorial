let apiKey = '***';
let city = 'lisbon,pt';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`



const request = require('request')

request(url, function (err, response, body) {
	if(err){
		console.log('error:', error);
	} else {
		let weather = JSON.parse(body)
		let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
		console.log(message);
	}
});
