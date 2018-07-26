var allTodos = document.querySelectorAll(".holder")
var allBins = document.querySelectorAll(".bin")
var plusSign = document.querySelector(".fas, .fa-plus")
var inputBox = document.querySelector("input")
var listOfTodos = document.querySelector(".list ")

function createHolder() {
    let newHolder = document.createElement("div")
    let newBin = document.createElement("div")
    let newIcon = document.createElement("i")
    let newTodoItem = document.createElement("span")

    newHolder.classList.add("holder")
    newBin.classList.add("bin")    
    newIcon.classList.add("far")
    newIcon.classList.add("fa-trash-alt")
    newTodoItem.classList.add("todoitem")
    
    newBin.appendChild(newIcon)
    newHolder.appendChild(newBin)
    newHolder.appendChild(newTodoItem)
    
    return newHolder    
}

for (var i = 0; i < allTodos.length; i++) {
    allTodos[i].addEventListener("click", function() {
        this.querySelector(".todoitem").classList.toggle("donetask")
    })
    allTodos[i].addEventListener("mouseenter", function() {
        this.querySelector(".bin").classList.remove("hidden")
        this.querySelector(".bin").classList.add("binsignholder")
    })
    allTodos[i].addEventListener("mouseleave", function() {
        this.querySelector(".bin").classList.add("hidden")
        this.querySelector(".bin").classList.remove("binsignholder")
    })
}

allBins.forEach(function(elem) {
    elem.addEventListener("click", function() {
        elem.parentNode.remove()
    })
})

plusSign.addEventListener("click", function() {
    inputBox.classList.toggle("hidden")
})

inputBox.addEventListener("keypress", function(elem) {
    if (elem.keyCode == 13) {
        let newDiv = createHolder()
        newDiv.querySelector("span").append(inputBox.value)
        listOfTodos.insertBefore(newDiv, document.querySelector(".holder"))
    }
})