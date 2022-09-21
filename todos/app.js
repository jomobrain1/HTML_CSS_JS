const input=document.getElementById('input')
let form=document.getElementById("form")
let submit=document.getElementById("submit")

function mainTask(){
let allTasksBox=document.getElementById("tasks")
let mainBox=document.createElement('section')
let  subinputbox=document.createElement('div')
let mainBoxTitle=document.createElement("h3")
let input2=document.createElement('input')
subinputbox.classList.add('subinputbox')
mainBox.classList.add('subtasks')
mainBoxTitle.innerText=input.value
subinputbox.append(mainBoxTitle)
subinputbox.append(input2)
mainBox.append(subinputbox)

allTasksBox.append(mainBox)



    


}
function mainTaskJson(task){
let tasks=[]
if(task){
    
}

}

submit.onclick=(e)=>{
    e.preventDefault();
    mainTask()
}