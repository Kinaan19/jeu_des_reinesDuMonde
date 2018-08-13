import {
  Boss
} from "./_perso.js";
import {
  Guerrier,
  Archer,
  Mage
} from "./_perso.js";

function creationHeros() {
  guerrierNom = prompt("Choisissez le nom de votre guerrier :");
  guerrierVie = prompt("Choisissez vos points de vie (vous en avez " + herosPvMax + " à partager pour vos 3 héros) :");

  while (guerrierVie > herosPvMax) {
    guerrierVie = prompt("Vous avez donné trop de points de vie ! Recommencer il vous reste " + herosPvMax + " :");
  };
  herosPvMax -= guerrierVie;

  guerrierPa = prompt("Choisissez vos points d'attaque (Vous en avez " + herosPaMax + " à partager pour vos 3 héros) :")

  while (guerrierPa > herosPaMax) {
    guerrierPa = prompt("Vous avez donné trop de points d'attaque ! Recommencer, il vous reste" + herosPaMax + "  :")
  };
  herosPaMax -= guerrierPa;

  archerNom = prompt("Choisissez le nom de votre archer :");
  archerVie = prompt("Choisissez vos points de vie (vous en avez " + herosPvMax + " à partager pour vos 2 héros) :");
  while (archerVie > herosPvMax) {
    archerVie = prompt("Vous avez donné trop de points de vie ! Recommencer il vous reste " + herosPvMax + " :");
  }
  herosPvMax -= archerVie;


archerPa = prompt("Choisissez vos points d'attaque (Vous en avez " + herosPaMax + " à partager pour vos 2 héros) :")
while (archerPa > herosPaMax) {
  archerPa = prompt("Vous avez donné trop de points d'attaque ! Recommencer, il vous reste" + herosPaMax + "  :")
};
herosPaMax -= archerPa;

mageNom = prompt("Choisissez le nom de votre mage :");
mageVie = herosPvMax
magePa = herosPaMax
}

//__________________________________________

// function postures(){
//   postures = prompt("Choisissez votre posture ! Attaque (taper 0), Défense (taper 1), normal (taper 2)")
// } 

var sauron = new Boss("Sauron", 3500, 50);
var chronos = new Boss("Chronos", 4000, 80);
var lilith = new Boss("Lilith", 8000, 100);

var herosPvMax = 3000;
var herosPaMax = 1000;

var guerrierNom, guerrierVie, guerrierPa, archerNom, archerVie, archerPa, mageNom, mageVie, magePa;

creationHeros();
var perso1 = new Guerrier(guerrierNom, guerrierVie, guerrierPa);
var perso2 = new Archer(archerNom, archerVie, archerPa);
var perso3 = new Mage(mageNom, mageVie, magePa);

console.log(perso1, perso2, perso3);

perso1.postures();
perso2.postures();
perso3.postures();
console.log(perso1)