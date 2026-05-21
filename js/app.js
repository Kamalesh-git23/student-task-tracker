const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

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

function renderTasks(){
    taskList.innerHTML = "";

    tasks.forEach((task)=>{
        const li = document.createElement("li");
        li.className = "tracker_item";

        li.innerHTML = `<span class="${task.completed ? 'completed':''}">${task.text}</span>

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