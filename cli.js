#! /usr/bin/env node
const mdLinks = require("./lib/index.js");
const path = process.argv[2];
const option = process.argv[3];

mdLinks(path, option)
  .then((resolveValue) => {
    if (option === "--validate") {
      resolveValue.forEach(item => {console.log(`\nTitle: ${item.text} \nURL: ${item.href} \nStatus: ${item.status}`);
      });
    } else {
      resolveValue.forEach(item => {console.log(`\nTitle: ${item.text} \nURL: ${item.href}`);
      });
    }
  })
  .catch(console.error); 