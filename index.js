const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter a logo name up to three characters long:',
            validate: input => input.length <= 3 || 'You can only enter logo names up to three characters long'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color with either the color name or hexidecimal code:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose your desired shape:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color with either the color name or hexidecimal code:',
        }
    ])
    .then(answers => {
        const svgContent = generateSVG(answers);
        fs.writeFile('logo.svg', svgContent, err => {
            if (err) {
                console.error('Error writing your file:', err);
            } else {
                console.log('Successfully generated logo.svg!');
            }
        }); 
    });

const generateSVG = ({ text, textColor, shape, shapeColor }) => {
    const svgStart = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    const svgEnd = `</svg>`;
    let shapeElement;

    switch (shape.toLowerCase()) {
        case 'circle':
            shapeElement = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeElement = `<polygon points="150,20 230,180 70,180" fill="${shapeColor}" />`;
            break;
        case 'square':
            shapeElement = `<rect x="75" y="50" width="150" height="150" fill="${shapeColor}" />`;
            break;
    }
    const textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;

    return `${svgStart}${shapeElement}${textElement}${svgEnd}`;
};