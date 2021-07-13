import "./stylesheet/main.scss";

import header from "./app/components/header/header.html";
import intro from "./app/components/intro/intro.html";
import skills from "./app/components/skills/skills.html"; 
import portfolio from "./app/components/portfolio/portfolio.html";
import EducationModule from "./app/components/education/education";
import contact from "./app/components/contact/contact.html";
import footer from "./app/components/footer/footer.html";

const pageElements = [header,intro,skills,portfolio,EducationModule(),contact,footer]

function createComponent(name) {
    const element = document.createElement("div");
    element.classList.add("component");
    element.innerHTML = name;
  
    return element;
  }

  pageElements.forEach(elem => document.body.appendChild(createComponent(elem)));


