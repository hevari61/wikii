/*HARJOITUS 6. Koetiedot
Tarkista löytyykö tiedosto person.json, jos ei löydy luodaan se ja tallenna neljän henkilön koetiedot person.json -tiedostoon. Henkilöistä tallennetaan nimi, oppiaine sekä koenumero. Tee toiminnoista funktiot. Lopuksi tulosta kaikki henkilöt ja koetulokset.

Vinkkejä löydät edellisistä tehtävistä. Harj 5 wiki */

const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
// Komentirivi parametriin päästää käsiksi process-argv
const tiedosto = process.argv[2]

fs.exists('person.json', function (exists) {
    if(exists) { console.log(chalk.green('Löytyi'))}
    else {
        console.log(chalk.red('Tiedostoa ei löydy!'))
    }})

    