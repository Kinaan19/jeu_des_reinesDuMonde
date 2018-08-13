var manaTab = [7, 9, 11];

export class Boss {
  constructor(nom, vie, attaque) {
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
  };
  attaquer(tabHeros){
    tabHeros[Math.floor(Math.random()*(tabHeros.length-1))].vie -= this.attaque
  }
};

export class Guerrier {
  constructor(nom, vie, attaque) {
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.rage = 0;
  }
  attaquer(){
    Boss.vie -= this.attaque;
    if (this.rage < 4){
      this.rage ++;
    }
    else if (this.rage = 4){
      this.attaque = this.attaque * 1.25;
    }
    else {
      this.rage = 0;
    }
  };
  postures() {
    var posture = prompt("Choisissez votre posture Gerrier ! Attaque (taper 0), Défense (taper 1), normal (taper 2)")
    if (posture == "0") {
      this.vie = this.vie * 0.75;
      this.attaque = this.attaque * 1.4;
    } else if (posture == "1") {
      this.vie = this.vie * 2.5;
      this.attaque = this.attaque * 0.5;
    } else if (posture == "2") {
      this.vie = this.vie;
      this.attaque = this.attaque;
    } else {
      alert("Vous devez choisir 0, 1 ou 2 !")
      this.postures();
    }
  }
};

export class Archer {
  constructor(nom, vie, attaque) {
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.fleche = Math.floor(Math.random() * 5) + 7;
  }
  attaquer(){
    if (this.fleche > 1){
      Boss.vie -= this.attaque;
      this.fleche = this.fleche -1;
    }
    else {
      this.fleche = this.fleche + 6;
    }
  }
  postures() {
    var posture = prompt("Choisissez votre posture pour Archer ! Attaque (taper 0), Défense (taper 1), normal (taper 2)")
    if (posture == "0") {
      this.vie = this.vie * 0.75;
      this.attaque = this.attaque * 1.4;
    } else if (posture == "1") {
      this.vie = this.vie * 2.5;
      this.attaque = this.attaque * 0.5;
    } else if (posture == "2") {
      this.vie = this.vie;
      this.attaque = this.attaque;
    } else {
      alert("Vous devez choisir 0, 1 ou 2 !")
      this.postures();
    }
  }
};

export class Mage {
  constructor(nom, vie, attaque) {
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.mana = manaTab[Math.floor(manaTab.length * Math.random())];
  }
  attaquer(){
    if (this.mana > 2){
      Boss.vie -= this.attaque;
      this.mana = this.mana - 2
    }
    else {
      this.mana = this.mana + 7;
    }
  }
  postures() {
    var posture = prompt("Choisissez votre posture pour Mage ! Attaque (taper 0), Défense (taper 1), normal (taper 2)")
    if (posture == "0") {
      this.vie = this.vie * 0.75;
      this.attaque = this.attaque * 1.4;
    } else if (posture == "1") {
      this.vie = this.vie * 2.5;
      this.attaque = this.attaque * 0.5;
    } else if (posture == "2") {
      this.vie = this.vie;
      this.attaque = this.attaque;
    } else {
      alert("Vous devez choisir 0, 1 ou 2 !")
      this.postures();
    }
  }
};