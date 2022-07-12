const config = require('config')
const gApi = config.get('google_api_key');
const googleTranslate = require('google-translate')(gApi)
const express = require('express');
const app = express();
const port = 8002;

//app.listen(port, ()=>console.log(`Listening to the port ${port}`));
app.listen(process.env.PORT, '0.0.0.0', ()=>console.log('Server is up and running!!'))
var text = "Hello, This is Sathya Prakash from Chennai. I'm learning NLP using Node Js";
console.log("English: >",text)
googleTranslate.translate(text, 'es', function(err, translation){
	console.log("Spanish:>", translation.translatedText);
});

app.get('/translate', function(req, res)=>{
	res.send("Welcome to translation")
});

