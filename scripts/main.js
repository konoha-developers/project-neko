const catContainer = document.getElementById("cat-container");
const catFacts = document.getElementById("cat-facts");
const loadMoreButton = document.getElementById("load-more-button");

const fetchCatFacts = () => {
  loadMoreButton.innerText = "Loading...";

  fetch("https://cat-fact.herokuapp.com/facts/random?amount=3")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      data.forEach((fact) => {
        catFacts.innerHTML += `
        <div  class="fact-block">
            <p>${fact.text}</p>
        </div>
            `;
      });

      loadMoreButton.innerText = "Load More";
    });
};

const fetchCatImage = () => {
  const loadingText = `<h1>Loading...</h1>`;
  catContainer.innerHTML = loadingText;

  fetch("https://cataas.com/cat?json=true")
    .then((res) => res.json())
    .then((data) => {
      const result = `<img id="cat-image" src="https://cataas.com/${data.url}">`;
      console.log(data);

      catContainer.innerHTML = result;
    });
};

fetchCatFacts();
fetchCatImage();
