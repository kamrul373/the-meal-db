// error message display function
function errorMessage(display) {
    if (display == "block") {
        document.getElementById("error").innerHTML = `<div class="alert alert-warning" role="alert">Please type a food name !</div>`
    } else {
        document.getElementById("error").style.display = "none"
    }
}
// spinner display function
function spinner(display = "block") {
    if (display == "block") {
        document.getElementById("spinner").style.display = "block";
    } else {
        document.getElementById("spinner").style.display = "none";
    }
}
function getIngredients(mealDetails) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        // ingredient name
        let ingrdientName = "strIngredient" + i;
        ingrdientName = mealDetails[ingrdientName];

        // ingredients meassure
        let ingredientMeassure = "strMeasure" + i;
        ingredientMeassure = mealDetails[ingredientMeassure];

        if (ingrdientName != "") {
            let ingredientWithMeassure = ingrdientName + " : " + ingredientMeassure;
            ingredients.push(ingredientWithMeassure);
        }
    }
    return ingredients;
}
