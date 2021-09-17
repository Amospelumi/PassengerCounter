// document.getElementById("count-el").innerText = 5;


// let count = 0;

// console.log(count);

let count = 0
// increment function

function increment(){
    document.getElementById('count-el').innerText = count+=1
}

function decrement(){
    if (count <= 1){
        count = document.getElementById('count-el').innerText = 0
        return count
    }else{
        document.getElementById('count-el').innerText = count -= 1
    }
}

function save(){
    console.log(count)
}

