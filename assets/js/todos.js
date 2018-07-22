var listOfAllTodos = document.querySelectorAll(".list span")

for (var i = 0; i < listOfAllTodos.length; i++) {
    listOfAllTodos[i].addEventListener("click", function() {
        this.classList.toggle("donetask")
    })
    listOfAllTodos[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "pink"
    })
    listOfAllTodos[i].addEventListener("mouseleave", function() {
        this.style.backgroundColor = "white"
    })
}