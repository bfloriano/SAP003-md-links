const fs = require("fs");

const mdLinks = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(`${err}`);
      } else {
        // const regex = /\[([^\[\]]+)\]\(https?:\/\/([^\)]*)\)/gm;  
        const regex = /\[([^\[\]]+)\]\(([^\)]*)\)/gm;   
        let m;
        let arr =[];

        while ((m = regex.exec(data)) !== null) {
          arr.push({href: m[2], text: m[1].replace(/\s+/gm, " ")});
        }   
        resolve(arr);
      }
    });
  });
};

module.exports = mdLinks;