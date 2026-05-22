const taskInput = document.getElementById("taskInput");
const categoryInput = document.getElementById("categoryInput");
const priorityInput = document.getElementById("priorityInput");
const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

const searchInput = document.getElementById("searchInput");
const filterInput = document.getElementById("filterInput");

let tasks = getTasksFromStorage();

renderTasks(tasks, searchInput.value, filterInput.value);


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
        priority: priorityInput.value,
        completed: false
    };

    tasks.push(task);
    saveTasksToStorage(tasks);

    renderTasks(tasks, searchInput.value, filterInput.value);

    taskInput.value = "";
});


searchInput.addEventListener("input", ()=>{
    renderTasks(tasks, searchInput.value, filterInput.value);
});

filterInput.addEventListener("change", () => {
    renderTasks(tasks, searchInput.value, filterInput.value);
});

function deleteTask(id){
    tasks=tasks.filter((task)=>{
        return task.id !== id;
    });

    saveTasksToStorage(tasks);

    renderTasks(tasks, searchInput.value, filterInput.value);
}



function toggleTask(id){
    tasks = tasks.map((task) =>{
        if(task.id === id){
            task.completed = !task.completed;
        }
        return task;
    });

    saveTasksToStorage(tasks);
    renderTasks(tasks, searchInput.value, filterInput.value);
}