document.addEventListener("DOMContentLoaded", () => {



    function carrousel() {
        const leftArrow = document.getElementById("left_arrow")
        const rightArrow = document.getElementById('right_arrow')
        let itemsCollection = document.getElementsByClassName('carrousel_items')
        let itemsArray = Array.from(itemsCollection)


        leftArrow.addEventListener("click", () => {
            itemsArray.forEach(item => {
                console.log(item)

                if (item === itemsArray[0]) {

                    itemsArray[0].setAttribute('hidden', '')
                    itemsArray[2].removeAttribute('hidden')


                } else if (item === itemsArray[1]) {

                    itemsArray[1].setAttribute('hidden', '')
                    itemsArray[0].removeAttribute('hidden')

                } else if (item === itemsArray[2]) {

                    itemsArray[2].setAttribute('hidden', '')
                    itemsArray[1].removeAttribute("hidden")

                }

            })
        })

        rightArrow.addEventListener("click", () => {

            itemsArray.forEach(item => {


                if (item === itemsArray[0]) {
                    console.log(item)

                    itemsArray[0].setAttribute('hidden', '')
                    itemsArray[1].removeAttribute('hidden')


                } else if (item === itemsArray[1]) {

                    itemsArray[1].setAttribute('hidden', '')
                    itemsArray[2].removeAttribute('hidden')

                } else if (item === itemsArray[2]) {

                    itemsArray[2].setAttribute('hidden', '')
                    itemsArray[0].removeAttribute("hidden")

                }


            })
        })

    }

    function selectedCourses() {


    }

    carrousel()
    selectedCourses()

});


