import fs from 'fs';
import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync('public/lighthouse.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => {
    console.error("Error parsing PDF:", err);
});
