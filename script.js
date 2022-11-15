"use-strict";

let myHealth = 100;
let myAttack = 50;
let enemyHealth = 100;

let enemyAttack = 1;

let enemyNo = 1;

setInterval(function updateMyGame() {
  document.querySelector(".healthNumber").textContent = myHealth;
  document.querySelector(".healthBar").style.width = myHealth + "%";

  if (enemyHealth >= 0) {
    document.querySelector(".enemyHealthNumber").textContent = enemyHealth;
    document.querySelector(".enemyHealthBar").style.width = enemyHealth + "%";
  } else {
    document.querySelector(".enemyNo").textContent = enemyNo++;
    enemyHealth = enemyNo * 100;
  }
  // <insert highly sophisticated money += 1 code here>
}, 1000);

document.querySelector(".btnAttack").addEventListener("click", function () {
  enemyHealth -= myAttack;
  document.querySelector(".enemyHealthNumber").textContent = enemyHealth;
});

document.querySelector(".fight").addEventListener("click", function () {
  document.querySelector(".fight").style.visibility = "hidden";
  setInterval(function enemyAttacks() {
    myHealth -= enemyAttack;
  }, 1000);
});

document
  .querySelector(".btnAutoUpgrade")
  .addEventListener("click", function () {
    setInterval(function enemyAttacks() {
      enemyHealth -= myAttack;
    }, 1000);
  });
