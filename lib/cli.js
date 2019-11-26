const mdLinks = require("./index.js");

var path = require('path');
var filename = path.basename('README.md');

mdLinks(filename)
    .then((valorResolve) => {
        console.log(valorResolve)
    })
    .catch(console.error);


// console.log(filename);