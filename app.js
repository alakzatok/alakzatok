// Alapváltozók és függvények
const leftDiv = document.getElementById("left-content");
const centerDiv = document.getElementById("center-content");
const rightDiv = document.getElementById("right-content");
const videoDiv = document.getElementById("video");

function kiIrBal(szoveg) {
  const kiiratasBal = document.getElementById("left-content");
  const p = document.createElement("p");
  p.innerHTML = szoveg;
  kiiratasBal.appendChild(p);
}
function kiIrKozep(szoveg) {
  const kiiratasKozep = document.getElementById("center-content");
  const p = document.createElement("p");
  p.innerHTML = szoveg;
  kiiratasKozep.appendChild(p);
}
function kiIrJobb(szoveg) {
  const kiiratasJobb = document.getElementById("right-content");
  const p = document.createElement("p");
  p.innerHTML = szoveg;
  kiiratasJobb.appendChild(p);
}

// Síkidomok kerülete

function negyzetKerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a négyzet oldalát!");
  if(isNaN(oldal)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  }else if(oldal == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal == null | oldal == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!!");
  } else{
    oldal = Math.abs(oldal);
    let kerulet = 4 * oldal;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A négyzet kerülete: <span>${kerulet} cm</span>`);
    kiIrKozep(`K=4a`);
    kiIrKozep(`K=4*${oldal} cm=<span>${kerulet} cm</span>`);
    kiIrBal(`<img src="img/sikidomok/negyzet.png">`);
  }
}

function teglalapKerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal1 = prompt("Add meg a téglalap egyik oldalát!");
  let oldal2 = prompt("Add meg a téglalap másik oldalát!");
  if(isNaN(oldal1) | isNaN(oldal2)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal1 == "0" | oldal2 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal1 == null | oldal2 == null | oldal1 == "" | oldal2 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!!");
  }else{
    oldal1 = Math.abs(oldal1);
    oldal2 = Math.abs(oldal2);
    let kerulet = 2 * (oldal1 + oldal2);
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A téglalap kerülete: <span>${kerulet} cm</span>`);
    kiIrKozep(`K=2(a+b)`);
    kiIrKozep(`K=2*(${oldal1}+${oldal2}) cm=<span>${kerulet} cm</span>`);
    kiIrBal(`<img src="img/sikidomok/teglalap.png">`);
  }
}

function haromszogKerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal1 = prompt("Add meg a háromszög 'a' oldalát!");
  let oldal2 = prompt("Add meg a háromszög 'b' oldalát!");
  let oldal3 = prompt("Add meg a háromszög 'c' oldalát!");
  if(isNaN(oldal1) | isNaN(oldal2) | isNaN(oldal3)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal1 == "0" | oldal2 == "0" | oldal3 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal1 == null | oldal2 == null | oldal3 == null | oldal1 == "" | oldal2 == "" | oldal3 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  }else{
    oldal1 = Math.abs(oldal1);
    oldal2 = Math.abs(oldal2);
    oldal3 = Math.abs(oldal3);
    let kerulet = oldal1 + oldal2 + oldal3;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A háromszög kerülete: <span>${kerulet} cm</span>`);
    kiIrKozep(`K=a+b+c`);
    kiIrKozep(`K=${oldal1}+${oldal2}+${oldal3} cm=<span>${kerulet} cm</span>`);
    kiIrBal(`<img src="img/sikidomok/haromszog.png">`);
  }
}

function rombuszKerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a rombusz oldalát!");
  if(isNaN(oldal)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal == null | oldal == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  }else{
    oldal = Math.abs(oldal);
    let kerulet = 4 * oldal;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A rombusz kerülete: <span>${kerulet} cm</span>`);
    kiIrKozep(`K=4a`);
    kiIrKozep(`K=4*${oldal} cm=<span>${kerulet} cm</span>`);
    kiIrBal(`<img src="img/sikidomok/rombusz.png">`);
  }
}

function paralelogrammaKerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal1 = prompt("Add meg a paralelogramma egyik oldalát!");
  let oldal2 = prompt("Add meg a paralelogramma másik oldalát!");
  if(isNaN(oldal1) | isNaN(oldal2)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal1 == "0" | oldal2 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal1 == null | oldal2 == null | oldal1 == "" | oldal2 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  }else{
    oldal1 = Math.abs(oldal1);
    oldal2 = Math.abs(oldal2);
    let kerulet = 2 * (oldal1 + oldal2);
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A paralelogramma kerülete: <span>${kerulet} cm</span>`);
    kiIrKozep(`K=2(a+b)`);
    kiIrKozep(`K=2*(${oldal1}+${oldal2}) cm=<span>${kerulet} cm</span>`);
    kiIrBal(`<img src="img/sikidomok/paralelogramma.png">`);
  }
}

function deltoidKerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal1 = prompt("Add meg a deltoid egyik oldalát!");
  let oldal2 = prompt("Add meg a deltoid másik oldalát!");
  if(isNaN(oldal1) | isNaN(oldal2)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  }else if(oldal1 == "0" | oldal2 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal1 == null | oldal2 == null | oldal1 == "" | oldal2 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal1 = Math.abs(oldal1);
    oldal2 = Math.abs(oldal2);
    let kerulet = 2 * (oldal1 + oldal2);
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A deltoid kerülete: <span>${kerulet} cm</span>`);
    kiIrKozep(`K=2(a+b)`);
    kiIrKozep(`K=2*(${oldal1}+${oldal2}) cm=<span>${kerulet} cm</span>`);
    kiIrBal(`<img src="img/sikidomok/deltoid.png">`);
  }
}

function trapezKerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal1 = prompt("Add meg a trapéz egyik oldalát!");
  let oldal2 = prompt("Add meg a trapéz másik oldalát!");
  let oldal3 = prompt("Add meg a trapéz harmadik oldalát!");
  let oldal4 = prompt("Add meg a trapéz negyedik oldalát!");
  if(isNaN(oldal1) | isNaN(oldal2) | isNaN(oldal3) | isNaN(oldal4)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal1 == "0" | oldal2 == "0" | oldal3 == "0" | oldal4 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal1 == null | oldal2 == null | oldal3 == null | oldal4 == null | oldal1 == "" | oldal2 == "" | oldal3 == "" | oldal4 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal1 = Math.abs(oldal1);
    oldal2 = Math.abs(oldal2);
    oldal3 = Math.abs(oldal3);
    oldal4 = Math.abs(oldal4);
    let kerulet = oldal1 + oldal2 + oldal3 + oldal4;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A trapéz kerülete: <span>${kerulet} cm</span>`);
    kiIrKozep(`K=a+b+c+d`);
    kiIrKozep(`K=${oldal1}+${oldal2}+${oldal3}+${oldal4} cm=<span>${kerulet} cm</span>`);
    kiIrBal(`<img src="img/sikidomok/trapez.png">`);
  }
}

function hurtrapezKerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal1 = prompt("Add meg a húrtrapéz egyik alapját!");
  let oldal2 = prompt("Add meg a húrtrapéz másik alapját!");
  let oldal3 = prompt("Add meg a húrtrapéz szárát!");
  if(isNaN(oldal1) | isNaN(oldal2) | isNaN(oldal3)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal1 == "0" | oldal2 == "0" | oldal3 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal1 == null | oldal2 == null | oldal3 == null | oldal1 == "" | oldal2 == "" | oldal3 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal1 = Math.abs(oldal1);
    oldal2 = Math.abs(oldal2);
    oldal3 = Math.abs(oldal3);
    let kerulet = oldal1 + oldal2 + 2 * oldal3;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A húrtrapéz kerülete: <span>${kerulet} cm</span>`);
    kiIrKozep(`K=a+b+c+2*d`);
    kiIrKozep(`K=${oldal1}+${oldal2}+2*${oldal3} cm=<span>${kerulet} cm</span>`);
    kiIrBal(`<img src="img/sikidomok/hurtrapez.png">`);
  }
}

