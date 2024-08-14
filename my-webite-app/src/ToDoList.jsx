import React,{useState} from 'react';

function ToDoList(){
const [tasks,setTasks]=useState(["Eat Breakfast","Take a shower","walk the dog"]);
const[newTask,setNewTask]=useState("");
function handleInputChange(event){
setNewTask(event.target.value);

}
function addTask(){
    if(newTask.trim() !=="")
        {setTasks(t=>[...t,newTask]);
        setNewTask("");
        }

}
function deleteTask(index){
const updateTasks=tasks.filter((_,i) => i !==index);
setTasks(updateTasks)
}
function moveTaskUp(index){

    if (index>0){
        const updateTasks=[...tasks];
        [updateTasks[index],updateTasks[index-1]]=
        [updateTasks[index-1],updateTasks[index]];
        setTasks(updateTasks);
    }




}

function moveTaskDown(index){

    if (index < tasks.length -1){
        const updateTasks=[...tasks];
        [updateTasks[index],updateTasks[index+1]]=
        [updateTasks[index+1],updateTasks[index]];
        setTasks(updateTasks);
    }

}

return (
<div className="to-do-list">
    <h1>To-Do-List</h1>
    <div>
    <input 
    
    type="text"
    placeholder='Enter a Task...'
    value={newTask}
    onChange={handleInputChange}
    />
    <button className="add-button"
    onClick={addTask}>
        add

    </button>





    </div>

<ol>
{tasks.map((task,index)=>
<li key={index}>
    <span className="text">{task}</span>
    <button
    className="delect-button"
    onClick={() => deleteTask(index)}
    >
        delect

    </button>
    <button
    className="move-button"
    onClick={() => moveTaskUp(index)}
    >
        up

    </button>
    <button
    className="move-button"
    onClick={() => moveTaskDown(index)}
    >
        down

    </button>
    
    
    </li>



)}

</ol>



</div>);
}
export default ToDoList