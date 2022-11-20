document.addEventListener("DOMContentLoaded", () => {

    const leftArrow = document.getElementById("left_arrow")
    const rightArrow = document.getElementById('right_arrow')
    let items = document.getElementsByClassName('carrousel_items')

    function carrousel() {

        leftArrow.addEventListener(onclick, () => {
            console.log("left ok")
        })

        rightArrow.addEventListener(onclick, () => {
            console.log("right ok")
        })

        console.log(items)

    }

    function selectedCourses() {


    }

    carrousel()
    selectedCourses()

});


