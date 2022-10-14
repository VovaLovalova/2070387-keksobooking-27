function getRandomPositiveInteger (minNumber, maxNumber) {
  if (minNumber < 0 || maxNumber < 0) {
    return NaN;
  } else {
    const min = Math.floor(Math.min(minNumber, maxNumber));
    const max = Math.floor(Math.max(minNumber, maxNumber));
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


// function getRandomPositiveFloat (minNumber, maxNumber) {
//   if (minNumber < 0 || maxNumber < 0) {
//     return NaN;
//   } else {
//     const min = Math.min(minNumber, maxNumber);
//     const max = Math.max(minNumber, maxNumber);
//     return Math.random() * (max - min + 1) + min;
//   }
// }

// СОЗДАНИЕ ОБЪЕКТА AUTOR
//- нужно ли писать функцию для создания массива исходных данных для объекта или сам массив можно написать в ручную?

// Попытка написать функцию создания рандомных имен файлов. Не смог собрать из них массив
// function getRandomAutor (minNumber, maxNumber) {
//   if (minNumber < 0 || maxNumber < 0) {
//     return NaN;
//   } else {
//     const min = Math.floor(Math.min(minNumber, maxNumber));
//     const max = Math.floor(Math.max(minNumber, maxNumber));
//     const number = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (number < 10) {
//       return 'img/avatars/user0' + number + '.png';
//     } else {
//       return 'img/avatars/user' + number + '.png';;
//     }
//   }
// }

// Написал массив сам и использовал метод показанный в скринкасте
// - как сделать что бы рандомные значения не повторялись?
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

const AUTOR_COUNT = 10;

// const getRandomPositiveInteger = (a, b) => {
//   if (a < 0 || b < 0) {
//     return NaN;
//   }
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createAutor = () => ({
  avatar: getRandomArrayElement(AUTOR_LIST),
});

const autors = Array.from({length: AUTOR_COUNT}, createAutor);

console.log(autors);

