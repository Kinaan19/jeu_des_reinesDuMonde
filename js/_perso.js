var manaTab = [7,9,11];

export class Boss {
  constructor(nom, vie, attaque){
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
  }
};

export class Guerrier {
  constructor(nom, vie, attaque){
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.rage = 0;
  };
  postures(){
    var posture = prompt("Choisissez votre posture ! Attaque (taper 0), Défense (taper 1), normal (taper 2)")
    if (posture == "0"){
      this.vie = this.vie * 0.75;
      this.attaque = this.attaque * 1.4;
    }
    if (posture == "1"){
      this.vie = this.vie * 2.5;
      this.attaque = this.attaque * 0.5;
    }
    if (posture == "2"){
      this.vie = this.vie;
      this.attaque = this.attaque;
    }
    else {
      alert("Vous devez choisir 0, 1 ou 2 !")
      postures();
    }
  } 
};

export class Archer {
  constructor(nom, vie, attaque){
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.fleche = Math.floor(Math.random() * 5) + 7;
  }
  postures(){
    var posture = prompt("Choisissez votre posture ! Attaque (taper 0), Défense (taper 1), normal (taper 2)")
    if (posture == "0"){
      this.vie = this.vie * 0.75;
      this.attaque = this.attaque * 1.4;
    }
    if (posture == "1"){
      this.vie = this.vie * 2.5;
      this.attaque = this.attaque * 0.5;
    }
    if (posture == "2"){
      this.vie = this.vie;
      this.attaque = this.attaque;
    }
    else {
      alert("Vous devez choisir 0, 1 ou 2 !")
      postures();
    }
  }
};

export class Mage {
  constructor(nom, vie, attaque){
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.mana = manaTab[Math.floor(manaTab.length * Math.random())];
}
postures(){
  var posture = prompt("Choisissez votre posture ! Attaque (taper 0), Défense (taper 1), normal (taper 2)")
  if (posture == "0"){
    this.vie = this.vie * 0.75;
    this.attaque = this.attaque * 1.4;
  }
  if (posture == "1"){
    this.vie = this.vie * 2.5;
    this.attaque = this.attaque * 0.5;
  }
  if (posture == "2"){
    this.vie = this.vie;
    this.attaque = this.attaque;
  }
  else {
    alert("Vous devez choisir 0, 1 ou 2 !")
    postures();
  }
}
};

