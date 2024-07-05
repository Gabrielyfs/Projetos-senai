let range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangeValue");


range.addEventListener("input", function(){
        rangeValue.textContent = range.value
})