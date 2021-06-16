/*HARJOITUS 6. Koetiedot
Tarkista löytyykö tiedosto person.json, jos ei löydy luodaan se ja tallenna neljän henkilön koetiedot person.json -tiedostoon. Henkilöistä tallennetaan nimi, oppiaine sekä koenumero. Tee toiminnoista funktiot. Lopuksi tulosta kaikki henkilöt ja koetulokset.

Vinkkejä löydät edellisistä tehtävistä. Harj 5 wiki */

const fs = require('fs')
const chalk = require('chalk')
const path = require('path')
// Komentirivi parametriin päästää käsiksi process-argv
const tiedosto = process.argv[2]

fs.exists('person.json', function (exists) {
    if (exists) { console.log(chalk.green('Löytyi')) }
    else {
        console.log(chalk.red('Tiedostoa ei löydy!'))
    }
})

fs.exists('person.json', function (exists) {
    if (exists) { console.log(chalk.green('Jatketaan')) }
    else {
        console.log(chalk.red('Tiedostoa ei löydy! - Jatketaan'))
    }
})

//luo tiedosto person.jason
fs.open('person.jason', 'w', function (err) {
    if (err) throw err;
    console.log(chalk.yellow('Talletettu!'));
});
//luodaan tiedot
const henkilo1 = {
    nimi: "Kalle",
    oppiaine: "matematiikka",
    koenumero: 8
}
const henkilo2 = {
    nimi: "Matias",
    oppiaine: "matematiikka",
    koenumero: 6
}
const henkilo3 = {
    nimi: "Maija",
    oppiaine: "kemia",
    koenumero: 6
}
const henkilo4 = {
    nimi: "Riitta",
    oppiaine: "filosofia",
    koenumero: 9
}
const henkilot = [henkilo1, henkilo2, henkilo3, henkilo4]
  // muutetaan json-muodosta JavaScriptiin objektiksi
const henkiloJSON = JSON.stringify(henkilot)
fs.writeFileSync('person.json', henkiloJSON)


