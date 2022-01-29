
const {createFile } = require('./helpers/multiplicar')
const yargs = require('./config/yargs')
const colors = require('colors');

console.clear();
createFile(yargs.b, yargs.l, yargs.h)
        .then( (response) => console.log(response) )
        .catch( (err) => console.log(err));