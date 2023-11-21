// Import necessary modules from Prettier
const { parsers, printers } = require('prettier');

// Import the custom parser and printer
const customParser = require('./rst-parser');
const customPrinter = require('./rst-printer.js');

// Register the custom parser and printer
parsers['custom-format'] = customParser;
printers['custom-format'] = customPrinter;
