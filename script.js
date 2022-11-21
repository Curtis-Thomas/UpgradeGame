"use-strict";

//gamespeed
let gameSpeed = 3000;
//player stats
let defence = 1;
let defenceXp = 0;
let strength = 1;
let strengthXp = 0;
let health = 10;
let healthXp = 0;
let healthLevel = 10;
let playerDamage = 1;

//player gold
let gold = 0;
//loot
let bones = 0;
let treasure = 0;

//player equipment
let weapon = 0;
let armor = 0;

//enemydetails placeholdler
let enemyName = "enemy";
let enemyMaxHealth = "0";
let enemyHealthNumber = "0";
let enemyDamage = "0";

//damage modifiers

//updates UI values with variables
const updateUI = () => {
  //Updates players CURRENT health
  document.querySelector(".healthNumber").textContent = health;
  //Update later - players health in %
  // document.querySelector(".playerHealthPercent").style = #;
  //updates player damage
  playerDamage = strength + weapon;
  document.querySelector(".playerDamage").textContent = playerDamage;
  //updates player damage

  //updates player gold
  document.querySelector(".gold").textContent = gold;
  document.querySelector(".bones").textContent = bones;

  //updates defence level
  document.querySelector(".defenceLevel").textContent = defence;
  //updates strength level
  document.querySelector(".strengthLevel").textContent = strength;
  //updates health level
  document.querySelector(".healthLevel").textContent = healthLevel;
  //updates weapon damage
  document.querySelector(".weapon").textContent = weapon;
  //updates armour amount
  document.querySelector(".armor").textContent = armor;
  //updates player damage

  //updates XP
  document.querySelector(".defenceXp").textContent = defenceXp;
  document.querySelector(".strengthXp").textContent = strengthXp;
  document.querySelector(".healthXp").textContent = healthXp;

  //updates enemy stats
  document.querySelector(".enemyName").textContent = enemyName;
  document.querySelector(".enemyHealthNumber").textContent = enemyHealthNumber;
  document.querySelector(".enemyDamage").textContent = enemyDamage;
};

updateUI();
//enemy update
//updates enemy name

//Enemies

//chicken

const chickenName = "Chicken";
const chickenMaxHealth = 10;
let chickenHealth = 10;
let chickenDamage = 1;

//chicken loot
const chickenLoot = ["gold", "bones"];

//select chicken button

document.querySelector(".enemyChicken").addEventListener("click", function () {
  //sets enemy stats
  enemyName = chickenName;
  enemyHealthNumber = chickenHealth;
  enemyDamage = chickenDamage;
  enemyMaxHealth = chickenMaxHealth;
  lootTable = chickenLoot;

  //updates enemy stats UI

  updateUI();
});

//Bear

//bear loot
const bearLoot = ["gold", "bones", "bearFur"];

const bearName = "Bear";
const bearMaxHealth = 50;
let bearHealth = 50;
let bearDamage = 5;

//select bear button

document.querySelector(".enemyBear").addEventListener("click", function () {
  //sets enemy stats
  enemyName = bearName;
  enemyHealthNumber = bearHealth;
  enemyDamage = bearDamage;
  enemyMaxHealth = bearMaxHealth;
  lootTable = bearLoot;

  //updates enemy stats UI

  updateUI();
});

//Barbarian

//bear loot
const barbarianLoot = ["gold", "bones", "treasure"];

const barbarianName = "Barbarian";
const barbarianMaxHealth = 100;
let barbarianHealth = 100;
let barbarianDamage = 10;
//select Barbarian button

document
  .querySelector(".enemyBarbarian")
  .addEventListener("click", function () {
    //sets enemy stats
    enemyName = barbarianName;
    enemyHealthNumber = barbarianHealth;
    enemyDamage = barbarianDamage;
    enemyMaxHealth = barbarianMaxHealth;
    lootTable = barbarianLoot;

    //updates enemy stats UI

    updateUI();
  });

//attack function
attack = function () {
  enemyHealthNumber -= playerDamage;
  health -= enemyDamage;
  if (health < 0) {
    health = 0;
  }
  if (enemyHealthNumber < 0) {
    enemyHealthNumber = 0;
  }
};

//fight loop
document.querySelector(".fight").addEventListener("click", function () {
  //hide fight button
  document.querySelector(".fight").style.visibility = "hidden";
  setInterval(function (fightLoop) {
    if (health > 0 && enemyHealthNumber > 0) {
      attack();
      defenceXp += 4;
      strengthXp += 4;
      healthXp += 4;

      updateUI();
      document.querySelector(".lootDropBox").style.visibility = "hidden";
      console.log(health);
      console.log(enemyHealthNumber);
    } else if (health > 0 && enemyHealthNumber <= 0) {
      enemyHealthNumber = enemyMaxHealth;

      //roll for random item from enemy loot table

      function getRandomItem(arr) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * arr.length);

        // get random item
        const item = arr[randomIndex];

        return item;
      }
      let lootTable = chickenLoot;
      const loot = getRandomItem(lootTable);
      console.log(loot);
      //adds loot drop to player
      if (loot === "gold") {
        gold += 1;
      } else if (loot === "bones") {
        bones += 1;
      } else if (loot === "treasure") {
        treasure += 1;
      }
      document.querySelector(".lootDropBox").textContent = loot;

      document.querySelector(".lootDropBox").style.visibility = "visible";

      updateUI;
    } else if (health <= 0) {
      document.querySelector(".revive").style.visibility = "visible";
    }
  }, gameSpeed);
});
//revive button

