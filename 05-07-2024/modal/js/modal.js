const button = document.querySelector("button")
const popup = document.querySelector(".popup-wrapper")

const classListArray = ["teste", "oi"]
console.log(classListArray.includes("teste"));

button.addEventListener("click", function(){
    popup.classList.add("d-block");
})

popup.addEventListener("click", function(event){
    //console.log(event.target) saber qual classe é
    const classListClick  = event.target.classList[0]
    const classNameArray = ["popup-wrapper", "popup-close", "popup-link"]
    const include = classNameArray.includes(classListClick)
    
    if(include) {
        popup.classList.remove('d-block')
    }

})

