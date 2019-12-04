#! /usr/bin/env node
const mdLinks = require("./lib/index.js");
const path = process.argv[2];

mdLinks(path)
  .then((resolveValue) => {
    resolveValue.forEach(item => {console.log(`\nTitle: ${item.text} \nURL: ${item.href}`);
    });
  })
  .catch(console.error); 
