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

const poistaKirja = function (nimi, kirjoittaja) {
    const kirjat = lataaKirjat()
    const onOlemassa = kirjat.find(kirja => kirja.nimi === nimi && kirja.kirjoittaja === kirjoittaja)

    if (onOlemassa) {
        kirjat.splice({
            nimi: nimi,
            kirjoittaja: kirjoittaja
        })1
        tallennaKirjat(kirjat)
        console.log('Kirja poistettu kirjastosta.')
    } else {
        console.log('Kirja ei olemassa olemassa, ei poistettu kirjastosta.')
    }
}

const haeKirjoittaja = function (kirjoittaja) {
    const kirjat = lataaKirjat()
    const onOlemassa = kirjat.find(kirja => kirja.nimi === nimi && kirja.kirjoittaja === kirjoittaja)

    if (onOlemassa) {
        kirjat.find({
            nimi: nimi,
            kirjoittaja: kirjoittaja
        })
        naytaKirjoittaja(kirjat)
        console.log('Kirjailija: ' + kirjoittaja + ', kirja: ' + nimi)
    } else {
        console.log('Kirjoittajaa ei löydy')
    }
}

const listaaKirjat = function (nimi) {
    const kirjat = lataaKirjat()
    const onOlemassa = kirjat.find(kirja => kirja.nimi === nimi && kirja.kirjoittaja === kirjoittaja)

    

    if (onOlemassa) {
        kirjat.find({
            nimi: nimi,
            kirjoittaja: kirjoittaja
        })
        naytäKirjoittaja(kirjat)
        console.log('Kirjailija: ' + kirjoittaja + ', kirja: ' + nimi)
    } else {
        console.log('Kirjoittajaa ei löydy')
    }
}
// kuuluuko tämä tähän vai ylemmemäksi kohtaan lisää kirjat alla

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
    lisaaKirja: lisaaKirja,
    poistaKirja: poistaKirja,
    listaaKirjat: listaaKirjat,
    haeKirjoittaja: haeKirjoittaja
}