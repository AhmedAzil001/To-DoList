const title=document.getElementById("title");
const description=document.getElementById("description");
const form=document.querySelector("form");
const container=document.querySelector(".container");

const tasks=localStorage.getItem("task")? 
JSON.parse(localStorage.getItem("task")) : [];

showAllTasks();

const clicked=false;

function showAllTasks(){
    tasks.forEach((value,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv=document.createElement("div");
        div.append(innerDiv);

        const inputText=document.createElement("input");
        inputText.setAttribute("class","text");
        inputText.setAttribute("readonly","readonly");
        inputText.value=value.title;
        innerDiv.append(inputText)
        
        const inputDescription=document.createElement("p");
        inputDescription.setAttribute("class","InDes");
        inputDescription.innerText=value.description;
        innerDiv.append(inputDescription);

        const checkBox=document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        checkBox.setAttribute("class","checkbox");
        div.append(checkBox);
        checkBox.addEventListener("click",()=>{
            if(checkBox.checked){
                inputText.style.textDecoration="line-through";
                inputDescription.style.textDecoration='line-through'
            }else{
                inputText.style.textDecoration='none'
                inputDescription.style.textDecoration='none'
            }
            
        })

        const iconDelete=document.createElement("i");
        iconDelete.setAttribute("class","fa-solid fa-trash");

        

        const btnDelete=document.createElement("button");
        btnDelete.setAttribute("class","btn");
        btnDelete.append(iconDelete);
        btnDelete.addEventListener("click",()=>{
            removeTask();
            tasks.splice(index,1);
            localStorage.setItem("task",JSON.stringify(tasks));
            showAllTasks();
        })
        div.append(btnDelete);

        container.append(div);
    });
}

function removeTask(){
    tasks.forEach(()=>{
        const div=document.querySelector(".task");
        div.remove();
    })
}

form.addEventListener("submit" ,(e) =>{
    e.preventDefault();
    removeTask();
    tasks.push({
        title:title.value,
        description:description.value
    })
    localStorage.setItem("task",JSON.stringify(tasks));
    showAllTasks();
});




// edit btn:

// const btnEdit=document.createElement("button");
// btnEdit.setAttribute("class","btn");
// btnEdit.append(iconEdit);
// btnEdit.addEventListener("click", ()=>{
//     inputText.removeAttribute("readonly");
//     inputText.focus();
//     inputText.addEventListener("blur",(e)=>{
//         inputText.setAttribute("readonly","readonly");
//         tasks.title=e.target.value;
//         localStorage.setItem("task",JSON.stringify(tasks));
//     });
// });

// div.append(btnEdit);
