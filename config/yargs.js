const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'es la base de la taba de multiplicar'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'muestra la base en consola'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'numero para multiplicaciones a realizar'
        },
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        }
        if (isNaN(argv.h)) {
            throw 'el numero hasta tiene que ser un numero'
        }
        if (argv.h > 1000 || argv.h <= 0) {
            throw 'el numero no puede ser mayor a 1000 o menor a 0'
        }
        return true;
    })
    .argv;

module.exports = argv;