// Síkidomok területe
function negyzetTerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a négyzet oldalát!");
  if(isNaN(oldal)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy olyan számot, ami nagyobb, mint 0!");
  } else if(oldal == null | oldal == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal = Math.abs(oldal);
    let terulet = Math.pow(oldal, 2);
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A négyzet területe: <span>${terulet} cm<sup>2</sup></span>`);
    kiIrKozep(`T=a*a`);
    kiIrKozep(`T=${oldal}*${oldal} cm=<span>${terulet} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/sikidomok/negyzet.png">`);
  }
}

function teglalapTerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal1 = prompt("Add meg a téglalap egyik oldalát!");
  let oldal2 = prompt("Add meg a téglalap másik oldalát!");
  if(isNaN(oldal1) | isNaN(oldal2)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal1 == "0" | oldal2 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal1 == null | oldal2 == null | oldal1 == "" | oldal2 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  }else{
    oldal1 = Math.abs(oldal1);
    oldal2 = Math.abs(oldal2);
    let terulet = oldal1 * oldal2;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A téglalap területe: <span>${terulet} cm<sup>2</sup></span>`);
    kiIrKozep(`T=a*b`);
    kiIrKozep(`T=${oldal1}*${oldal2} cm=<span>${terulet} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/sikidomok/teglalap.png">`);
  }
}

function haromszogTerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a háromszög egyik oldalát!");
  let magassag = prompt("Add meg az oldalhoz tartozó magasságot!");
  if(isNaN(oldal) | isNaN(magassag)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal == null | magassag == null | oldal == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal = Math.abs(oldal);
    magassag = Math.abs(magassag);
    let terulet = (oldal * magassag) / 2;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A háromszög területe: <span>${terulet} cm<sup>2<sup></span>`);
    kiIrKozep(`T=(a*m<sub>a</sub>)/2`);
    kiIrKozep(`T=(${oldal}*${magassag})/2 cm=<span>${terulet} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/sikidomok/haromszog.png">`);
  }
}

function rombuszTeruletAtlo() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let atlo1 = prompt("Add meg a rombusz egyik átlóját!");
  let atlo2 = prompt("Add meg a rombusz másik átlóját!");
  if(isNaN(atlo1) | isNaN(atlo2)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(atlo1 == "0" | atlo2 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(atlo1 == null | atlo2 == null | atlo1 == "" | atlo2 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  }else{
    atlo1 = Math.abs(atlo1);
    atlo2 = Math.abs(atlo2);
    let terulet = (atlo1 * atlo2) / 2;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A rombusz területe: <span>${terulet} cm<sup>2</sup></span>`);
    kiIrKozep(`T=(e*f)/2`);
    kiIrKozep(`T=(${atlo1}*${atlo2})/2 cm=<span>${terulet} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/sikidomok/rombusz.png">`);
  }
}

function rombuszTeruletMagassag() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a rombusz egyik oldalát!");
  let magassag = prompt("Add meg az oldalhoz tartozó magasságot!");
  if(isNaN(oldal) | isNaN(magassag)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  }else if(oldal == null | magassag == null | oldal == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal = Math.abs(oldal);
    magassag = Math.abs(magassag);
    let terulet = oldal * magassag;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A rombusz területe: <span>${terulet} cm<sup>2</sup></span>`);
    kiIrKozep(`T=a*m<sub>a</sub>`);
    kiIrKozep(`T=${oldal}*${magassag} cm=<span>${terulet} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/sikidomok/rombusz.png">`);
  }
}

function paralelogrammaTerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a rombusz egyik oldalát!");
  let magassag = prompt("Add meg az oldalhoz tartozó magasságot!");
  if(isNaN(oldal) | isNaN(magassag)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(oldal == null | magassag == null | oldal == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal = Math.abs(oldal);
    magassag = Math.abs(magassag);
    let terulet = oldal * magassag;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A paralelogramma területe: <span>${terulet} cm<sup>2</sup></span>`);
    kiIrKozep(`T=a*m<sub>a</sub>`);
    kiIrKozep(`T=${oldal}*${magassag} cm=<span>${terulet} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/sikidomok/paralelogramma.png">`);
  }
}

function deltoidTerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let atlo1 = prompt("Add meg a deltoid egyik átlóját!");
  let atlo2 = prompt("Add meg a deltoid másik átlóját!");
  if(isNaN(atlo1) | isNaN(atlo2)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(atlo1 == "0" | atlo2 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(atlo1 == null | atlo2 == null | atlo1 == "" | atlo2 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    atlo1 = Math.abs(atlo1);
    atlo2 = Math.abs(atlo2);
    let terulet = (atlo1 * atlo2) / 2;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A deltoid területe: <span>${terulet} cm<sup>2</sup></span>`);
    kiIrKozep(`T=(e*f)/2`);
    kiIrKozep(`T=$(${atlo1}*${atlo2})/2 cm=<span>${terulet} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/sikidomok/deltoid.png">`);
  }
}

function trapezTerulet() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let alap1 = prompt("Add meg a trapéz egyik alapját!");
  let alap2 = prompt("Add meg a trapéz másik alapját!");
  let magassag = prompt("Add meg az alapokhoz tartozó magasságot!");
  if(isNaN(alap1) | isNaN(alap2) | isNaN(magassag)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(alap1 == "0" | alap2 == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(alap1 == null | alap2 == null | magassag == null | alap1 == "" | alap2 == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    alap1 = Math.abs(alap1);
    alap2 = Math.abs(alap2);
    magassag = Math.abs(magassag);
    let terulet = ((alap1 + alap2) / 2) * magassag;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A trapéz területe: <span>${terulet} cm<sup>2</sup></span>`);
    kiIrKozep(`T=(a+c*m)/2`);
    kiIrKozep(
      `T=(${alap1}+${alap2}*${magassag})/2 cm=<span>${terulet} cm<sup>2</sup></span>`
    );
    kiIrBal(`<img src="img/sikidomok/trapez.png">`);
  }
}

// Testek térfogata
function kockaTerfogat() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a négyzet oldalát!");
  if(isNaN(oldal)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(oldal == null | oldal == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal = Math.abs(oldal);
    let terfogat = Math.pow(oldal, 3);
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A kocka térfogata: <span>${terfogat} cm<sup>3</sup></span>`);
    kiIrKozep(`V=a<sup>3</sup>`);
    kiIrKozep(`V=${oldal}<sup>3</sup> cm=<span>${terfogat} cm<sup>3</sup></span>`);
    kiIrBal(`<img src="img/testek/kocka.png">`);
  }
}

function teglatestTerfogat() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal1 = prompt("Add meg a téglatest oldalát!");
  let oldal2 = prompt("Add meg a másik oldalát!");
  let oldal3 = prompt("Add meg a harmadik oldalát!");
  if(isNaN(oldal1) | isNaN(oldal2) | isNaN(oldal3)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal1 == "0" | oldal2 == "0" | oldal3 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(oldal1 == null | oldal2 == null | oldal3 == null | oldal1 == "" | oldal2 == "" | oldal3 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal1 = Math.abs(oldal1);
    oldal2 = Math.abs(oldal2);
    oldal3 = Math.abs(oldal3);
    let terfogat = oldal1 * oldal2 * oldal3;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A téglatest térfogata: <span>${terfogat} cm<sup>3</sup></span>`);
    kiIrKozep(`V=abc`);
    kiIrKozep(`V=${oldal1}*${oldal2}*${oldal3} cm=<span>${terfogat} cm<sup>3</sup></span>`);
    kiIrBal(`<img src="img/testek/teglatest.gif">`);
  }
}

function negyzetesOszlopTerfogat() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a négyzetes oszlop oldalát!");
  let magassag = prompt("Add meg a négyzetes oszlop magasságát!");
  if(isNaN(oldal) | isNaN(magassag)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(oldal == null | magassag == null | oldal == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal = Math.abs(oldal);
    magassag = Math.abs(magassag);
    let terfogat = Math.pow(oldal, 2) * magassag;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A négyzetes oszlop térfogata: <span>${terfogat} cm<sup>3</sup></span>`);
    kiIrKozep(`V=a<sup>2</sup>*m`);
    kiIrKozep(`V=${oldal}<sup>2</sup>*${magassag} cm=<span>${terfogat} cm<sup>3</sup></span>`);
    kiIrBal(`<img src="img/testek/negyzetes_oszlop.gif">`);
  }
}

