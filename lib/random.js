function checkIfEqual(val1, val2) {
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
}

function randomNumber() {
  return Math.floor(Math.random() * 101);
}

function random1000Number() {
  var numArray = [];
  for (let i = 0; i < 1000; i++) {
    var num = randomNumber();
    numArray.push(num);
  }

  return numArray;
}
module.exports = { checkIfEqual, randomNumber, random1000Number };
