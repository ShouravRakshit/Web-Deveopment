/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from 'inquirer';
import qr from "qr-image";

const questions = [
    {
        type: 'input',
        name: 'given-name',
        message: 'Enter your given name: '
    },
]

// inquirer
inquirer.prompt(questions)
    .then(answers => {
      console.log(answers);
    })




var qr_svg = qr.image('I love QR!', { type: 'png' });
qr_svg.pipe(require('fs').createWriteStream('qr-img.png'));
    
