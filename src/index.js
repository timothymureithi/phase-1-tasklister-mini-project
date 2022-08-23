

const list = document.querySelector("#list")
console.log(list)

const taskInput = document.querySelector("#new-task-description")
const taskForm = document.querySelector("#create-task-form")

//document.addEventListener("DOMContentLoaded", () => {
  // your code here
//console.log("hello world")

//});

taskForm.addEventListener("submit", function (e) {
  e.preventDefault()

  //grab the tasklist
  const taskList = document.querySelector("#tasks")
  //create/add new task item
  const taskItem = document.createElement('li')
  //give it value
  taskItem.innerHTML = taskInput.value

  //make button
  const deleteButton = document.createElement('button')
  deleteButton.innerText = "x"
 


  //priority level
  const dropDown = document.getElementById("priority");
  const dropDownValue = dropDown.options[dropDown.selectedIndex].value;

  if (dropDownValue === "high"){
    taskItem.style.backgroundColor = "red";
  }else if (dropDownValue === "medium"){
    taskItem.style.backgroundColor = "yellow";
  }else if (dropDownValue === "low"){
    taskItem.style.backgroundColor = "green";
  }


   
   taskList.appendChild(taskItem)

   taskItem.appendChild(deleteButton)

   //Button deletes task item
   deleteButton.addEventListener("click", function (e){
    taskItem.remove()
   })

  taskForm.reset()
})