function egyenesKorhengerTerfogat() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let sugar = prompt("Add meg a henger körének a sugarát!");
  const pi = 3.14;
  let magassag = prompt("Add meg a henger magasságát!");
  if(isNaN(sugar) | isNaN(magassag)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(sugar == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(sugar == null | magassag == null | sugar == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    sugar = Math.abs(sugar);
    magassag = Math.abs(magassag);
    let terfogat = Math.pow(sugar, 2) * pi * magassag;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`Az egyenes körhenger térfogata: <span>${terfogat} cm<sup>3</sup></span>`);
    kiIrKozep(`V=r<sup>2</sup> * &Pi; * m`);
    kiIrKozep(
      `V=${sugar}<sup>2</sup> * ${pi} * ${magassag}cm=<span>${terfogat} cm<sup>3</sup></span>`
    );
    kiIrBal(`<img src="img/testek/egyenes_korhenger.png">`);
  }
}

function negyzetAlapuSzabalyosGulaTerfogat() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a gúla négyzetének az oldalát!");
  let magassag = prompt("Add meg a gúla magasságát!");
  if (isNaN(oldal) | isNaN(magassag)) {
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(oldal == null | magassag == null | oldal == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal = Math.abs(oldal);
    magassag = Math.abs(magassag);
    let terfogat = (Math.pow(oldal, 2) * magassag) / 3;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(
      `A négyzet alapú szabályos gúla térfogata: <span>${terfogat} cm<sup>3</sup></span>`
    );
    kiIrKozep(`V=(a<sup>2</sup> * m)/3`);
    kiIrKozep(
      `V=(${oldal}<sup>2</sup> * ${magassag} cm)/3=<span>${terfogat} cm<sup>3</sup></span>`
    );
    kiIrBal(`<img src="img/testek/gula.gif">`);
  }
}

function gombTerfogat() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let sugar = prompt("Add meg a gömb sugarát!");
  const pi = 3.14;
  if(isNaN(sugar)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(sugar == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(sugar == null | sugar == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    sugar = Math.abs(sugar);
    let terfogat = (4 * Math.pow(sugar, 3) * pi) / 3;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A gömb térfogata: <span>${terfogat} cm<sup>3</sup></span>`);
    kiIrKozep(`V=(4r<sup>3</sup> * &Pi;)/3`);
    kiIrKozep(`V=(${sugar}<sup>3</sup> * ${pi} cm)/3=<span>${terfogat} cm<sup>3</sup></span>`);
    kiIrBal(`<img src="img/testek/gomb.png">`);
  }
}

function egyenesKorkupTerfogat() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let sugar = prompt("Add meg a kúp körének a sugarát!");
  const pi = 3.14;
  let magassag = prompt("Add meg a kúp magasságát!");
  if(isNaN(sugar) | isNaN(magassag)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(sugar == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(sugar == null | magassag == null | sugar == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    sugar = Math.abs(sugar);
    magassag = Math.abs(sugar);
    let terfogat = (Math.pow(sugar, 2) * pi * magassag) / 3;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A kúp térfogata: <span>${terfogat} cm<sup>3</sup></span>`);
    kiIrKozep(`V=(r<sup>2</sup> * &Pi; * m)/3`);
    kiIrKozep(
      `V=(${sugar}<sup>2</sup> * ${pi} * ${magassag} cm)/3=<span>${terfogat} cm<sup>3</sup></span>`
    );
    kiIrBal(`<img src="img/testek/kup.gif">`);
  }
}

