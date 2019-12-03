const fs = require('fs');

const mdLinks = (arquivo) => {
    return new Promise((resolve, reject) => {
    fs.readFile(arquivo, (err, data) => {
        if (err) {
            reject(`Error: ${err}`);
        } else {
            const texto = data.toString()
            const regex = /\[([^\[\]]+)\]\(https?:\/\/([^\)]*)\)/gm;     
 
            let m;
            let arr =[];

            while ((m = regex.exec(texto)) !== null) {
                arr.push({href: m[2], text: m[1].replace(/\s+/gm, ' ')});
            }   
            resolve(arr);
        }
    }) 
    })
};

module.exports = mdLinks;