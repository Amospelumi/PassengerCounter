// document.getElementById("count-el").innerText = 5;


// let count = 0;

// console.log(count);

let count = 0
let increase = document.getElementById('count-el')
let decrease = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')

// increment function

function increment(){
    increase.innerText = count+=1
}


//  decrement function

function decrement(){
    if (count <= 1){
        count = decrease.innerText = 0
        return count
    }else{
        decrease.innerText = count -= 1
    }
}

// save function

function save(){
    saveEl.innerText += count + " -"
    increase.innerText = 0
    count = 0
       
}

