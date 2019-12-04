const fs = require("fs");

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(`${err}`);
      } else {
        const file = data.toString();
        const regex = /\[([^\[\]]+)\]\(https?:\/\/([^\)]*)\)/gm;     
        let m;
        let arr =[];

        while ((m = regex.exec(file)) !== null) {
          arr.push({href: m[2], text: m[1].replace(/\s+/gm, " ")});
        }   
        resolve(arr);
      }
    });
  });
};

module.exports = mdLinks;