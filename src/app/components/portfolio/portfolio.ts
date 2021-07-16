export function animateSlides() {
    let slidePosition = 0
    const slides = Array.prototype.slice.call(
        document.getElementsByClassName("slide")
    )
    const bars = Array.prototype.slice.call(
        document.getElementsByClassName("bar")
    )
    const totalSlides = slides.length

    document.getElementById("prev").addEventListener("click", function () {
        updateSlidePosition("prev")
    })

    document.getElementById("next").addEventListener("click", function () {
        updateSlidePosition("next")
    })

    bars.forEach((item) =>
        item.addEventListener("click", () => {
            setSlide(item.getAttribute("data-num"))
        })
    )

    const setSlide = function (num) {
        slidePosition = parseInt(num)
        moveSlide()
    }

    const moveSlide = function () {
        slides.forEach((slide) => slide.classList.add("hidden"))
        slides[slidePosition].classList.remove("hidden")
    }

    const updateSlidePosition = function (a: "prev" | "next") {
        if (a === "next") {
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
