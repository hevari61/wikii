// Tee ohjelma, joka tulostaa annetun tiedoston sisällön.
//tuodaan fs- ja chalk-kirjasto käyttöön
const fs = require('fs')
const chalk = require('chalk')
// Komentirivi parametriin päästää käsiksi process-argv






const tiedosto = process.argv[2]

try {
    const dataBuffer = fs.readFileSync(tiedosto)
    const data = dataBuffer.toString()
    console.log(data)
} catch (e) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'))
}

