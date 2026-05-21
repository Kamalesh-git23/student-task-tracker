function renderTasks(tasks, searchText = ""){
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
