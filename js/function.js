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
