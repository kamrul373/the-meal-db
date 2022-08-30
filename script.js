// loading meal data
const searchMeal = async () => {
    const mealName = document.getElementById("meal-name").value;

    // validation
    if (mealName === "") {
        errorMessage("block");
    } else {
        // validation
        errorMessage("none");
        // spinner during searching
        spinner();
        // fetching
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
        const response = await fetch(url);
        const meals = await response.json();
        // passing response object to a function
        displayMeals(meals.meals);
    }
}
// displaying meal data in UI
const displayMeals = meals => {
    // spinner disabling 
    spinner("none");
    // meal showing process in UI
    const mealsContainer = document.getElementById("meals");
    // cleaning before new elements appearing
    mealsContainer.innerHTML = "";
    // looping meal data
    meals.forEach(meal => {
        // destructuring meal data
        const { idMeal: id, strMeal: mealName, strMealThumb: thumb, strArea: area, strInstructions: instruction } = meal;
        // creating new element
        const div = document.createElement("div");
        div.classList.add("col");

        // searching results
        div.innerHTML = `
        <div class="card">
            <img src="${thumb}" class="card-img-top" alt="${mealName}">
            <div class="card-body">
                <h5 class="card-title">${mealName}</h5>
                <p class="card-text"><strong>Area</strong>: ${area}</p>
                <p><strong>Instruction</strong> : ${instruction.slice(0, 150)} ... </p>
                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="loadmealdetails('${id}')">See Detail instruction</button>
            </div>
        </div>
        `
        mealsContainer.appendChild(div);


    })

}
// loading single meal details
const loadmealdetails = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
        .then(response => response.json())
        .then(mealDetails => displayMealDetails(mealDetails.meals[0]));

}
// displaying single meal
const displayMealDetails = mealDetails => {
    const mealDetailsContainer = document.getElementById("meal-details-container");
    const { strMeal: mealName, strMealThumb: thumb, strInstructions: instruction } = mealDetails;

    mealDetailsContainer.innerHTML = `
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${mealName}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="${thumb}" class="img-fluid w-25 " />
            <strong class="d-block">Ingredients :</strong>
            <ul id="ingredients"></ul>
            <p class="mt-1"><strong>Instructions</strong> : ${instruction}</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    `
    const ingredients = getIngredients(mealDetails);
    const Ingredientscontainer = document.getElementById("ingredients")
    for (const ingredient of ingredients) {
        const li = document.createElement("li");
        li.innerText = ingredient;
        Ingredientscontainer.appendChild(li);
    }

}
