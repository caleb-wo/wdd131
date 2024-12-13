import recipes from './recipes.mjs';
const recipeBox = document.querySelector('.recipeBox');

const main = () => {
    // get random number
    let random_num = randomNumberGen();
    // get random recipe
    let random_recipe = getRecipe(random_num);
    // insert recipe data
    recipeBox.innerHTML = recipeInsert(random_recipe);
    // tag insert and rating insert
    tagInsert(random_recipe.tags);
    ratingDisplay(random_recipe.rating);
}

const randomNumberGen = () => {
    console.log("Inside randomNumberGen");
    const number = Math.floor(Math.random() * 9);
    return number
}

const getRecipe = (indexNum) => {
    const randomRecipe = recipes[indexNum];
    return randomRecipe
}

const recipeInsert = (object) => {
    const author = object.author;
    const cookTime = object.cookTime;
    const image = object.image;
    const title = object.name;
    const desc = object.description;

    let insert = `
    <img src="${image}">
    <section class="recipeInfo">
        <div id="tagFlexbox"></div>
		<h1 id="foodName">${title}</h1>
		<p>${desc}</p>
	    </section>
    `;
    return insert
}   

const tagInsert = (list) => {
    let tag = undefined
    let newTag = ''
    let tagFlex = document.querySelector('#tagFlexbox');
    for (let i = 0; i < list.length; i++) {
        tag = list[i];
        newTag = document.createElement('div');
        newTag.classList.add('genreTag');
        newTag.innerText = tag;
        tagFlex.insertAdjacentElement('afterbegin' , newTag);
    }

}

const ratingDisplay = (rating) => {
    let recipeRating = document.querySelector('.recipeInfo');
    let insertHtml = ''
    switch (rating) {
        case 1:
            insertHtml = `
            <span class="rating" role="img" aria-label="Rating: 1 out of 5 stars">
		    <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span></span>`;
            break;
        case 2:
            insertHtml = `
            <span class="rating" role="img" aria-label="Rating: 2 out of 5 stars">
		    <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span></span>`;
            break;
        case 3:
            insertHtml = `
            <span class="rating" role="img" aria-label="Rating: 3 out of 5 stars">
		    <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span></span>`;
            break;
        case 4:
            insertHtml = `
            <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
		    <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star-empty">☆</span></span>`;
            break;
        case 5:
            insertHtml = `
            <span class="rating" role="img" aria-label="Rating: 5 out of 5 stars">
		    <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span>
            <span aria-hidden="true" class="icon-star">⭐</span></span>`;
    }
    recipeRating.insertAdjacentHTML('beforeend' , insertHtml);
}

// Call the function when the DOM is fully parsed
document.addEventListener("DOMContentLoaded", main);
