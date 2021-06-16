// Tee ohjelma, joka tulostaa annetun tiedoston sisällön.

//tuodaan fs- ja chalk-kirjasto käyttöön
const fs = require('fs')
const chalk = require ('chalk')

// Komentirivi parametriin päästää käsiksi process-argv
const nimi = process.argv[2]

try {
    const dataBuffer = fs.readFileSync('nimet.txt')
    const data = dataBuffer.toString()
    if (data.includes(nimi)){
        console.log(chalk.green('Nimi löytyi!'))
    } else {
        console.log(chalk.red('Nimeä ei löytynyt!'))
    }
} catch (e) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'))
}
