// data.js
import { getRandomInteger, getRandomArrayElement } from './util.js';

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

let commentIdCounter = 1;

const createComment = () => {
  const sentencesCount = getRandomInteger(1, 2);
  let message = '';

  if (sentencesCount === 1) {
    message = getRandomArrayElement(MESSAGES);
  } else {
    const firstIndex = getRandomInteger(0, MESSAGES.length - 1);
    let secondIndex = getRandomInteger(0, MESSAGES.length - 1);
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

const generatePhotos = (count) => {
  const photos = [];

  for (let i = 1; i <= count; i++) {
    const commentsCount = getRandomInteger(0, 30);
    const comments = [];
    for (let j = 0; j < commentsCount; j++) {
      comments.push(createComment());
    }

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

export { generatePhotos };
