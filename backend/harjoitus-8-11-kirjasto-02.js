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

yargs.command({
    command: 'listaa',
    description: 'Listaa kirjat',
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
        kirjat.listaaKirjat(argv.nimi, argv.kirjoittaja)
    }
})

yargs.command({
    command: 'poista',
    description: 'Poista kirja',
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
        kirjat.poistaKirja(argv.nimi, argv.kirjoittaja)
    }
})

yargs.command({
    command: 'hae',
    description: 'Hae kirjoittaja',
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
        kirjat.haeKirjoittaja(argv.nimi, argv.kirjoittaja)
    }
})

yargs.parse()