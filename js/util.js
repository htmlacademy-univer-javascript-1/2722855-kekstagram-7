// util.js

// Получение случайного целого числа
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Получение случайного элемента из массива
const getRandomArrayElement = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

export { getRandomInteger, getRandomArrayElement };
