const pdf = require('pdf-parse');
const fs = require('fs');
const buf = fs.readFileSync('public/resume.pdf');
pdf(buf).then(d => {
  console.log(d.text);
}).catch(e => console.error(e));

