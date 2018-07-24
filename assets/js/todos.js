var listOfAllTodos = document.querySelectorAll(".holder")
var listOfAllBins = document.querySelectorAll(".bin")
var plusSign = document.querySelector(".fas, .fa-plus")
var inputBox = document.querySelector("input")

for (var i = 0; i < listOfAllTodos.length; i++) {
    listOfAllTodos[i].addEventListener("click", function() {
        this.querySelector(".todoitem").classList.toggle("donetask")
    })
    listOfAllTodos[i].addEventListener("mouseenter", function() {
        this.querySelector(".bin").classList.remove("hidden")
        this.querySelector(".bin").classList.add("binsignholder")
    })
    listOfAllTodos[i].addEventListener("mouseleave", function() {
        this.querySelector(".bin").classList.add("hidden")
        this.querySelector(".bin").classList.remove("binsignholder")
    })
}

listOfAllBins.forEach(function(elem) {
    elem.addEventListener("click", function() {
        elem.parentNode.remove()
    })
})

plusSign.addEventListener("click", function() {
    inputBox.classList.toggle("hidden")
})