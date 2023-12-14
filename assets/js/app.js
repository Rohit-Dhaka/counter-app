const counting = document.querySelector(".counting");
const addbtn = document.querySelector(".addbtn");
const savebtn = document.querySelector(".savebtn");
const storecounting = document.querySelector(".storecounting");
const resetbtn = document.querySelector(".resetbtn");

addbtn.addEventListener("click" ,function(){
    counting.innerHTML = +counting.innerHTML + 1
    savebtn.classList.remove("btn-disable")
})

savebtn.addEventListener("click" , function(){
    if(counting.innerHTML == 0){
        savebtn.classList.add("btn-disable")
    }
    else{
        if(storecounting.innerHTML == 0){
            storecounting.innerHTML = counting.innerHTML
        }
        else{
            storecounting.innerHTML = storecounting.innerHTML + " , " +counting.innerHTML
        }
        counting.innerHTML = 0
    }
})
resetbtn.addEventListener("click" , function(){
    counting.innerHTML = 0
    storecounting.innerHTML = 0
})