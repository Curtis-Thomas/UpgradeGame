"use-strict";

//Strength
let strength = 1;
document.querySelector(".strength").textContent = strength;
//strength xp
let xp = 1;
document.querySelector(".xp").textContent = xp;
//main weapon damage
let damage = 1;
document.querySelector(".damage").textContent = damage;
//armour and jewlery bonuses
let bonus = 1;

let myHealth = 10;
let healthLevel = 10;
let healthXp = 1350;
let armor = 1;
let defence = 1;
let defenceXp = 1;
let myAttack = strength * 2.5 + damage + bonus;
console.log(myAttack);
let gold = 0;
let enemyHealth = 1;
let enemyAttack = 0;
let enemyNo = 1;

let cmbLvl = healthLevel + defence + strength / 3;

//game loop
if (myHealth >= 0) {
  setInterval(function updateMyGame() {
    document.querySelector(".cmbLvl").textContent = cmbLvl;
    if (myHealth < 0) {
      myHealth = -1;
    }

    if (myHealth >= 0) {
      document.querySelector(".healthXp").textContent = healthXp;
      xp += myAttack;
      document.querySelector(".xp").textContent = xp;
      healthXp += enemyNo;
      document.querySelector(".healthXp").textContent = healthXp;
      defenceXp += 4;
      document.querySelector(".defenceXp").textContent = defenceXp;

      document.querySelector(".revive").style.visibility = "hidden";
      document.querySelector(".healthNumber").textContent = myHealth;
      document.querySelector(".healthBar").style.width = myHealth + "%";
      const enemyName = (document.querySelector(".enemyName").textContent =
        enemyList[enemyNo]);

      if (enemyHealth > 0) {
        document.querySelector(".enemyHealthNumber").textContent = enemyHealth;
        document.querySelector(".enemyHealthBar").style.width =
          enemyHealth + "%";
      } else {
        document.querySelector(".enemyNo").textContent = enemyNo++;
        enemyHealth = enemyNo;
        enemyAttack = enemyNo / (defence + armor);
        gold = gold + enemyNo;
        document.querySelector(".gold").textContent = gold;
      }
    } else {
      document.querySelector(".revive").style.visibility = "visible";
      if (enemyNo > 5) {
        document.querySelector(".revive5").style.visibility = "visible";
      }
      if (enemyNo > 10) {
        document.querySelector(".revive10").style.visibility = "visible";
      }
    }
    console.log(enemyAttack);
  }, 1000);
}

//next enemy button

//Start Fight Button
document.querySelector(".fight").addEventListener("click", function () {
  setInterval(function enemyAttacks() {
    enemyHealth -= myAttack;
  }, 3000);
  document.querySelector(".enemyHealthNumber").textContent = enemyHealth;
  document.querySelector(".fight").style.visibility = "hidden";
  setInterval(function enemyAttacks() {
    myHealth -= enemyAttack;
  }, 3000);
});

//revive button

document.querySelector(".revive").addEventListener("click", function () {
  myHealth = healthLevel;
  enemyNo = 0;
  document.querySelector(".enemyNo").textContent = enemyNo;
  document.querySelector(".gold").textContent = gold;
});
document.querySelector(".revive5").addEventListener("click", function () {
  myHealth = healthLevel;
  enemyNo = 5;
  document.querySelector(".enemyNo").textContent = enemyNo;
  document.querySelector(".gold").textContent = gold;
  document.querySelector(".revive5").style.visibility = "hidden";
});
document.querySelector(".revive10").addEventListener("click", function () {
  myHealth = healthLevel;
  enemyNo = 10;
  document.querySelector(".enemyNo").textContent = enemyNo;
  document.querySelector(".gold").textContent = gold;
  document.querySelector(".revive10").style.visibility = "hidden";
});

//shop

document
  .querySelector(".shopBronzeDagger")
  .addEventListener("click", function () {
    if (gold >= 100) {
      gold -= 100;
      damage = 48;
      document.querySelector(".gold").textContent = gold;
      document.querySelector(".damage").textContent = damage;
      document.querySelector(".shopBronzeDagger").style.visibility = "hidden";
    }
  });

document
  .querySelector(".shopIronDagger")
  .addEventListener("click", function () {
    if (gold >= 100) {
      gold -= 1000;
      damage = 96;
      document.querySelector(".gold").textContent = gold;
      document.querySelector(".damage").textContent = damage;
      document.querySelector(".shopIronDagger").style.visibility = "hidden";
    }
  });

document
  .querySelector(".shopSteelDagger")
  .addEventListener("click", function () {
    if (gold >= 5000) {
      gold -= 100;
      damage = 192;
      document.querySelector(".gold").textContent = gold;
      document.querySelector(".damage").textContent = damage;
      document.querySelector(".shopSteelDagger").style.visibility = "hidden";
    }
  });

