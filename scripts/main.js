// access the div with cat-container id in html and store the div element inside catContainer variable
const catContainer = document.getElementById("cat-container");
console.log(catContainer);

// access the button with fetch-image-button id in html and store the button element inside fetchImageButton variable
const fetchImageButton = document.getElementById("fetch-image-button");

// access the div with cat-facts id in html and store the div element inside catFacts variable
const catFacts = document.getElementById("cat-facts");
console.log(catFacts);

// access the button with load-more-button id in html and store the button element inside loadMoreButton variable
const loadMoreButton = document.getElementById("load-more-button");
console.log(loadMoreButton);

const fetchCatFacts = () => {
  // set `Loading...` text while fetching the cat facts
  loadMoreButton.innerText = "Loading...";

  // fetch cat facts
  fetch("https://cat-fact.herokuapp.com/facts/random?amount=3")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data) and visualize it in browser to extract useful information for us
      console.log(data);

      // use forEach array method to iterate over each fact(array element) and set innerHTML of the cat-facts div
      data.forEach((fact) => {
        catFacts.innerHTML += `
        <div  class="fact-block">
            <p>${fact.text}</p>
        </div>
            `;
      });

      // replace `Loading...` text with `Load More` after fetching the facts
      loadMoreButton.innerText = "Load More";
    });
};

const fetchCatImage = () => {
  // set `Loading...` text while fetching the cat image
  fetchImageButton.innerText = "Loading...";

  // fetch cat image
  fetch("https://cataas.com/cat?json=true")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data) and visualize it in browser to extract useful information for us
      console.log(data);

      // set innerHTML of cat-container div to the image
      catContainer.innerHTML = `<img id="cat-image" src="https://cataas.com/${data.url}">`;

      // replace `Loading...` text with `Fetch New Image` after fetching the image
      fetchImageButton.innerText = "Fetch New Image";
    });
};

// fetch the facts and image when page is initially loaded
fetchCatFacts();
fetchCatImage();
