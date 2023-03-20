const idList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const urlList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25,
];

const description = ['cool', 'bad', 'not bad', 'not cool', 'fine'];

// const avatarList = [
//   1, 2, 3, 4, 5, 6
// ];
// const massageList = [
//   'Всё отлично!', 'В целом всё неплохо. Но не всё.'
// ]
// const nameList = [
//   'Артем', 'Дима', 'Петя', 'Ваня', 'Санек', 'Миша',
// ];

const photosCount = 25;
// const commentsCount = 2;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// const getRandomUniqInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   let upper = Math.floor(Math.max(a, b));
//   while(upper--){
//     const result = Math.random() * 25 + 1;
//     return Math.floor(result);
//   }
// };

// const getRandomArr = (a,b) => {
//   const nums = new Set();
//   while(nums.size !== b) {
//     nums.add(Math.floor(Math.random() * b) + a);
//   }
//   let random = [...nums].slice(0);
//   console.log(random)
//   return random;

// };


const photoDescription = () => {
  // const randomIdListIndex = getRandomInteger(0, idList.length - 1);
  // const randomUrlIndex = getRandomInteger(0, url.length - 1);
  const randomDescriptionIndex = getRandomInteger(0, description.length - 1);
  return {
    id: idList.shift(),
    url: `photos/${urlList.shift()}.jpg`,
    description: description[randomDescriptionIndex],
    likes: getRandomInteger(15, 200),
    comments :{
      id: 135,
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Артём',
    },
    // const photoComments = () => {
    //   const randomNameIndex = getRandomInteger(0, nameList.length - 1);
    //   const randomMessageIndex = getRandomInteger(0, massageList.length - 1);
    //   return {
    //     id: 135,
    //     avatar: `img/avatar-${avatarList.shift()}.svg`,
    //     message: massageList[randomMessageIndex],
    //     name: avatarList[randomNameIndex],
    //   },
    // }
  };
};
// const commentList = Array.from({ length: commentsCount }, photoComments());
// const photoList
Array.from({ length: photosCount }, photoDescription);

// console.log(photoList);
// console.log(commentList);
