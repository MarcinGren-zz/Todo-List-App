var listOfAllTodos = document.querySelectorAll(".list span")

for (var i = 0; i < listOfAllTodos.length; i++) {
    listOfAllTodos[i].addEventListener("click", function() {
        this.classList.toggle("donetask")
    })
}