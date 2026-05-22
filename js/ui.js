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

        li.innerHTML = `<div class="tracker_content">
                            <span class="tracker_category ${task.category.toLowerCase()}">${task.category}</span>
                    
                            <span class="tracker_task-text">${task.text}</span>
                        </div>

                        <div class="tracker_actions">
                            <button onclick="toggleTask(${task.id})"><i class="fa-solid fa-check"></i>
                            Complete </button>

                            <button onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i>
                            Delete </button>
                        </div>`;

        taskList.appendChild(li);
    });
}
