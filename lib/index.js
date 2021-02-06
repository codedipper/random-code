const { chars } = require("./chars.json");
const { floor, random } = Math;

function generate(num = 10, characters = chars){
	if (num == "0") num = 10;
	if (!Array.isArray(characters)) characters = chars;

	let code = "";

	for (let i = 0; i < parseInt(num); i++) 
		code = code + characters[floor(random() * characters.length)];

	return code;
};

module.exports = generate;
