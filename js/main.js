function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 5) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const COUNT = 10;

const AUTOR_LIST = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png'
];

const TITLE = [
  'Дом ничей! Живите кто хотите',
  'Домик на опушке',
  'Spa Resort *****',
  'Трешка',
  'Двушка в центре',
  'Евро-однушка',
  'Бунгало',
  'Дом-2',
  'Дворец в Подмосковье',
  'Комната в коммуналке'
];

const PRICE = {
  min: 100,
  max: 1000,
};

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const ROOMS = {
  min: 1,
  max: 10,
};

const GUESTS = {
  min: 1,
  max: 10,
};

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
 ' conditioner',
];

const DESCRIPTION = [
  'Бабушкин ремонт',
  'Квартира со всеми удобствами',
  'Есть дверь',
  'Окна вставим перед заселением',
  'В наличии аквадискотека',
  'Халупа на окраине за небольшие деньги',
  'У нас ночевала Ивлеева',
  'Уютная студия',
  'Неуютная студия',
  'Без кошек и детей'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const LATITUDE = {
  min: 35.65000,
  max: 35.70000,
};

const LONGITUDE = {
  min: 139.70000,
  max: 139.80000,
};

//МАССИВ ИЗ 10 ОБЪЕКТОВ AUTOR - проблема - рандомно создаются объекты с одинаковыми значениями аватаров.

function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

function createAutor () {
  return autor = {
    avatar: getRandomArrayElement(AUTOR_LIST),
  }
};

let autorList = Array.from({length: COUNT}, createAutor);

console.log(autorList);

//МАССИВ ИЗ 10 ОБЪЕКТОВ OFFER
// проблема - adress как сослаться на ту же строку из массива
// проблема не понятно как создать массив случайной длинны из массива


function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

// Попытка создать массив случайной длины из дурого массива
// function createFeatures () {
//   return features = [];
// };

// let featuresList = Array.from({length: getRandomPositiveInteger (1, FEATURES.length)}, createFeatures);

// console.log(featuresList);

function createOffer () {
  return offer = {
    title: getRandomArrayElement(TITLE),
    addres: '',
    price: getRandomPositiveInteger (PRICE.min, PRICE.max),
    type: getRandomArrayElement (TYPE),
    rooms: getRandomPositiveInteger (ROOMS.min, ROOMS.max),
    guests: getRandomPositiveInteger (GUESTS.min, GUESTS.max),
    checkin: getRandomArrayElement (CHECKIN),
    checkout: getRandomArrayElement (CHECKOUT),
    features: '',
    description: getRandomArrayElement(DESCRIPTION),
    photos: '',
  }
};

let offerList = Array.from({length: COUNT}, createOffer);

console.log(offerList);

//МАССИВ ИЗ 10 ОБЪЕКТОВ LOCATION - проблема - некоторые координаты получают меньше 5 знаков после запятой.

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
