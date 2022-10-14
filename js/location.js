const COUNT = 10;

const LATITUDE = {
  min: 35.65000,
  max: 35.70000,
};

const LONGITUDE = {
  min: 139.70000,
  max: 139.80000,
};

function getRandomPositiveFloat (a, b, digits = 5) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

function createLocation () {
  let getRandLat = getRandomPositiveFloat(LATITUDE.min, LATITUDE.max, digits = 5);
  let getRandLng = getRandomPositiveFloat(LONGITUDE.min, LONGITUDE.max, digits = 5);
  let location;
  return location = {
    lat: getRandLat,
    lng: getRandLng,
  };
};

let locationList = Array.from({length: COUNT}, createLocation);

console.log(locationList);
