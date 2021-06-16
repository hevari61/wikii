const fs = require('fs')
const chalk = require ('chalk')
const tiedosto = process.argv[2]
const content = 'Heippa jotain lisää'


/*
fs.readFile('/Users/joe/test.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
  */
  fs.writeFile('uusitiedosto.txt', content , function (err) {
    if (err) throw err;
    console.log('Talletettu');
})

try {
    const dataBuffer = fs.readFileSync(tiedosto)
    const data = dataBuffer.toString()
    console.log(data)
} catch (e) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'))
} 

