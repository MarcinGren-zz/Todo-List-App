var listOfAllTodos = document.querySelectorAll(".holder")

for (var i = 0; i < listOfAllTodos.length; i++) {
    listOfAllTodos[i].addEventListener("click", function() {
        this.querySelector(".todoitem").classList.toggle("donetask")
    })
    listOfAllTodos[i].addEventListener("mouseenter", function() {
        this.querySelector(".bin").classList.remove("hidden")
        this.querySelector(".bin").classList.add("binsignholder")
        console.log("asd")
    })
    listOfAllTodos[i].addEventListener("mouseleave", function() {
        this.querySelector(".bin").classList.add("hidden")
        this.querySelector(".bin").classList.remove("binsignholder")
    })
}