// Testek felszíne
function kockaFelszin() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a négyzet oldalát!");
  if(isNaN(oldal)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(oldal == null | oldal == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal = Math.abs(oldal);
    let felszin = 6 * Math.pow(oldal, 2);
    kiIrJobb(`A kocka felszíne: <span>${felszin} cm<sup>2</sup></span>`);
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrKozep(`A=6a<sup>2</sup>`);
    kiIrKozep(`A=6*${oldal}<sup>2</sup> cm=<span>${felszin} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/testek/kocka.png">`);
  }
}

function teglatestFelszin() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal1 = prompt("Add meg a téglatest egyik oldalát!");
  let oldal2 = prompt("Add meg a téglatest másik oldalát!");
  let oldal3 = prompt("Add meg a téglatest harmadik oldalát!");
  if(isNaN(oldal1) | isNaN(oldal2) | isNaN(oldal3)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal1 == "0" | oldal2 == "0" | oldal3 == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(oldal1 == null | oldal2 == null | oldal3 == null | oldal1 == "" | oldal2 == "" | oldal3 == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else {
    oldal1 = Math.abs(oldal1);
    oldal2 = Math.abs(oldal2);
    oldal3 = Math.abs(oldal3);
    let felszin = 2 * (oldal1 * oldal2 + oldal2 * oldal3 + oldal1 * oldal3);
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A téglatest felszíne: <span>${felszin} cm<sup>2</sup></span>`);
    kiIrKozep(`A=2(ab+bc+ac)`);
    kiIrKozep(`A=2*(${oldal1} * ${oldal2} + ${oldal2} * ${oldal3} + ${oldal1} * ${oldal3}) cm=<span>${felszin} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/testek/teglatest.gif">`);
  }
}

function negyzetesOszlopFelszin() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal = prompt("Add meg a négyzetes oszlop oldalát!");
  let magassag = prompt("Add meg a négyzetes oszlop magasságát!");
  if(isNaN(oldal) | isNaN(magassag)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(oldal == null | magassag == null | oldal == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal = Math.abs(oldal);
    magassag = Math.abs(magassag);
    let felszin = 2 * Math.pow(oldal, 2) + 4 * oldal * magassag;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A négyzetes oszlop felszíne: <span>${felszin} cm<sup>2</sup></span>`);
    kiIrKozep(`A=2a<sup>2</sup> + 4am`);
    kiIrKozep(`A=2*${oldal}<sup>2</sup> + 4*${oldal}*${magassag} cm=<span>${felszin} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/testek/negyzetes_oszlop.gif">`);
  }
}

function egyenesKorhengerFelszin() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let sugar = prompt("Add meg a henger körének a sugarát!");
  let magassag = prompt("Add meg a henger magasságát!");
  const pi = 3.14;
  if(isNaN(sugar) | isNaN(magassag)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(sugar == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(sugar == null | magassag == null | sugar == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    sugar = Math.abs(sugar);
    magassag = Math.abs(magassag);
    let felszin = 2 * Math.pow(sugar, 2) * pi + 2 * sugar * pi * magassag;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`Az egyenes körhenger felszíne: <span>${felszin} cm<sup>2</sup></span>`);
    kiIrKozep(`A=2 * r<sup>2</sup> * &Pi; + 2 * r * &Pi; * m`);
    kiIrKozep(`A=2*${sugar}<sup>2</sup> * ${pi} + 2 * ${sugar} * ${pi} * ${magassag} cm=<span>${felszin} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/testek/egyenes_korhenger.png">`);
  }
}

function negyzetAlapuSzabalyosGulaFelszin() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let oldal1 = prompt("Add meg a gúla négyzetének az oldalát!");
  let magassag = prompt(
    "Add meg az alaphoz tartozó magasságot!"
  );
  if(isNaN(oldal1) | isNaN(magassag)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(oldal1 == "0" | magassag == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(oldal1 == null | magassag == null | oldal1 == "" | magassag == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    oldal1 = Math.abs(oldal1);
    magassag = Math.abs(magassag);
    let felszin = Math.pow(oldal1, 2) + 4 * (oldal1*magassag) / 2;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A gúla felszíne: <span>${felszin} cm<sup>2</sup></span>`);
    kiIrKozep(`A=a<sup>2</sup> + 4 * (a * m<sub>a</sub>) / 2`);
    kiIrKozep(`A=${oldal1}<sup>2</sup> + (4 * ${oldal1} * ${magassag}) / 2 cm=<span>${felszin} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/testek/gula.gif">`);
  }
}

function gombFelszin() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let sugar = prompt("Add meg a gömb sugarát!");
  const pi = 3.14;
  if(isNaN(sugar)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(sugar == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(sugar == null | sugar == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    sugar = Math.abs(sugar);
    let felszin = 4 * Math.pow(sugar, 2) * pi;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A gömb felszíne: <span>${felszin} cm<sup>2</sup></span>`);
    kiIrKozep(`A=4 * r<sup>2</sup> * &Pi;`);
    kiIrKozep(`A=4 * ${sugar} * ${pi} cm=<span>${felszin} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/testek/gomb.png">`);
  }
}

function egyenesKorkupFelszin() {
  videoDiv.style.display = "none";
  leftDiv.innerHTML = "";
  centerDiv.innerHTML = "";
  rightDiv.innerHTML = "";
  let atfogo = prompt("Add meg a kúp 'a' oldalát!");
  let sugar = prompt("Add meg a kúp körének a sugarát!");
  const pi = 3.14;
  if(isNaN(atfogo) | isNaN(sugar)){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek számot adjál meg!");
  } else if(atfogo == "0" | sugar == "0"){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek nagyobb számot adjál meg, mint 0!");
  } else if(atfogo == null | sugar == null | atfogo == "" | sugar == ""){
    videoDiv.style.display = "block";
    leftDiv.style.borderRight = "0";
    centerDiv.style.borderRight = "0";
    alert("Kérlek adj meg egy számot!");
  } else{
    atfogo = Math.abs(atfogo);
    sugar = Math.abs(sugar);
    let felszin = Math.pow(sugar, 2) * pi + sugar * pi * atfogo;
    leftDiv.style.borderRight = "1px solid #000";
    centerDiv.style.borderRight = "1px solid #000";
    kiIrJobb(`A kúp felszíne: <span>${felszin} cm<sup>2</sup></span>`);
    kiIrKozep(`A=r<sup>2</sup> * &Pi; + r * &Pi; * a`);
    kiIrKozep(`A=${sugar}<sup>2</sup> * ${pi} + ${sugar} * ${pi} * ${atfogo}cm=<span>${felszin} cm<sup>2</sup></span>`);
    kiIrBal(`<img src="img/testek/kup.gif">`);
  }
}

/* Side nav dropdown */
function sideNavDropdown1(){
  document.getElementById("side-dropdown1").classList.toggle("show");
}
function sideNavDropdown2(){
  document.getElementById("side-dropdown2").classList.toggle("show");
}
function sideNavDropdown3(){
  document.getElementById("side-dropdown3").classList.toggle("show");
}
function sideNavDropdown4(){
  document.getElementById("side-dropdown4").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.dropbtn3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  if (!event.target.matches('.dropbtn4')) {
    var dropdowns = document.getElementsByClassName("dropdown-content4");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Side navbar */
function openSlideMenu() {
  document.getElementById("side-menu").classList.toggle("show");
}
function closeSlideMenu() {
  document.getElementById("side-menu").classList.toggle("show");
}

let hide = true;
$('.hide-sidenav').on("click", function () {
  if (hide) $('.side-nav').removeClass('show');
  hide = true;
});