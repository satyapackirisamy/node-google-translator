const config = require('config')
const gApi = config.get('google_api_key');
const googleTranslate = require('google-translate')(gApi)

var text = "Hello, This is Sathya Prakash from Chennai. I'm learning NLP using Node Js";
console.log("English: >",text)
googleTranslate.translate(text, 'es', function(err, translation){
	console.log("Spanish:>", translation.translatedText);
});
