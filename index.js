"use strict";
function displayTask() {
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const task = {
        title: titleInput.value,
        description: descriptionInput.value,
    };
    console.log("the title is ", task.title);
    console.log("moshkel dari ma darim inja zahmat mikeshim:", task.description);
}
// Add event listener to the button
const displayButton = document.getElementById("display-button");
displayButton.addEventListener("click", displayTask);
