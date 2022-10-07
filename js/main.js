function getRandomNumberInteger (minNumber, maxNumber) {
  let min = Math.min(minNumber, maxNumber);
  let max = Math.max(minNumber, maxNumber);
  if (min >= 0 && max >= 0) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return NaN;
  }
}

console.log(getRandomNumberInteger(1.5, 1.9));


function getRandomNumberFractional (minNumber, maxNumber) {
  const min = Math.min(minNumber, maxNumber);
  const max = Math.max(minNumber, maxNumber);
  if (min >= 0 && max >= 0) {
    return Math.random() * (max - min + 1) + min;
  } else {
    return NaN;
  }
}

console.log(getRandomNumberFractional(1.5,1.9));
