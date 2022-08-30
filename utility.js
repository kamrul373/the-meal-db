// error message display function
function errorMessage(mealName) {
    if (mealName == "") {
        document.getElementById("error").classList.remove("d-none");
    } else {
        document.getElementById("error").classList.add("d-none");
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