document
  .querySelector(".shopBronzeArmor")
  .addEventListener("click", function () {
    if (gold >= 100) {
      gold -= 100;
      armor = 32;
      document.querySelector(".gold").textContent = gold;
      document.querySelector(".armor").textContent = armor;
      document.querySelector(".shopBronzeArmor").style.visibility = "hidden";
    }
  });

document.querySelector(".shopIronArmor").addEventListener("click", function () {
  if (gold >= 100) {
    gold -= 1000;
    armor = 71;
    document.querySelector(".gold").textContent = gold;
    document.querySelector(".armor").textContent = armor;
    document.querySelector(".shopIronArmor").style.visibility = "hidden";
  }
});

document
  .querySelector(".shopSteelArmor")
  .addEventListener("click", function () {
    if (gold >= 5000) {
      gold -= 100;
      armor = 192;
      document.querySelector(".gold").textContent = gold;
      document.querySelector(".armor").textContent = armor;
      document.querySelector(".shopSteelArmor").style.visibility = "hidden";
    }
  });

document.querySelector(".abyssalLeach").addEventListener("click", function () {
  if (gold >= 10000) {
    gold -= 10000;
    document.querySelector(".gold").textContent = gold;
    document.querySelector(".shopBronzeDagger").style.visibility = "hidden";
    setInterval(function updatexp() {
      myHealth = myHealth + myAttack * 0.1;
    });
  }
});

//enemy list
const enemyList = [
  "rat",
  "chicken",
  "Gnome Child",
  "Imp",
  "FireBird",
  "Goblin",
  "Giant Spider",
  "Man",
  "Mugger",
  "DarkWizard",
  "Goblin",
  "HighwayMan",
  "Monk",
  "Farmer",
  "Barbarian",
  "Slave",
  "Wizard",
  "Dwarf",
  "Thug",
  "Skeleton",
  "Zombie",
  "Cult Member",
  "Rogue",
  "Scorpion",
  "Skeleton Mage",
  "Thief",
  "Unicorn",
  "dungeon Spider",
  "Bear",
];

//enemy loot

//strength leveling system
setInterval(function updatexp() {
  if (xp > 83 && xp < 174) {
    strength = 2;
    document.querySelector(".strength").textContent = strength;
  } else if (xp > 174 && xp < 276) {
    strength = 3;
    document.querySelector(".strength").textContent = strength;
  } else if (xp > 276 && xp < 388) {
    strength = 4;
    document.querySelector(".strength").textContent = strength;
  } else if (xp > 388 && xp < 512) {
    strength = 5;
    document.querySelector(".strength").textContent = strength;
  } else if (xp > 512 && xp < 650) {
    strength = 6;
    document.querySelector(".strength").textContent = strength;
  } else if (xp > 650 && xp < 801) {
    strength = 7;
    document.querySelector(".strength").textContent = strength;
  } else if (xp > 801 && xp < 969) {
    strength = 8;
    document.querySelector(".strength").textContent = strength;
  } else if (xp > 969 && xp < 1154) {
    strength = 9;
    document.querySelector(".strength").textContent = strength;
  } else if (xp > 1154 && xp < 1358) {
    strength = 10;
    document.querySelector(".strength").textContent = strength;
  }
}, 1000);

//defence leveling
setInterval(function updatexp() {
  if (defenceXp > 83 && defenceXp < 174) {
    defence = 2;
    document.querySelector(".defence").textContent = defence;
  } else if (defenceXp > 174 && defenceXp < 276) {
    defence = 3;
    document.querySelector(".defence").textContent = defence;
  } else if (defenceXp > 276 && defenceXp < 388) {
    defence = 4;
    document.querySelector(".defence").textContent = defence;
  } else if (defenceXp > 388 && defenceXp < 512) {
    defence = 5;
    document.querySelector(".defence").textContent = defence;
  } else if (defenceXp > 512 && defenceXp < 650) {
    defence = 6;
    document.querySelector(".defence").textContent = defence;
  } else if (defenceXp > 650 && defenceXp < 801) {
    defence = 7;
    document.querySelector(".defence").textContent = defence;
  } else if (defenceXp > 801 && defenceXp < 969) {
    defence = 8;
    document.querySelector(".defence").textContent = defence;
  } else if (defenceXp > 969 && defenceXp < 1154) {
    defence = 9;
    document.querySelector(".defence").textContent = defence;
  } else if (defenceXp > 1154 && defenceXp < 1358) {
    defence = 10;
    document.querySelector(".defence").textContent = defence;
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
