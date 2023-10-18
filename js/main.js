const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;

        taskList.appendChild(li);

        taskInput.value = "";

        const deleteBtn = li.querySelector(".delete");
        deleteBtn.addEventListener("click", function () {
            li.remove();
        });
    }
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
