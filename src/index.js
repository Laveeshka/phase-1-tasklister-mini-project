document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
  //listen to submit event on the form element
  //recall the addEventListener method takes the event name in string and a callback function. We pass the event object to the callback function
  form.addEventListener("submit", e => {
    //perform callback tasks here
    e.preventDefault(); //suppress the default behaviour of the submit event (reloads the page)
    console.log(e.target.newTaskDescription.value);
   createTaskHandler(e.target.newTaskDescription.value);
   form.reset();
  });
});

//create task callback function
function createTaskHandler(task){
  let li = document.createElement("li");
  li.textContent = `${task}  `;
  //create delete button attached to the link
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = 'x';
  li.appendChild(deleteBtn);
  let ul = document.getElementById("tasks");
  ul.appendChild(li);

  //listen to delete event when we click on the delete button
  deleteBtn.addEventListener("click", deleteTaskHandler);
}

function deleteTaskHandler(e){
  e.target.parentNode.remove();
}
