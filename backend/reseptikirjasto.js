const yargs = require("yargs");
const reseptit = require("./reseptit");

//yargs avykka jäsennetään esim json tiedoston tietueta ja sekä avulla voidaan ns käyttöliittymänä työstää tietokannan tietoja eri käskyillä käskyjä käyttäen kuten lisää poista jne
//määritellää käsky, builder eli rakenne joka sisältää tietueen otsikko muotoineen (string lauseena), ja kvuas. 
yargs.command({
  command: "lisaa",
  description: "Lisää resepti",
  builder: {
    nimi: {
      type: "string",
      demandOption: true,
      describe: "Reseptin nimi",
    },
    raakaaine: {
      type: "string",
      demandOption: true,
      describe: "Raaka-aineet",
    },
  },

// handler  kertoo mitä toiminnastoa haetaan kuten esim respeptistä käsitellään kun tehdään pyydettyä hommaa, tässä kummatkin tietue otsikot käsitellään lisätessä reseptiä
  handler(argv) {
    reseptit.lisaaResepti(argv.nimi, argv.raakaaine);
  },
});

// tässä taas poistetaan kun halutaan vain yksi kriteeri kuten tässä reseptin NIMI mukaan. jolloin handelrissakin minittu tuo nimi avaimena. 
yargs.command({
  command: "poista",
  description: "Poista resepti",
  builder: {
    nimi: {
      type: "string",
      demandOption: true,
      describe: "Reseptin nimi",
    },
  
  },

  handler(argv) {
    reseptit.poistaResepti(argv.nimi);
  },
});

//haku tässä kahdella eri tavalla eli erikseen raaka-aine haku ja toisenea alempana reseptin nimellä.
//lisäksi tässä toimii vaan yksi raaka-aine reseptissä ei onnistu esim jos olisi kaksi pilkulla erotettua raaka-ainetta kuten makarooni, jauheliha.
//haettaessa raaka-aineen mukaan määritetellää raaka-aine ja käytetään kuitenkin argv ssä kummatkin tieutekannan otsakkeeet, koska tarkoitus on listata resepti raaka-aine haun avulla
yargs.command({
  command: "haeraaka",
  description: "Hae resepti ran mukaan",
  builder: {
    raakaaine: {
      type: "string",
      demandOption: true,
      describe: "Raaka-aineet",
    },
  },

  handler(argv) {
    reseptit.hae2Resepti(argv.nimi, argv.raakaaine /*,argv.nimi*/);
  },
});

//tässä sama mutta haetaan reseptin nimen mukaan
yargs.command({
    command: "haenimi",
    description: "Hae resepti",
    builder: {
      nimi: {
        type: "string",
        demandOption: true,
        describe: "Resepti",
      },
    },
  
    handler(argv) {
      reseptit.haeResepti(argv.nimi, argv.raakaaine);
    },
  });


//tässä yksinkertaisesti listataan reseptin nimi ja sen sisältämät raaka-aineet
yargs.command({
  command: "listaa",
  description: "Listaa reseptit",

  handler() {
    reseptit.listaaReseptit();
  },
});

//loppuun sitten jäsentely parsen avulla
yargs.parse()