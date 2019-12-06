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

axios.get("https://lambda-times-backend.herokuapp.com/articles")

     .then(response => {
         console.log("Fetched!", response);
         Object.values(response.data.articles).forEach(item => {
             item.forEach(item => {
                 let cards = document.querySelector('.cards-container');
                 cards.appendChild(createArticle(item));
                })
            })
        }) 
        
        .catch(err => {
            console.log("Error: The data was not returned!", err);
        })

 function createArticle(article) {
        // The Main Variables 

        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        const span = document.createElement('span');

        // Add Classes
        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');
        span.classList.add('span');

        // Article textContent
        headline.textContent = article.headline;
        img.src = article.authorPhoto;
        span.textContent = `By ${article.authorName}`;
        

        // Element Structure 
        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(img);
        card.appendChild(span);

// ↓↓↓ DONT FORGET TO RETURN THE CARD ↓↓↓
            return card;
        }








  

