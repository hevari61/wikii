const fs =require('fs')
const henkilo1 = {
    nimi: "Kalle",
    ika: 30,
    asuinpaikka: "Joensuu"
}
const henkilo2 = {
    nimi: "Matias",
    ika: 105,
    asuinpaikka: "Honolulu"
}
const henkilo3 = {
    nimi: "Maija",
    ika: 42,
    asuinpaikka: "Kuusamo"
}
const henkilot = [henkilo1, henkilo2, henkilo3]
  // muutetaan json-muodosta JavaScriptiin objektiksi
const henkiloJSON = JSON.stringify(henkilot)
fs.writeFileSync('henkilot.json', henkiloJSON)
