const yargs = require('yargs')
const kirjat = require('./kirjat')

yargs.command({
    command: 'lisaa',
    description: 'Lisää uusi kirja',
    builder: {
        nimi: {
            type: 'string',
            demandOpition: true,
            describe: 'Kirjan nimi'
        },
        kirjoittaja: {
            type: 'string',
            demandOpition: true,
            describe: 'Kirjan kirjoittaja'
        }
    },
    handler(argv) {
        kirjat.lisaaKirja(argv.nimi, argv.kirjoittaja)
    }
})

yargs.parse()