/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
// gameObjectCode
// function GameObject(attributes){
//   this.createdAt = attributes.createdAt;
//   this.name = attributes.name;
//   this.dimensions = attributes.dimensions;
//   }
  
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game.`;
//   }
//   GameObject.prototype.destroy = function(){
//     return `${this.name} was removed from the game.`;
//   }

// GameStats code
function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function takeDamage () {
  return `${this.name} took damage.`;
}

// humanoid code
function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  return `${this.name} offers a greeting in ${this.language}.`;
}

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
