function getRandomPositiveInteger (minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0) {
    return NaN;
  } else {
    const min = Math.floor(Math.min(minNumber, maxNumber));
    const max = Math.floor(Math.max(minNumber, maxNumber));
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


function getRandomPositiveFloat (minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0) {
    return NaN;
  } else {
    const min = Math.min(minNumber, maxNumber);
    const max = Math.max(minNumber, maxNumber);
    return Math.random() * (max - min + 1) + min;
  }
}

console.log(getRandomPositiveInteger(2.8, 8.8));
console.log(getRandomPositiveFloat(2.8, 8.8));
