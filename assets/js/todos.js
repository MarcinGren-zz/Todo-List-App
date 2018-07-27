<<<<<<< HEAD
// var allTodos = document.querySelectorAll(".holder") temporary disabled, i dont think i need them here
// var allBins = document.querySelectorAll(".bin")
=======
var allTodos = Array.prototype.slice.call(document.querySelectorAll(".holder"))
var allBins = Array.prototype.slice.call(document.querySelectorAll(".bin"))
>>>>>>> 45bb449a8b904ea2b7fd37a4a8057216d43d3a2b
var plusSign = document.querySelector(".fas, .fa-plus")
var inputBox = document.querySelector("input")
var listOfTodos = document.querySelector(".list ")

function createHolder() {
    let newHolder = document.createElement("div")
    let newBin = document.createElement("div")
    let newIcon = document.createElement("i")
    let newTodoItem = document.createElement("span")

    newHolder.classList.add("holder")
    newBin.classList.add("bin", "hidden")
    newIcon.classList.add("far", "fa-trash-alt")
    newTodoItem.classList.add("todoitem")

    newBin.appendChild(newIcon)
    newHolder.appendChild(newBin)
    newHolder.appendChild(newTodoItem)

<<<<<<< HEAD
=======
    allTodos.push(newHolder)
    allBins.push(newBin)

>>>>>>> 45bb449a8b904ea2b7fd37a4a8057216d43d3a2b
    return newHolder
}

function triggerTodoListListeners() {
    // let allTodos = document.querySelectorAll(".holder")
    // let allBins = document.querySelectorAll(".bin")
    for (var i = 0; i < allTodos.length; i++) {
        allTodos[i].addEventListener("click", function () {
            this.querySelector(".todoitem").classList.toggle("donetask")
        })
        allTodos[i].addEventListener("mouseenter", function () {
            this.querySelector(".bin").classList.remove("hidden")
            this.querySelector(".bin").classList.add("binsignholder")
        })
        allTodos[i].addEventListener("mouseleave", function () {
            this.querySelector(".bin").classList.add("hidden")
            this.querySelector(".bin").classList.remove("binsignholder")
        })
    }

    allBins.forEach(function (elem) {
        elem.addEventListener("click", function () {
            elem.parentNode.remove()
        })
    })
}

plusSign.addEventListener("click", function () {
    inputBox.classList.toggle("hidden")
})

inputBox.addEventListener("keypress", function (elem) {
    if (elem.keyCode == 13) {
        let newDiv = createHolder()
        newDiv.querySelector("span").append(inputBox.value)
        listOfTodos.insertBefore(newDiv, document.querySelector(".holder"))
    }
    triggerTodoListListeners()
})

triggerTodoListListeners()