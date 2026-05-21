function saveTasksToStorage(tasks){

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromStorage(){
    return JSON.parse(localStorage.getItem("tasks")) || [];
}