document.querySelector(".revive").addEventListener("click", function () {
  document.querySelector(".revive").style.visibility = "hidden";
  health = healthLevel;
  updateUI;
});

//level strengthXp chart

setInterval(function updatexp() {
  if (strengthXp > 83 && strengthXp < 174) {
    strength = 2;
    document.querySelector(".strengthLevel").textContent = strength;
  } else if (strengthXp > 174 && strengthXp < 276) {
    strength = 3;
    document.querySelector(".strengthLevel").textContent = strength;
  } else if (strengthXp > 276 && strengthXp < 388) {
    strength = 4;
    document.querySelector(".strengthLevel").textContent = strength;
  } else if (strengthXp > 388 && strengthXp < 512) {
    strength = 5;
    document.querySelector(".strengthLevel").textContent = strength;
  } else if (strengthXp > 512 && strengthXp < 650) {
    strength = 6;
    document.querySelector(".strengthLevel").textContent = strength;
  } else if (strengthXp > 650 && strengthXp < 801) {
    strength = 7;
    document.querySelector(".strengthLevel").textContent = strength;
  } else if (strengthXp > 801 && strengthXp < 969) {
    strength = 8;
    document.querySelector(".strengthLevel").textContent = strength;
  } else if (strengthXp > 969 && strengthXp < 1154) {
    strength = 9;
    document.querySelector(".strengthLevel").textContent = strength;
  } else if (strengthXp > 1154 && strengthXp < 1358) {
    strength = 10;
    document.querySelector(".strengthLevel").textContent = strength;
  }
}, 1000);

//defence leveling
setInterval(function updatexp() {
  if (defenceXp > 83 && defenceXp < 174) {
    defence = 2;
    document.querySelector(".defenceLevel").textContent = defence;
  } else if (defenceXp > 174 && defenceXp < 276) {
    defence = 3;
    document.querySelector(".defenceLevel").textContent = defence;
  } else if (defenceXp > 276 && defenceXp < 388) {
    defence = 4;
    document.querySelector(".defenceLevel").textContent = defence;
  } else if (defenceXp > 388 && defenceXp < 512) {
    defence = 5;
    document.querySelector(".defenceLevel").textContent = defence;
  } else if (defenceXp > 512 && defenceXp < 650) {
    defence = 6;
    document.querySelector(".defenceLevel").textContent = defence;
  } else if (defenceXp > 650 && defenceXp < 801) {
    defence = 7;
    document.querySelector(".defenceLevel").textContent = defence;
  } else if (defenceXp > 801 && defenceXp < 969) {
    defence = 8;
    document.querySelector(".defenceLevel").textContent = defence;
  } else if (defenceXp > 969 && defenceXp < 1154) {
    defence = 9;
    document.querySelector(".defenceLevel").textContent = defence;
  } else if (defenceXp > 1154 && defenceXp < 1358) {
    defence = 10;
    document.querySelector(".defenceLevel").textContent = defence;
  }
}, 1000);

//health leveling

setInterval(function updatexp() {
  if (healthXp > 83 && healthXp < 174) {
    healthLevel = 2;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 174 && healthXp < 276) {
    healthLevel = 3;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 276 && healthXp < 388) {
    healthLevel = 4;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 388 && healthXp < 512) {
    healthLevel = 5;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 512 && healthXp < 650) {
    healthLevel = 6;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 650 && healthXp < 801) {
    healthLevel = 7;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 801 && healthXp < 969) {
    healthLevel = 8;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 969 && healthXp < 1154) {
    healthLevel = 9;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 1154 && healthXp < 1358) {
    healthLevel = 10;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 1358 && healthXp < 1584) {
    healthLevel = 11;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 1584 && healthXp < 1833) {
    healthLevel = 12;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 1833 && healthXp < 2107) {
    healthLevel = 13;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 2107 && healthXp < 2411) {
    healthLevel = 14;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 2411 && healthXp < 2746) {
    healthLevel = 15;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 2746 && healthXp < 3115) {
    healthLevel = 16;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 3115 && healthXp < 3523) {
    healthLevel = 17;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 3523 && healthXp < 3973) {
    healthLevel = 18;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 3973 && healthXp < 4470) {
    healthLevel = 19;
    document.querySelector(".healthLevel").textContent = healthLevel;
  } else if (healthXp > 4470 && healthXp < 5018) {
    healthLevel = 20;
    document.querySelector(".healthLevel").textContent = healthLevel;
  }
}, 1000);
