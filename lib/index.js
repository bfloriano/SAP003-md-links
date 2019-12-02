const fs = require('fs');

const mdLinks = (arquivo) => {
    return new Promise((resolve, reject) => {
    fs.readFile(arquivo, (err, data) => {
        if (err) {
            reject(`Error: ${err}`);
        } else {
            const texto = data.toString()
            const regex = /\[([^\s].+?)\]\((https?:\/\/[^\)]*)\)/gm;      // const regex = /http[s]?:\/\/([^\/]*)/mg;
 
    let m;
    let arr =[];

    while ((m = regex.exec(texto)) !== null) {
        // if (m.index === regex.lastIndex) {
        //     regex.lastIndex++;
        // }
        arr.push({href: m[2], text: m[1]});
    }   
    resolve(arr);
}
}) 
})
};

module.exports = mdLinks;