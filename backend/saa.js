// npm i postman-request
const request = require('postman-request')

//api  key kirj weatherstack
// 
const avain = 'a33f65d47972bfd73895a129458a9b0a'
const paikka = process.argv[2]

const url = 'http://api.weatherstack.com/current?access_key=' + avain + '&query=' + paikka
request({url: url, json: true}, (error, response, body) => {
    if (error) {
        console.log('Ei yhteyttä sääpalveluun')
    } else if (body.error) {
        console.log('Ei hakutuloksia.')
    } else {
        console.log('Ulkona on ' + body.current.temperature + ' astetta lämminta, tuntuu kuin ' + body.current.feelslike + ' asteteelta.')
    }
})
