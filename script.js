import { compileFunction } from "vm";

console.log("Hola personita de internet n.n <33")

const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

tasks.forEach(task => {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
});

columns.forEach(column =>{
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
});

let draggedTask = null;

function dragStart(){
    draggedTask = this;
    setTimeout(()=> (this.style.display = 'none'), o);
}
function dragEnd(){
    draggedTask = null;
    setTimeout(()=> (this.style.display = ''), o);
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
    this.style.backgroundColor = 'rgb (0, 0, 0)';
}
function dragleave(){
    this.style.backgroundColor = '';
}
function dragDrop(){
    this.apprendChild(draggedTask);
    this.style.backgroundColor = '';
}