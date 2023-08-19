
type Task= {
  title: string;
  description: string;
}


function displayTask(): void {
  const titleInput = document.getElementById("title") as HTMLInputElement;
  const descriptionInput = document.getElementById("description") as HTMLTextAreaElement;

  const task: Task = {
    title: titleInput.value,
    description: descriptionInput.value,
  };

  console.log("the title is ",task.title);
  console.log("moshkel dari ma darim inja zahmat mikeshim:", task.description);
}

// Add event listener to the button
const displayButton:any= document.getElementById("display-button");
displayButton.addEventListener("click", displayTask);