const fs =require('fs')
try {
    // luetaan json-tiedosto
    const dataBuffer = fs.readFileSync('nimet.json')
    // muutetaan buffer stringiksi
    const dataJSON = dataBuffer.toString()
    // muutetaan json-muodosta JavaScriptiin objektiksi
    const henkilot = JSON.parse(dataJSON)
    // huomaa, että tiedostossa on taulukko!!!
    henkilot.forEach(function(henkilot) {
        console.log(henkilot.nimi + ', ' + henkilot.ika)
    })
} catch (e) {
    console.log('Tiedostoa ei löytynyt')
}
