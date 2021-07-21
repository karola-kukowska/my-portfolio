//stylesheet
import "./stylesheet/main.scss"

//ts modules
import { animateSlides } from "./app/components/portfolio/portfolio"

//page modules
import header from "./app/components/header/header.html"
import intro from "./app/components/intro/intro.html"
import skills from "./app/components/skills/skills.html"
import portfolio from "./app/components/portfolio/portfolio.html"
import EducationModule from "./app/components/education/education"
import contact from "./app/components/contact/contact.html"
import footer from "./app/components/footer/footer.html"

const education : string = EducationModule();

const pageElements : string[] = [
    header,
    intro,
    skills,
    portfolio,
    education,
    contact,
    footer,
]

function createComponent (name: string) : HTMLDivElement {
    const element : HTMLDivElement = document.createElement("div")
    element.classList.add("component")
    element.innerHTML = name

    return element
}

pageElements.forEach((elem : string) => document.body.appendChild(createComponent(elem)))

window.onload = function (): void {
    animateSlides()
}
