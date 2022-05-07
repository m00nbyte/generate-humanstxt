const generateTxt = require('../dist');
const config = require('./config.json');

generateTxt(config.options)
    .then((content) => console.log(content))
    .catch((error) => console.log(error));
