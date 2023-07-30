let btn = document.querySelector("button");    // otra manera de capturar otro elemento segun "elemento"
let ul= document.querySelector("ul");


btn.addEventListener("click", function(){
    
    let inpt= document.querySelector("input").value;


    
    if(inpt.trim()!== ""){


    //creación de elementos
        let li= document.createElement("li")
        li.textContent= inpt
        li.appendChild(addDeletBtn())  //<li> textoo <button> </li>
    //adjuntar el elemento creado dentro el ul
        ul.appendChild(li)
    }
   
})


function addDeletBtn() {
    let deleteBtn= document.createElement("button");
    deleteBtn.textContent= "X";

    deleteBtn.addEventListener("click", (e) =>{
        let item= e.target.parentElement;
      
        ul.removeChild(item)
    })
    
    return deleteBtn;
}