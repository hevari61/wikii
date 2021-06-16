const fs = require("fs");

const lisaaKirja = (nimi, kirjoittaja) => {
  const kirjat = lataaKirjat();
  const onOlemassa = kirjat.find(
    (kirja) => kirja.nimi === nimi && kirja.kirjoittaja === kirjoittaja
  );
  if (!onOlemassa) {
    kirjat.push({ nimi, kirjoittaja });
    tallennaKirjat(kirjat);
    console.log("Kirja lisätty kirjastoon");
  } else {
    console.log("Kirja on jo olemassa, ei lisätty kirjastoon!");
  }
};

const tallennaKirjat = (kirjat) => {
  const kirjatJSON = JSON.stringify(kirjat);
  fs.writeFileSync("kirjat.json", kirjatJSON);
};

const lataaKirjat = () => {
  try {
    const dataBuffer = fs.readFileSync("kirjat.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const poistaKirja = (nimi, kirjoittaja) => {
  const kirjat = lataaKirjat();
  const onOlemassa = kirjat.find((kirja) => kirja.nimi === nimi && kirja.kirjoittaja === kirjoittaja);
  if (onOlemassa) {
    kirjat.splice(kirjat.indexOf(onOlemassa),1)
    tallennaKirjat(kirjat)
    console.log("Kirja poistettu kirjastosta");
  } else {
    console.log("Kirjaa ei löytynyt kirjastosta!");
  }
};

const haeKirja = (kirjoittaja) => {
  const kirjat = lataaKirjat();
  const haettuKirja = kirjat.find(
    (kirja) => kirja.kirjoittaja === kirjoittaja
  );
  if (haettuKirja) {
    console.log(`${haettuKirja.nimi}`);
  } else {
      console.log("Kirjoittajalta ei löytynyt teoksia.")
  }
};

const listaaKirjat = () => {
  const kirjat = lataaKirjat();
  kirjat.forEach((element) => {
    console.log(element.nimi + " - " + element.kirjoittaja);
  });
};

module.exports = {
  lisaaKirja: lisaaKirja,
  poistaKirja: poistaKirja,
  haeKirja: haeKirja,
  listaaKirjat: listaaKirjat,
};
