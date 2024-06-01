// document.getElementById('count').innerText=5;
let count =0;
let countEl = document.getElementById("count");
let saveEl=document.getElementById("save");

function increment(){

    console.log("button was clicked");
    count++;
    countEl.innerText=count;
    
}

function decrement(){
    console.log("button was clicked");
    if(count<=0){
        console.log("can not decrement further")
    }
    else{
        count--;

    }
    
    countEl.innerText=count; 

}

function save(){
    console.log(count);
    let message=count + " - "
    saveEl.textContent+=message
    count=0;
    countEl.textContent=0;
    
    

}