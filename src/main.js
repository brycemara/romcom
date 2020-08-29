// Create variables targetting the relevant DOM elements here 👇
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeNewOne = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var savedCoversButton = document.querySelector('.view-saved-button');
var savedView = document.querySelector('.saved-view');
var saveCoverButton = document.querySelector('.save-cover-button');
var makeMyBookButton = document.querySelector('.create-new-book-button');


var coverInput = document.getElementById('cover');
/// This is gonna be a url though... ^^
var titleInput = document.getElementById('title');
var tagline1Input = document.getElementById('descriptor1');
var tagline2Input = document.getElementById('descriptor2');


// Here I am declaring these variables and linking them to the HTML element.

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg",
   "Sunsets and Sorrows",
   "sunsets",
   "sorrows")
];

var currentCover;


// // Add your event listeners here 👇
window.addEventListener('onload', useRandomIndex());
randomCoverButton.addEventListener('click', randomCover);
makeNewOne.addEventListener('click', makeNewCoverByUser);
savedCoversButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', viewHomeScreen);
makeMyBookButton.addEventListener('click', saveCoverMadeByUser)



// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function useRandomIndex() {
  var randomImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomTagline1 = descriptors[getRandomIndex(descriptors)];
  var randomTagline2 = descriptors[getRandomIndex(descriptors)];
  coverImage.src = randomImage;
  coverTitle.innerHTML = randomTitle;
  tagline1.innerHTML = randomTagline1;
  tagline2.innerHTML = randomTagline2;
};

function randomCover() {
  var randomImage = covers[getRandomIndex(covers)];
  coverImage.src = randomImage;
};

function makeNewCoverByUser() {
  homeView.classList.add('hidden');
  formView.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
};

function viewSavedCovers() {
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  savedView.classList.remove('hidden');
};

function viewHomeScreen() {
  homeView.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

function saveCoverMadeByUser() {
  // saving the user data into the arrays
  covers.push(coverInput);
  titles.push(titleInput);
  descriptors.push(tagline1Input);
  descriptors.push(tagline2Input);
  // these arrays aren't in this main.js file though, will they be pushed then?

  // then hide the form view and show the home view
formView.classList.add('hidden')
homeView.classList.remove('hidden')

// also need to display the new image in the home view
coverImage.src = coverInput;
coverTitle.innerHTML = titleInput;
tagline1.innerHTML = tagline1Input;
tagline2.innerHTML = tagline2Input;
};


class Cover {
  constructor(cover, title, tagline1, tagline2) {
    this.cover = cover;
    this.title = title;
    this.tagline1 = tagline1;
    this.tagline2 = tagline2
  }
}

var coverByUser = new Cover(coverInput, titleInput, tagline1Input, tagline2Input);
savedCovers.push(coverByUser);
// saving the cover made by the user into the savedCovers array


//  iteration 3 pseudocoding:
// We're in the new cover form. The user will input the fields and click make my cover button.
// We want to save that data into arrays. (cover, title, tagline1. tagline2 )
//
// Need to create new instance of the cover class. (First we need a cover class)
//
// After the user hits the make my cover we'll be brought back to the main home view.
// that home view will display the cover they just created. (the instance of our Cover class
//
//
//
//

// ..
