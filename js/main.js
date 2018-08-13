import { Boss } from "./_perso.js";
import { Guerrier, Archer, Mage } from "./_perso.js";


var sauron = new Boss("Sauron", 3500, 50);
var chronos = new Boss("Chronos", 4000, 80);
var lilith = new Boss("Lilith", 8000, 100);

var herosPvMax = 3000;
var herosPaMax = 1000;

  var guerrierNom = prompt("Choisissez le nom de votre guerrier :");
  var guerrierVie = prompt("Choisissez vos points de vie (vous en avez " + herosPvMax + " à partager pour vos 3 héros) :");
  if(guerrierVie <= herosPvMax){
    herosPvMax -= guerrierVie;
  }else{
    guerrierVie = prompt("Vous avez donné trop de points de vie ! Recommencer il vous reste " + herosPvMax + " :");
  };
  var guerrierPa = prompt("Choisissez vos points d'attaque (Vous en avez " + herosPaMax + " à partager pour vos 3 héros) :")
  if(guerrierPa <= herosPaMax){
    herosPaMax -= guerrierPa;
  }else {
    guerrierPa = prompt("Vous avez donné trop de points d'attaque ! Recommencer, il vous reste" + herosPaMax + "  :")
  }

  var archerNom = prompt("Choisissez le nom de votre archer :");
  var archerVie = prompt("Choisissez vos points de vie (vous en avez " + herosPvMax + " à partager pour vos 2 héros) :");
  if(archerVie <= herosPvMax){
    herosPvMax -= archerVie;
  }else{
    archerVie = prompt("Vous avez donné trop de points de vie ! Recommencer il vous reste " + herosPvMax + " :");
  };
  var archerPa = prompt("Choisissez vos points d'attaque (Vous en avez " + herosPaMax + " à partager pour vos 2 héros) :")
  if(archerPa <= herosPaMax){
    herosPaMax -= archerPa;
  }else {
    archerPa = prompt("Vous avez donné trop de points d'attaque ! Recommencer, il vous reste" + herosPaMax + "  :")
  };
  
  var mageNom = prompt("Choisissez le nom de votre archer :");
  var mageVie = prompt("Choisissez vos points de vie (vous en avez " + herosPvMax + " à partager pour vos 2 héros) :");
  if(mageVie <= herosPvMax){
    herosPvMax -= mageVie;
  }else{
    mageVie = prompt("Vous avez donné trop de points de vie ! Recommencer il vous reste " + herosPvMax + " :");
  };
  var magePa = prompt("Choisissez vos points d'attaque (Vous en avez " + herosPaMax + " à partager pour vos 2 héros) :")
  if(magePa <= herosPaMax){
    herosPaMax -= magePa;
  }else {
    magePa = prompt("Vous avez donné trop de points d'attaque ! Recommencer, il vous reste" + herosPaMax + "  :")
  };

var perso1 = new Guerrier (guerrierNom, guerrierVie, guerrierPa);
var perso2 = new Archer (archerNom, archerVie, archerPa);
var perso3 = new Mage (mageNom, mageVie, magePa);

console.log(perso1, perso2, perso3);