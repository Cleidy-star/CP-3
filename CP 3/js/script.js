document.getElementById('todo-form').addEventListener('submit', function(e)){
e.preventDefault();

const taskInput = document.getElementById('new-task');
const taskTexte = taskInput.value.trim();

if(taskTexte !==''){
    const taskList = document.getElementById('todo-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent =document.createElement('span');
    taskContent.textContent = taskText;
}

}