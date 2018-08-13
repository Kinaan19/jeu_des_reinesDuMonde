import { Boss } from "./_perso.js";
import { Guerrier, Archer, Mage } from "./_perso.js";


var sauron = new Boss("Sauron", 3500, 50);
var chronos = new Boss("Chronos", 4000, 80);
var lilith = new Boss("Lilith", 8000, 100);

var herosPvMax = 3000;
var herosPaMax = 1000;

function creationPerso(){

  var guerrierNom = prompt("Choisissez le nom de votre guerrier :");
  var guerrierVie = prompt("Choisissez vos points de vie (vous en avez 3000 à partager pour vos 3 héros) :");
  if(guerrierVie <= herosPvMax){
    herosPvMax -= guerrierVie;
  }else{
    guerrierVie = prompt("Vous avez donné trop de points de vie ! Recommencer :");
  };
  var guerrierPa = prompt("Choisissez vos points d'attaque (Vous en avez 1000 à partager pour vos 3 héros) :")
  if(guerrierPa <= herosPaMax){
    herosPaMax -= guerrierPa;
  }else {
    guerrierPa = prompt("Vous avez donné trop de points d'attaque ! Recommencer :")
  }
}