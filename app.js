let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currmode="dark";
let input= document.getElementById('input-box');
let button= document.querySelectorAll("button");
let String= "";
let arr=Array.from(button);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id === 'mode'){
            return;

        }
        else if(e.target.innerText=='='){
            String=eval(String);
            input.value=String;
        }
        else if(e.target.innerText=='AC'){
            String ="";
            input.value=String;
        }
        // else if(e.target.innerText=='Mode'){
        //     // String ="";
        //     // input.value = String;
        //     return;
        // }
        else if(e.target.innerText=='DEL'){
            String= String.substring(0,String.length-1);
            input.value=String;
        }
        else{
        String+=e.target.innerText;
        input.value=String;
        }
    })
})

modebtn.addEventListener("click",()=>{
    if(currmode==="dark"){
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    else{
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
});

