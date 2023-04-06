import {getRandomInteger, getRandomArrayElements, getUniqueNumber} from './util.js';

const PHOTO_OBJECTS_COUNT = 25;
const LIKES_MIN_COUNT = 15;
const LIKES_MAX_COUNT = 200;
const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;
const ID_MIN_COUNT = 1;
const ID_MAX_COUNT = 25;
const URL_MIN_COUNT = 1;
const URL_MAX_COUNT = 25;
const COMMENTS_ID_MIN_COUNT = 1;
const COMMENTS_ID_MAX_COUNT = 1000;

const NAMES = [
  'Мария', 'Глеб', 'Ярослав', 'Жанна', 'Павел',
];

const PHOTO_DESCRIPTIONS = [
  'Когда радости нет предела', 'Улыбаюсь новому дню', 'Досадно, но ладно', 'Все люди, как люди, а я суперзвезда!',
  'Релаксирую', 'Законно быть таким фотогеничным?',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
];

const generatedComments = () =>
  Array.from({ length: getRandomInteger (1, 2) }, () =>
    getRandomArrayElements(COMMENTS)
  ).join('.');

const generatedPhotoId = getUniqueNumber(ID_MIN_COUNT, ID_MAX_COUNT);
const generatedCommentId = getUniqueNumber(COMMENTS_ID_MIN_COUNT, COMMENTS_ID_MAX_COUNT);
const generatedPhotoUrl = getUniqueNumber(URL_MIN_COUNT, URL_MAX_COUNT);

// Функция создания фотообъекта

const createPhotoObject = () => ({
  photoId: generatedPhotoId(),
  url: `photos/${generatedPhotoUrl()}.jpg`,
  description: getRandomArrayElements(PHOTO_DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: {
    commentsId: generatedCommentId(),
    avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
    message: generatedComments(),
    name: getRandomArrayElements(NAMES),
  }
});

//Функция создания массива из фотообъектов

const createPhotoObjects = () => Array.from({length:PHOTO_OBJECTS_COUNT}, createPhotoObject);

export {createPhotoObjects};
