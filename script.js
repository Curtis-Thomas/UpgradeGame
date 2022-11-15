"use-strict";

let myHealth = 10;
let myAttack = 1;
let gold = 0;
let enemyHealth = 10;
let enemyAttack = 1;
let enemyNo = 1;

//game loop
if (myHealth >= 0) {
  setInterval(function updateMyGame() {
    if (myHealth < 0) {
      myHealth = -1;
    }
    if (myHealth >= 0) {
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
        document.querySelector(".loot1").textContent = ratLoot[0];
        document.querySelector(".loot1").style.width = "100%";
      }
    } else {
      document.querySelector(".revive").style.visibility = "visible";
    }
    console.log(myHealth);
  }, 1000);
}

//next enemy button

document.querySelector(".nextenemy").addEventListener("click", function () {
  document.querySelector(".enemyNo").textContent = enemyNo++;
  enemyHealth = enemyNo * 10;
  enemyAttack = enemyNo;
});

//Start Fight Button
document.querySelector(".fight").addEventListener("click", function () {
  setInterval(function enemyAttacks() {
    enemyHealth -= myAttack;
  }, 1000);
  document.querySelector(".enemyHealthNumber").textContent = enemyHealth;
  document.querySelector(".fight").style.visibility = "hidden";
  setInterval(function enemyAttacks() {
    myHealth -= enemyAttack;
  }, 1000);
});

//revive button

document.querySelector(".revive").addEventListener("click", function () {
  myHealth += 11;
  gold = gold + enemyNo;
  enemyNo = 0;
  document.querySelector(".enemyNo").textContent = enemyNo;
  document.querySelector(".gold").textContent = gold;
});

//weapon upgrade
document
  .querySelector(".btnWeaponUpgrade")
  .addEventListener("click", function () {
    if (gold >= 1) {
      myAttack++;
      gold--;
      document.querySelector(".gold").textContent = gold;
    }
  });

//shield Upgrade
document
  .querySelector(".btnShieldUpgrade")
  .addEventListener("click", function () {
    if (gold >= 1) {
      setInterval(function () {
        myHealth++;
      }, 1000);
      gold--;
      document.querySelector(".gold").textContent = gold;
    }
  });

//loot selection, make a loot takble type thing here

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
const ratLoot = ["1", "2", "3", "4", "5"];
