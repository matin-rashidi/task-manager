export const saveTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
};
