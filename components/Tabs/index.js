// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")

  .then(res => {
    console.log("Fetched!", res);
    const createdTab = tabCreator(res.data);
    const tabParent = document.querySelector('.topics')
    tabParent.appendChild(createdTab);
  })

  .catch(err => {
    console.log("Error: The data was not returned!", err);
  });

function tabCreator(tabInfo) {
    // div variable
    const tabs = document.createElement('div');

    //div class
    tabs.classList.add('tab');

    //div textContent
    tabs.textContent = `${tabInfo.topics}`;

// ↓↓↓ DONT FORGET TO RETURN THE TABS ↓↓↓
    return tabs;
}