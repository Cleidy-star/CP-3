document.getElementById('todo-form').addEventListener('submit', function(e)){
e.preventDefault();

const taskInput = document.getElementById('new-task');
const taskTexte = taskInput.value.trim();

if(taskTexte !==''){;
    const taskList = document.getElementById('todo-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskContent =document.createElement('span');
    taskContent.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.className ='delete-button';
    deleteButton.innerHTML = '🗑️'
    deleteButton.title = 'Excluir tarefa';
    deleteButton.addEventListener('click', function()){
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskContent);
    taskContent.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskInput.focus();

}

}