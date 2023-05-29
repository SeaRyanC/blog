const rimraf = require("rimraf");
const path = require("path");
const fs = require("fs");
const docs = path.join(__dirname, "docs");

rimraf.rimrafSync(docs);
fs.mkdirSync(docs);
fs.writeFileSync(path.join(docs, "CNAME"), "");
