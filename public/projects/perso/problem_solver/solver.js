const container = document.querySelector("#problem_solver")
const ans_container = document.querySelector("#ans")

const button = document.querySelector("#choice")
const number = document.querySelector("#number")

button.addEventListener("click", choose)
document.body.addEventListener("keydown", function(e) {
    console.log(e.code)
    if (e.code == "Enter") {
        choose()
    }
})

function choose() {
    let val = number.value
    val++
    let ans = Math.floor(Math.random() * val)

    if (ans == 0) {
        ans = 1
    }

    console.log("answer : " + ans)

    update_answer(ans)
}


function update_answer(value) {
    ans_container.children[0].innerHTML = "My choice is : " + value
    ans_container.children[1].innerHTML = "*Of course you can still pick something else if you are unhappy with the result"
}
