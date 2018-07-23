var listOfAllTodos = document.querySelectorAll(".holder")

for (var i = 0; i < listOfAllTodos.length; i++) {
    // listOfAllTodos[i].addEventListener("click", function() {
        // this.classList.toggle("donetask")
    // })
    listOfAllTodos[i].addEventListener("click", function() {
        this.querySelector(".bin").classList.remove("hidden")
        this.querySelector(".bin").classList.add("binsignholder")
        console.log("asd")
    })
    // listOfAllTodos[i].addEventListener("mouseleave", function() {
    //     this.querySelector("span").classList.add("hidden")
    //     this.querySelector("span").classList.remove("binsignholder")
    // })
}