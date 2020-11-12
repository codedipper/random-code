const { characters } = require("./characters.json");

function generate(num){
    let code = "";

    for (let i = 0; i < parseInt(num); i++) {
        let s = Math.floor(Math.random() * characters.length);
        code = code + characters[s];
    }

    return code;
}

module.exports = generate;
