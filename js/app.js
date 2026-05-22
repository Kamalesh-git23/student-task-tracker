const taskInput = document.getElementById("taskInput");
const categoryInput = document.getElementById("categoryInput");
const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

const searchInput = document.getElementById("searchInput");

let tasks = getTasksFromStorage();

renderTasks(tasks,searchInput.value);


addBtn.addEventListener("click", ()=>{
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const task = {
        id:Date.now(),
        text: taskText,
        category: categoryInput.value,
        completed: false
    };

    tasks.push(task);
    saveTasksToStorage(tasks);

    renderTasks(tasks,searchInput.value);

    taskInput.value = "";
});


searchInput.addEventListener("input", ()=>{
    renderTasks(tasks,searchInput.value);
});


function deleteTask(id){
    tasks=tasks.filter((task)=>{
        return task.id !== id;
    });

    saveTasksToStorage(tasks);

    renderTasks(tasks,searchInput.value);
}



function toggleTask(id){
    tasks = tasks.map((task) =>{
        if(task.id === id){
            task.completed = !task.completed;
        }
        return task;
    });

    saveTasksToStorage(tasks);
    renderTasks(tasks,searchInput.value);
}