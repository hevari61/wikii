const fs = require("fs");

// onOlemassa tarkistaa reseptin olemassa olon !onOlemassa että jos ei olemassa niin lisää reseptin ja sen raakaaineen.
//push avulla reseptille nimi ja raakaaine. Jos resepti olemassa, niin ei anna tallettaa/luoda repeptiä

const lisaaResepti = (nimi, raakaaine) => {
  const reseptit = lataaReseptit();
  const onOlemassa = reseptit.find(
    (resepti) => resepti.nimi === nimi && resepti.raakaaine === raakaaine
  );
  if (!onOlemassa) {
    reseptit.push({ nimi, raakaaine });
    tallennaReseptit(reseptit);
    console.log("Resepti lisätty reseptikirjastoon");
  } else {
    console.log("Resepti on jo olemassa, ei lisätty reseptikirjastoon!");
  }
};


// em tallettaa/kirjoitta (write) reseptit.json tietokantaan  fs eli filesystem avulla 
const tallennaReseptit = (reseptit) => {
  const reseptitJSON = JSON.stringify(reseptit);
  fs.writeFileSync("reseptit.json", reseptitJSON);
};

//tämä lukee tietokannasta siellä olevat reseptit huomioiden kirjastossa määritellyt stringit ja muodot ja kuvaukset myös (e) toimii virheen ilmetessä
const lataaReseptit = () => {
  try {
    const dataBuffer = fs.readFileSync("reseptit.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

//poistaessa reseptiä ladataan reseptit ja niistä findillä etsitään olemassa oleva resepti joka halutaan poistaa. 
const poistaReseptit = (nimi, raakaaine) => {
  const reseptit = lataaReseptit();
  const onOlemassa = reseptit.find((resepti) => resepti.nimi === nimi );
  if (onOlemassa) {
    reseptit.splice(reseptit.indexOf(onOlemassa),1)
    tallennaReseptit(reseptit)
    console.log("Resepti poistettu reseptikirjastosta");
  } else {
    console.log("Reseptiä ei löytynyt reseptikirjastosta!");
  }
};

//haetaan reseptiä nimellä ja raaka-aineella. ensin haenimi hakee ressun nimellä ja alempana haeraaka raaka-aineen mukaan
//tulostaa kummassakin reseptin nimen ja mistä raaka-aineista koostuu
const haeResepti = (nimi,raakaaine) => {
  const reseptit = lataaReseptit();
  const haettuResepti = reseptit.find(
    (resepti) => resepti.nimi === nimi || resepti.raakaaine === raakaaine
  );
  if (haettuResepti) {
    console.log('Resepti: ' + `${haettuResepti.nimi}` + ', jossa raakaineina: ' + `${haettuResepti.raakaaine}`);
  } else {
      console.log("Reseptiä ei löytynyt reseptikirjastosta.")
  }
};

//haetaan reseptiä nimellä ja raaka-aineella. ylempänä haenimi hakee ressun nimellä ja tässä alempana haeraaka raaka-aineen mukaan
//tulostaa kummassakin reseptin nimen ja mistä raaka-aineista koostuu
const hae2Resepti = (nimi,raakaaine) => {
  const reseptit = lataaReseptit();
  const haettuResepti2 = reseptit.find(
    (resepti) => resepti.nimi === nimi || resepti.raakaaine === raakaaine
  );
  if (haettuResepti2) {
    console.log('Resepti: ' + `${haettuResepti2.nimi}` + ', jossa raakaineina: ' + `${haettuResepti2.raakaaine}`);
  } else {
      console.log("Reseptiä ei löytynyt reseptikirjastosta.")
  }
};

//listataan respetit forEach elementin avulla, ldataan ensin muistiin ja tulosteaan nimi eli respeti ja raakaine eli raakaaina.
const listaaReseptit = () => {
  const reseptit = lataaReseptit();
  reseptit.forEach((element) => {
    console.log(element.nimi + " - " + element.raakaaine);
  });
};


module.exports = {
  lisaaResepti: lisaaResepti,
  poistaResepti: poistaReseptit,
  haeResepti: haeResepti,
  listaaReseptit: listaaReseptit,
  hae2Resepti: hae2Resepti,
//  haeRaakaaine: haeRaakaaine,
};
