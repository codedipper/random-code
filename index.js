const { chars } = require("./chars.json");

function generate(num = 10){
    let code = "";

    for (let i = 0; i < parseInt(num); i++) {
        code = code + chars[Math.floor(Math.random() * chars.length)];
    }

    return code;
}

module.exports = generate;
