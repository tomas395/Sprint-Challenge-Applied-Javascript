// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const parentArticle = document.querySelector('.cards-container')

   axios
  .get ("https://lambda-times-backend.herokuapp.com/articles")
  
  .then(res => {
      console.log("Fetched!".res);
    // ill need a forEach here
  });

  .catch(err => {
    console.log("Error: The data was not returned!", err);
  });

function artCreator(artInfo) {

// The Main Variables
const artCard = document.createElement('div');
const artHeadline = document.createElement('div');
const newAuthor = document.createElement('div');
const imgCont = document.createElement('div');
const authorImg = document.createElement('img');
const authorSpan = document.createElement('span');

// Add Classes

artCard.classList.add('card');
artCard.classList.add('headline');
artCard.classList.add('author');
artCard.classList.add('img-container');
artCard.classList.add('img');
artCard.classList.add('span');

// Element Structure

articleHeadline.appendChild(artCard);
newAuthor.appendChild(artCard);
imgCont.appendChild(newAuthor);
authorImg.appendChild(imgCont);
authorSpan.appendChild(artCard);

// Article textContent

articleHeadline.textContent = artInfo.headline;
authorImg.src = artInfo.authorPhoto;
newAuthor.textContent = artInfo.authorName;

return artCard;
}




  

