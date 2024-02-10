let boxes = document.querySelectorAll("#box")
let turn0 = "true"
let reset = document.getElementById("btn")

reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""
        box.classList.remove("disabled")
        document.getElementById("winner").innerHTML = ""
        document.getElementById("winner").classList.remove("topstyle")

    })
})

const winPattern = [
    [0, 1, 2], [0, 3, 6],
    [0, 4, 8], [1, 4, 7],
    [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
]

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "X"
            turn0 = false
            box.classList.add("disabled")
        }
        else {
            box.innerText = "O"
            turn0 = true
            box.classList.add("disabled")

        }

        checkWinner()
    })



})




const checkWinner = () => {

    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos1Val != "" && pos1Val != "") {

            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                boxes.forEach((box) => {

                    box.classList.add("disabled")



                })

                if (turn0 == false) {
                    turn0 = "X"
                    document.getElementById("winner").classList.add("topstyle")
                    document.getElementById("winner").innerHTML = `Winner is ${turn0}🎉🎉🎉`

                    boxes.forEach((box) => {

                        box.classList.add("disabled")


                    })

                }
                else {
                    turn0 = "O"

                    document.getElementById("winner").innerHTML = `Winner is ${turn0}`

                    boxes.forEach((box) => {

                        box.classList.add("disabled")



                    })


                }


            }

        }

    }
}