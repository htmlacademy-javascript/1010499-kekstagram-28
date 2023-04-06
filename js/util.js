const checkStringLength = function (string, length) {
  if (string.length === length) {
    return true;
  }
  return false;
};
checkStringLength('cat', 5);

const isStringPolindrom = function (string) {
  const lowerCaseString = string.toLowerCase().replaceAll(' ', '');
  const reverse = lowerCaseString
    .split('')
    .reverse()
    .join('')
    .replaceAll(' ', '');
  if (lowerCaseString === reverse) {
    return true;
  }
  return false;
};

isStringPolindrom('Лёша на полке клопа нашёл');

const findNumbers = function (string) {
  let number = '';
  for (const i in string) {
    if (!isNaN(parseInt(string[i], 10))) {
      number += string[i];
    }
  }
  if (number === '') {
    return NaN;
  }
  return number;
};
findNumbers('2023 год');

const fillString = function (string, minLength, additionalString) {
  if (string.length >= minLength) {
    return string;
  } else if (string.length + additionalString.length < minLength) {
    let difference = minLength - string.length;
    let additionalStringMore = '';
    while (difference > 0) {
      difference--;
      additionalStringMore += additionalString;

      if (additionalStringMore.length === minLength) {
        return additionalStringMore + string;
      }
    }
    return additionalStringMore + string;
  } else if (string.length + additionalString.length > minLength) {
    return additionalString.slice(0, (minLength -= 1)) + string;
  }
  return additionalString + string;
};

fillString('1', 2, '0');

//Функция возвращает случайное целое положительное число
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция возвращает случайный элемент массива

const getRandomArrayElements = (elements) => elements [getRandomInteger(0, elements.length - 1)];

// Функция для генерации уникального числа из указанного дипазона
const getUniqueNumber = (min, max) => {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length > (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {getRandomInteger, getRandomArrayElements, getUniqueNumber};
