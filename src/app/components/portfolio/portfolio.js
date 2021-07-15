class Slide extends HTMLElement {
  constructor() {
    super();

    this.projectImg = "";
    this.projectDescription = "";
    this.projectName = "";
    this.projectTechnologies = "";
    this.previewLink = "";
    this.gitHubLink = "";
  }

  connectedCallback() {
    this.projectImg = this.getAttribute("projectImg");
    this.projectDescription = this.getAttribute("projectDescription");
    this.projectName = this.getAttribute("projectName");
    this.projectTechnologies = this.getAttribute("projectTechnologies");
    this.previewLink = this.getAttribute("previewLink");
    this.gitHubLink = this.getAttribute("gitHubLink");

    this.render();
  }

  render() {
    this.innerHTML = 
    `
    <div class="hide slide fade"  >
    <div class="slide--section slide--section__left">
      <img class="slide--img" src=${this.projectImg}>
    </div>
    <div class="slide--section slide--section__right">
      <div>
        <h3 class="slide--section__title">${this.projectName}</h3>
        <p class="slide--section__text">${this.projectDescription}</p>
        <h4 class="slide--section__title">Technologies</h4>
        <p class="slide--section__text">${this.projectTechnologies}</p>        
      </div>
      <div class="slide--section__buttons">
        <a href=${this.previewLink} class="slide--section__button button--dark">Preview</a>
        <a href=${this.gitHubLink} class="slide--section__button button--light">Github</a>
      </div>     
    </div>
  </div>
      `;
  }
};

customElements.define("slideElement",Slide);

const data = [
  {projectImg:"http://lorempixel.com/g/500/420/cats/1",
  projectName: "#Project Name",
  projectDescription: "Project Description",
  projectTechnologies: "Frameworks, tools, etc.",
  previewLink: "",
  gitHubLink: ""
  },
  {projectImg:"http://lorempixel.com/g/500/420/cats/2",
  projectName: "#Project Name",
  projectDescription: "Project Description",
  projectTechnologies: "Frameworks, tools, etc.",
  previewLink: "",
  gitHubLink: ""
  },
  {projectImg:"http://lorempixel.com/g/500/420/cats/4",
  projectName: "#Project Name",
  projectDescription: "Project Description",
  projectTechnologies: "Frameworks, tools, etc.",
  previewLink: "",
  gitHubLink: ""
  },  
  {projectImg:"http://lorempixel.com/g/500/420/cats/7",
  projectName: "#Project Name",
  projectDescription: "Project Description",
  projectTechnologies: "Frameworks, tools, etc.",
  previewLink: "",
  gitHubLink: ""
  }
]

export default function PortfolioModule () {

  const slides;
  data.forEach(elem => slides.push( 
  `<slideElement
    projectImg=${elem.projectImg} 
    projectName=${elem.projectName} 
    projectDescription=${elem.projectDescription} 
    projectTechnologies=${elem.projectTechnologies} 
    previewLink=${elem.previewLink} 
    gitHubLink=${elem.gitHubLink}
    ></slideElement>
  `));

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // function currentSlide(n) {
  //   showSlides(slideIndex = n);
  // }
  
  function showSlides(n) {
    let i;
    // let bars = document.getElementsByClassName("bar");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // for (i = 0; i < bars.length; i++) {
    //     bars[i].className = bars[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "flex";  
    // bars[slideIndex-1].className += " active";
  }


  let mainDIV = document.createElement("div");
  mainDIV.classList.add("section--bgdark");
  let sectionContainer = document.createElement("section");
  sectionContainer.classList.add("section");
  let sectionHeader = document.createElement("h2");
  sectionHeader.id = "portfolio";
  sectionHeader.classList.add("section--header");
  let slideshowContainer = document.createElement("div");
  slideshowContainer.classList.add("slideshow--container");
  slideshowContainer.id = "slideshow--container";
  let prevArrow = document.createElement("a");
  prevArrow.classList.add("prev");
  prevArrow.innerText = "&#10094;"
  prevArrow.addEventListener("click",plusSlides(-1));
  let nextArrow = document.createElement("a");
  nextArrow.classList.add("next");
  nextArrow.innerText = "&#10095;"
  nextArrow.addEventListener("click",plusSlides(1));

  let slideItem = document.createElement("slideElement")
  slideshowContainer.appendChild(slideItem);

  sectionContainer.appendChild(sectionHeader);
  sectionContainer.appendChild(slideshowContainer);
  sectionContainer.appendChild(prevArrow);
  sectionContainer.appendChild(nextArrow);
  mainDIV.appendChild(sectionContainer);

  console.log(mainDIV);
  return mainDIV;
}