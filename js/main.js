'use strict';

// 1. Вспомогательные данные
const NAMES = ['Артём', 'Ирина', 'Кекс', 'Максим', 'Ольга', 'Дмитрий', 'Елена', 'Сергей'];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Тестим новую камеру! =)',
  'Закат на берегу моря',
  'Любимый кот',
  'Прогулка по городу',
  'Вкусный завтрак'
];

// Вспомогательная функция для получения случайного целого числа в диапазоне (включительно)
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Вспомогательная функция для получения случайного элемента из массива
const getRandomArrayElement = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};

// Вспомогательная функция для создания одного случайного комментария
let commentIdCounter = 1; // Счётчик для уникальных ID комментариев

const createComment = () => {
  // Выбираем 1 или 2 случайных предложения
  const sentencesCount = getRandomInteger(1, 2);
  let message = '';

  if (sentencesCount === 1) {
    message = getRandomArrayElement(MESSAGES);
  } else {
    // Чтобы предложения не повторялись, можно немного заморочиться,
    // но по ТЗ достаточно просто взять два случайных.
    // Сделаем чуть умнее: исключим первое выбранное из второго выбора.
    const firstIndex = getRandomInteger(0, MESSAGES.length - 1);
    let secondIndex = getRandomInteger(0, MESSAGES.length - 1);

    // Если индексы совпали, сдвигаем второй
    while (secondIndex === firstIndex) {
      secondIndex = getRandomInteger(0, MESSAGES.length - 1);
    }
    message = `${MESSAGES[firstIndex]} ${MESSAGES[secondIndex]}`;
  }

  return {
    id: commentIdCounter++,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: message,
    name: getRandomArrayElement(NAMES)
  };
};

// 2. Главная функция генерации массива фотографий
const generatePhotos = (count) => {
  const photos = [];

  for (let i = 1; i <= count; i++) {
    // Генерируем массив комментариев (от 0 до 30 штук)
    const commentsCount = getRandomInteger(0, 30);
    const comments = [];
    for (let j = 0; j < commentsCount; j++) {
      comments.push(createComment());
    }

    // Создаём объект фотографии
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomArrayElement(DESCRIPTIONS),
      likes: getRandomInteger(15, 200),
      comments: comments
    });
  }

  return photos;
};

// 3. Создаём итоговый массив из 25 объектов
const photos = generatePhotos(25);

// Выведем в консоль для проверки
console.log(photos);
