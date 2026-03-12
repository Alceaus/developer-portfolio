const fs = require('fs');
const pdf = require('pdf-parse');

console.log('Type of pdf:', typeof pdf);
console.log('Keys of pdf:', Object.keys(pdf));

if (typeof pdf === 'function') {
  const dataBuffer = fs.readFileSync('public/resume.pdf');
  pdf(dataBuffer).then(function(data) {
      console.log(data.text);
  }).catch(function(error) {
      console.error("Parse error:", error);
  });
} else if (pdf && typeof pdf.default === 'function') {
  const dataBuffer = fs.readFileSync('public/resume.pdf');
  pdf.default(dataBuffer).then(function(data) {
      console.log(data.text);
  }).catch(function(error) {
      console.error("Parse error:", error);
  });
}
