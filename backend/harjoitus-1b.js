const fs = require('fs');

//luo tiedosto uusitiedosto.txt:
fs.writeFile('uusitiedosto.txt', 'Moikka Muailima!', function (err) {
    if (err) throw err;
    console.log('Talletettu!');
});

