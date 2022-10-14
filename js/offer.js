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
