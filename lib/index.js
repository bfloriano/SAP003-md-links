const fs = require("fs");
const fetch = require("node-fetch");

const mdLinks = (path, option) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {

      let arr =[];
      if (err) {
        reject(`${err}`);
      } else {
        const regex = /\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm;  
     
        let m;

        while ((m = regex.exec(data)) !== null) {
          arr.push({href: m[2], text: m[1].replace(/\s+/gm, " ")});
        }
      }
      
      if (option) {
        const insidePromise = arr.map(item => {
          return fetch(item.href)
            .then(response => {
              item.statusText = response.statusText;
            })
            .catch(`${err}`);
        });

        Promise.all(insidePromise)
          .then(() => {
            resolve(arr);
          })
          .catch(`${err}`);
      } else {
        resolve(arr);
      }
    });
  });
};

module.exports = mdLinks;