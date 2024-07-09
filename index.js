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
    ]);

const generateSVG = ({ text, textColor, shape, shapeColor}) => {
    const svgStart = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    const svgEnd = `</svg>`;
    let shapeElement;
};