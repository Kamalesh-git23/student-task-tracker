const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");


let tasks = [];

addBtn.addEventListener("click", ()=>{
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const task = {
        id:Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);

    renderTasks();

    taskInput.value = "";
});

searchInput.addEventListener("input", ()=>{
    renderTasks(searchInput.value);
});

function renderTasks(searchText = ""){
    taskList.innerHTML = "";
    
    const filteredTasks = tasks.filter((task)=>{
        return task.text.toLowerCase().includes(searchText.toLowerCase());
    });

    filteredTasks.forEach((task)=>{
        const li = document.createElement("li");
        li.className = "tracker_item";

        if (task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `<span>${task.text}</span>

                        <div>

                            <button onclick="toggleTask(${task.id})">
                            Complete </button>

                            <button onclick="deleteTask(${task.id})">
                            Delete </button>
                        </div>`;

        taskList.appendChild(li);
    });
}

function deleteTask(id){
    tasks=tasks.filter((task)=>{
        return task.id !== id;
    });

    renderTasks();
}

function toggleTask(id){
    tasks = tasks.map((task) =>{
        if(task.id === id){
            task.completed = !task.completed;
        }
        return task;
    });

    renderTasks();
}