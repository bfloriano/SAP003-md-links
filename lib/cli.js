#! /usr/bin/env node
const mdLinks = require("./index.js");
const path = process.argv[2]

mdLinks(path)
    .then((resolveValue) => {
        resolveValue.forEach(item => {console.log(`Title: ${item.text} URL: ${item.href}`);
        });
    })
    .catch(console.error); 
