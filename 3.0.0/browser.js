function gen(n = 10, ch = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-"){
	let c = "";

	if (n == "0" || n == null) n = 10;
	for (let i = 0; i < parseInt(n); i++){
		c += ch.split("")[Math.floor(Math.random() * ch.length)];
	}

	return c;
};