const fs = require('fs')
const chalk = require('chalk');

const lisaaKirja = function (nimi, kirjoittaja) {
  console.log(chalk.green("Kirja " + nimi + "lisätty kirjastoon."));
};

module.exports = {
  lisaaKirja: lisaaKirja,
};
