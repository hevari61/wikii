const fs =require('fs')
try {
    // luetaan json-tiedosto
    const dataBuffer = fs.readFileSync('henkilot.json')
    // muutetaan buffer stringiksi
    const dataJSON = dataBuffer.toString()
    // muutetaan json-muodosta JavaScriptiin objektiksi
    const henkilo = JSON.parse(dataJSON)
    // huomaa, että tiedostossa on taulukko!!!
  henkilo.nimi = 'Kalle'
  henkilo.ika = 20
  const henkiloJSON = JSON.stringify(henkilo)
  fs.writeFileSync('henkilot.json', henkiloJSON)
} catch (e) {
    console.log('Tiedostoa ei löytynyt')
}
