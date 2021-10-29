const fs = require('fs');
const fileName = "./questions.json";
const file = require("./questions.json");


export async function updateFile(data){
     // file=await data  
     // fore react js
     const fileData = JSON.stringify(data);
     const blob = new Blob([fileData], {type: "text/plain"});
     const url = URL.createObjectURL(blob);
     const link = document.createElement('a');
     link.download = 'questions.json';
     link.href = url;
     link.click();
     // for node jss
// await fs.writeFileSync('./questions.json', JSON.stringify(data))
//     await fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
//         if (err) return console.log(err);
//         console.log(JSON.stringify(file));
//         console.log('writing to ' + fileName);
//      });
}
