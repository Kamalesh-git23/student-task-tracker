function renderTasks(tasks, searchText = ""){
    taskList.innerHTML = "";
    
    const filteredTasks = tasks.filter((task)=>{
        return task.text.toLowerCase().includes(searchText.toLowerCase());
    });

    const priorityOrder = { High: 1, Medium: 2, Low: 3 };

    filteredTasks.sort((a, b) => {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    filteredTasks.forEach((task)=>{
        
        const li = document.createElement("li");
        li.className = "tracker_item";

        if (task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `<div class="tracker_content">

                            <div class="tracker_badges">
                                <span class="tracker_category ${task.category.toLowerCase()}">${task.category}</span>
                            
                                <span class="tracker_priority ${task.priority.toLowerCase()}">
                                    <i class="fa-solid fa-flag"></i>
                                    ${task.priority}
                                </span>
                            </div>
                    
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
