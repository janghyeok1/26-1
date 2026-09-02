/*202312372 장혁*/
window.onload = changeColor;
function changeColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.querySelector("header").style.color = rgb;
    document.querySelector("nav").style.backgroundColor = rgb;
    setTimeout(changeColor,3000);
}
function Task(taskInput, taskDate, priority){
    this.taskInput = taskInput;
    this.taskDate = taskDate;
    this.priority = priority;
    this.showTask = function(){
        return `${this.taskDate} : ${this.taskInput} ( ${this.priority} )`;
    }
}
let myTask = [];
function addTask(){
    let a = document.querySelector("#taskInput").value;
    let b = document.querySelector("#taskDate").value;
    let c = document.querySelector("#priority").value;
    let add = new Task(a,b,c);
    myTask.push(add);
}
function showList(){
    document.querySelector("#taskList").innerHTML = "";
    for(let i = 0;i < myTask.length;i++){
        let t = myTask[i].showTask();
        let li = document.createElement("li");
        let now = new Date();
        let target = new Date(myTask[i].taskDate);
        target.setHours(9,0,0,0);
        let days = Math.floor((target - now) / (1000*60*60*24));
        let hours = Math.floor(((target - now) % (1000*60*60*24)) / (1000*60*60));
        if(target - now < 0) li.innerText = `${t}, 남은시간: 마감일 경과`;
        else li.innerText = `${t}, 남은시간: ${days}일 ${hours}시간`;
        if(myTask[i].priority == "매우 중요") li.style.color = "red";
        if(myTask[i].priority == "중요") li.style.color = "blue";
        document.querySelector("#taskList").append(li);
    }
}
function sortList(){
    for(let i = 0;i < myTask.length - 1;i++){
        let sort = i;
        for(let j = i + 1; j < myTask.length;j++){
            if(myTask[sort].taskDate > myTask[j].taskDate) sort = j;
        }
        let temp = myTask[i];
        myTask[i] = myTask[sort];
        myTask[sort] = temp;
    }
    showList();
}