const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";

function gen(num = 10, chars = characters){
	let code = "";

	if (num == "0" || num == null) num = 10;
	for (let i = 0; i < parseInt(num); i++){
		code += chars.split("")[Math.floor(Math.random() * chars.length)];
	}

	return code;
};