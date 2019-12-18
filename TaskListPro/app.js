// Defining UI Variables
const taskList=document.querySelector(".collection");
const taskInput=document.querySelector("#task");
const filter=document.querySelector('#filter');
const form=document.querySelector('#task-form');
const clearBtn=document.querySelector(".clear-tasks");


// Loading all event listeners
loadAllEventListeners();

function loadAllEventListeners(){
    // Adding task event
    form.addEventListener("submit",addTask);
    // Removing task event
    taskList.addEventListener("click",removeTask);
    // Clearting task event
    clearBtn.addEventListener("click",clearTasks);


}

// Defining addTask
function addTask(e){
    if(taskInput.value===""){
        alert("Please enter an input.")        
    }

    // Create li element
    const li=document.createElement("li");
    // Add class
    li.className='collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create a new link element
    const link=document.createElement('a');
    // Add class
    link.className="delete-item secondary-content";
    // Create html icon
    link.innerHTML='<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li); 

    // Clear input field
    taskInput.value="";


    e.preventDefault();
    

}

// Remove task
function removeTask(e){
    
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
    }
    
}

// Clear tasks
function clearTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}