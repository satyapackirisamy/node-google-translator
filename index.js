const config = require('config')
const gApi = config.get('google_api_key');
const googleTranslate = require('google-translate')(process.env.google_api_key)
const express = require('express');
const app = express();
const port = 8002;
console.log(gApi);
//app.listen(port, ()=>console.log(`Listening to the port ${port}`));
app.listen(process.env.PORT, '0.0.0.0', ()=>console.log(`Listening to the port ${port}. Server is up and running!!`))
	var text = "Hello, This is Sathya Prakash from Chennai. I'm learning NLP using Node Js";
console.log("English: >",text)
googleTranslate.translate(text, 'es', function(err, translation){
	console.log("Spanish:>", translation.translatedText);
});

app.get('/translate', (req, res)=>{
	res.send("Welcome to translation")
});
