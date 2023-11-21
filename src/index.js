// Import necessary modules from Prettier
const { parsers, printers } = require('prettier');

// Import the custom parser and printer
const customParser = require('./rst-parser');
const customPrinter = require('./rst-printer');

// Register the custom parser and printer
parsers['rst-format'] = customParser;
printers['rst-format'] = customPrinter;
