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
};

export class Archer {
  constructor(nom, vie, attaque){
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.fleche = Math.floor(Math.random() * 5) + 7;
  }
};

export class Mage {
  constructor(nom, vie, attaque){
    this.nom = nom;
    this.vie = vie;
    this.attaque = attaque;
    this.mana = manaTab[Math.floor(manaTab.length * Math.random())];
}
};