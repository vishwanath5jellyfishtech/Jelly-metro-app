const allStops = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// console.log(allStops.length);
var select = document.querySelector("#select");
var pTag = document.querySelector("#firststop");

var select1 = document.querySelector("#select1");
var pTag1 = document.querySelector("#finalstop");

for (let i = 0; i < allStops.length; i++) {
  let firstStop = allStops[i];
  let optionElement = document.createElement("option");
  optionElement.value = firstStop;
  optionElement.textContent = firstStop;
  select.appendChild(optionElement);
}

for (let i = 0; i < allStops.length; i++) {
  let finalStop = allStops[i];
  let optionElement = document.createElement("option");
  optionElement.value = finalStop;
  optionElement.textContent = finalStop;
  select1.appendChild(optionElement);
}

function selectFirstStop() {
  let val = select.options[select.selectedIndex].text;
  pTag.textContent = "Your Source  station is: " + val;
}

function selectFinalStop() {
  let val = select.options[select.selectedIndex].text;
  //   pTag.textContent = "Selected area : " + val;
  //   console.log(val);

  let val1 = select1.options[select1.selectedIndex].text;

  if (val === val1) {
    alert("wrong option");
  } else {
    pTag1.textContent = "Your Destination station is: " + val1;
  }
}

//------------------------->>>>
const allFares = {
  1: 10,
  2: 10,
  3: 10,
  4: 10,
  5: 20,
  6: 20,
  7: 20,
  8: 20,
  9: 30,
  10: 30,
  11: 30,
  12: 30,
  13: 40,
  14: 40,
  15: 40,
  16: 40,
  17: 50,
  18: 50,
  19: 50,
  20: 50,
  21: 60,
  22: 60,
  23: 60,
  24: 60,
  25: 70,
  26: 70,
};

const getPayment = document.getElementById("selectmode");
const fare = document.getElementById("finalfare");
////-------------------------main function

function finalFare() {
  const sourceFare = allStops.indexOf(select.value);
  // console.log(sourceFare);
  const destinationFare = allStops.indexOf(select1.value);
  // console.log(destinationFare);
  const getFareValue = getPayment.value;
  console.log(getFareValue);

  let distance = 0;
  distance = destinationFare - sourceFare;

  if (destinationFare > sourceFare) {
    distance = destinationFare - sourceFare;
  } else if (sourceFare > destinationFare) {
    distance = sourceFare - destinationFare;
  } else {
    return console.log("Select the stations");
  }

  let checkFare = allFares[distance];
  // console.log(checkFare);

  let finalFare = 0;

  if (getFareValue === "Card") {
    finalFare = checkFare - (10 / 100) * checkFare;
  } else {
    finalFare = checkFare;
  }

  if (finalFare < 10) {
    finalFare = 10;
  } else if (finalFare > 60) {
    finalFare = 60;
  }
  fare.value = finalFare;
}

function resetValue() {
  select.value = "";
  select1.value = "";
  getPayment.value = "Select Payment";
  fare.value = "";
}

//-------------------->>>
