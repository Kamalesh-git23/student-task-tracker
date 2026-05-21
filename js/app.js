const taskInput = document.getElementById("taskInput");
const addbtn = document.getElementById("addbtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addbtn.addEventListener("click", ()=>{
    const taskText = taskInput.ariaValueMax.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const task = {
        id:Date.now(),
        text: taskTest
    };

    tasks.push(task);

    renderTasks();

    taskInput.value = "";
});

function renderTasks(){
    taskList.innerHtml = "";

    tasks.forEach((task)=>{
        const li = document.createElement("li");
        li.className = "tracker_item";

        li.innerHTML = `<span>${task.text}</spam>`;

        taskList.appendChild(li);
    });
}