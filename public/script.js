//import { compileFunction } from "vm";

console.log("Hola persona de Internet :D")

const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
});

columns.forEach(column =>{
    column.addEventListener('dragover', dragOver);
    // column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
    column.addEventListener('click', mouseClick);

});

let draggedTask = null;

function mouseClick(e){
    const nuevatarea=document.createElement('div')
    nuevatarea.classList.add('task')
    nuevatarea.draggable = true
    nuevatarea.innerHTML=prompt("Agregar nueva tarea")
    nuevatarea.addEventListener('dragstart', dragStart);
    nuevatarea.addEventListener('dragend', dragEnd);
    e.target.appendChild(nuevatarea)
}
function dragStart(e){
    draggedTask = e.target;
    e.dataTransfer.setData("texto", e.target.id) = "task"
}

function dragEnd(){
    // draggedTask = null;
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    // e.preventDefault();
    // this.style.backgroundColor = 'rgb (0, 0, 0)';
}
function dragLeave(e){
    console.log(e)
}

function dragDrop(e){
    // 
    e.preventDefault();
   if(e.target.classList.contains('column')){
    e.target.appendChild(draggedTask)
    draggedTask = null
    console.log(e)
   }
}
function nuevatarea(e){
    const nuevatarea =document.createElement
}