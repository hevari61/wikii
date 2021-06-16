// ASENNA npm i validator

//tuodaan validator- ja chalk-kirjasto käyttöön



const validator = require('validator')

const chalk =require('chalk')



// Komentirivi parametriin päästää käsiksi process-argv

const osoite = process.argv[2]



if (validator.isEmail(osoite)) {

    console.log(chalk.green('Kelvollinen sähköpostiosoite'))

} else {

    console.log(chalk.red('Epäkelpo sähköpostiosoite'))

}