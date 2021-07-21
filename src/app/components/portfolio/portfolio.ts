export function animateSlides(): void {
    let slidePosition : number = 0
    const slides : HTMLHtmlElement[] = Array.prototype.slice.call(
        document.getElementsByClassName("slide")
    )

    const bars : HTMLHtmlElement[] = Array.prototype.slice.call(
        document.getElementsByClassName("bar")
    )
    const totalSlides : number = slides.length

    document.getElementById("prev").addEventListener("click", function () {
        updateSlidePosition("prev")
    })

    document.getElementById("next").addEventListener("click", function () {
        updateSlidePosition("next")
    })

    bars.forEach((item) =>
        item.addEventListener("click", () => {
            setSlide(parseInt(item.getAttribute("data-num")))
        })
    )

    const setSlide : (arg: number) => void = function (num) {
        slidePosition = num
        moveSlide()
    }

    const moveSlide : () => void = function () {
        slides.forEach((slide) => slide.classList.add("hidden"))
        slides[slidePosition].classList.remove("hidden")
    }

    const updateSlidePosition : (arg: "prev" | "next") => void = function (direction) {
        if (direction === "next") {
            slidePosition === totalSlides - 1
                ? (slidePosition = 0)
                : slidePosition++
        } else {
            slidePosition === 0
                ? (slidePosition = totalSlides - 1)
                : slidePosition--
        }
        moveSlide()
    }
}
