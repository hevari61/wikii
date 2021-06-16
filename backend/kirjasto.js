const yargs = require("yargs");
const kirjat = require("./kirjat");

yargs.command({
  command: "lisaa",
  description: "Lisää uusi kirja",
  builder: {
    nimi: {
      type: "string",
      demandOption: true,
      describe: "Kirjan nimi",
    },
    kirjoittaja: {
      type: "string",
      demandOption: true,
      describe: "Kirjan kirjoittajat",
    },
  },

  handler(argv) {
    kirjat.lisaaKirja(argv.nimi, argv.kirjoittaja);
  },
});

yargs.command({
  command: "poista",
  description: "Poista kirja",
  builder: {
    nimi: {
      type: "string",
      demandOption: true,
      describe: "Kirjan nimi",
    },
    kirjoittaja: {
      type: "string",
      demandOption: true,
      describe: "Kirjan kirjoittajat",
    },
  },

  handler(argv) {
    kirjat.poistaKirja(argv.nimi, argv.kirjoittaja);
  },
});

yargs.command({
  command: "hae",
  description: "Hae kirja",
  builder: {
    kirjoittaja: {
      type: "string",
      demandOption: true,
      describe: "Kirjan kirjoittaja",
    },
  },

  handler(argv) {
    kirjat.haeKirja(argv.kirjoittaja);
  },
});

yargs.command({
  command: "listaa",
  description: "Listaa kirjat",

  handler() {
    kirjat.listaaKirjat();
  },
});

yargs.parse()