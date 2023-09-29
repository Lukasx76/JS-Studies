const inputTask = document.querySelector(".inputTask");
const addBtn = document.querySelector(".addTaskBtn");
const taskList = document.querySelector(".tasksList");


function clearInput(){
    inputTask.value = '';
    inputTask.focus();
}

function createLiTag(){
    const li = document.createElement("li");
    return li;
}

function createDeleteButton(li) {
    li.innerText += " ";
    const delButton = document.createElement("button");
    delButton.innerText = "Apagar";
    delButton.setAttribute("class", "delete");
    li.appendChild(delButton);
}

function addTask(valueText){
    const li = createLiTag();
    li.innerText = valueText;
    taskList.appendChild(li);
    clearInput();
    createDeleteButton(li);
    saveTasks()
}

function saveTasks(){
    const nodeTasksList = taskList.querySelectorAll("li");
    const arrayTaskList = []

    for (let task of nodeTasksList) {
        let taskText = task.innerText;
        taskText = taskText.replace("Apagar", "").trim();
        arrayTaskList.push(taskText);
    }

    const jsonTasks = JSON.stringify(arrayTaskList);
    localStorage.setItem("tasks", jsonTasks);
}

function addSavedTasks(){
    const localTasks = localStorage.getItem("tasks");
    const parsedJsonTasks = JSON.parse(localTasks);

    for (const task of parsedJsonTasks) {
        addTask(task);
    }
}


addBtn.addEventListener("click", function() {
    if (!inputTask.value) return;
    addTask(inputTask.value);
})

inputTask.addEventListener("keypress", function(e){
    if (e.keyCode === 13){
        if (!inputTask.value) return;
        addTask(inputTask.value)
    }    
})

document.addEventListener("click", function(e){
    const element = e.target;
    if (element.classList.contains("delete")){
        element.parentElement.remove();
        saveTasks();
    }
}
)

addSavedTasks();