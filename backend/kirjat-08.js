const fs = require('fs')

const lisaaKirja = function (nimi, kirjoittaja) {
    const kirjat = lataaKirjat()
    const onOlemassa = kirjat.find(kirja => kirja.nimi === nimi && kirja.kirjoittaja === kirjoittaja)

    if (!onOlemassa) {
        kirjat.push({
            nimi: nimi,
            kirjoittaja: kirjoittaja
        })
        tallennaKirjat(kirjat)
        console.log('Kirja lisätty kirjastoon.')
    } else {
        console.log('Kirja on jo olemassa, ei lisätty kirjastoon.')
    }
}

const tallennaKirjat = function (kirjat) {
    const kirjatJSON = JSON.stringify(kirjat)
    fs.writeFileSync('kirjat.json', kirjatJSON)
}

const lataaKirjat = function () {
    try {
        const dataBuffer = fs.readFileSync('kirjat.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    lisaaKirja: lisaaKirja
}