// Soldier
class Soldier {
  constructor(health, strength) {
    this.health =health;
    this.strength = strength;
  }
  attack(){
      return this.strength;
  }

  receiveDamage(damage){
      this.health -= damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health,strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  receiveDamage(damage){
      this.health -= damage;
      return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
  }
  battleCry(){
      return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObj){
      this.vikingArmy.push(vikingObj);
  }
  addSaxon(saxonObj){
      this.saxonArmy.push(saxonObj);
  }
  vikingAttack(){
    let indexSaxon = Math.floor(Math.random() * (this.saxonArmy.length - 1));
    let saxonAttacked = this.saxonArmy[ indexSaxon];
    let vikingWhoAttacks = this.vikingArmy[Math.floor(Math.random()* (this.vikingArmy.length - 1))];
    if(saxonAttacked.health <= vikingWhoAttacks.strength){
        this.saxonArmy.splice(indexSaxon,1);
    }
    return saxonAttacked.receiveDamage(vikingWhoAttacks.strength);
   
  }

  saxonAttack(){
      let indexViking = Math.floor(Math.random() * (this.vikingArmy.length -1));
      let vikingAttacked = this.vikingArmy[indexViking];
      let saxonWhoAttacks = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))];

      if(vikingAttacked.health <= saxonWhoAttacks.strength){
          this.vikingArmy.splice(indexViking,1);
      }
      return vikingAttacked.receiveDamage(saxonWhoAttacks.strength);
  }
  showStatus(){
      if(this.saxonArmy.length === 0){
          return "Vikings have won the war of the century!";
      }
      if(this.vikingArmy.length ===0){
          return "Saxons have fought for their lives and survived another day...";
      }
      if(this.vikingArmy.length === 1 && this.vikingArmy.length === this.saxonArmy.length){
          return "Vikings and Saxons are still in the thick of battle.";
      }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
