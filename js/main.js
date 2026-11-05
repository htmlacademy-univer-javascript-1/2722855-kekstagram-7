// main.js
import { generatePhotos } from './data.js';

const photos = generatePhotos(25);

// или просто присваиваем в глобальный объект window, чтобы посмотреть
window.photos = photos;
