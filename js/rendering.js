
import {createPhotoObjects} from './data.js';

const photoTemplate = document.querySelector('#picture').content;
const photoContainer = document.querySelector('.pictures');

const similarDescriptionsFragment = document.createDocumentFragment();
const photoObjectsArray = createPhotoObjects();


photoObjectsArray.forEach(({url, likes, comments}) => {
  const photoObject = photoTemplate.cloneNode(true);
  photoObject.querySelector('.picture__img').src = url;
  photoObject.querySelector('.picture__comments').textContent = comments.length;
  photoObject.querySelector('.picture__likes').textContent = likes;
  similarDescriptionsFragment.append(photoObject);
});


// renderingObjects();
photoContainer.append(similarDescriptionsFragment);

// export {photoContainer, similarDescriptionsFragment};
