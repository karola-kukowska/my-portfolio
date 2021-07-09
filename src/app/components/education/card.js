class Card extends HTMLElement {
    constructor() {
      super();
  
      this.heading = "";
      this.subheading = "";
      this.dates = "";
    }
  
    connectedCallback() {
      this.heading = this.getAttribute("heading");
      this.subheading = this.getAttribute("subheading");
      this.dates = this.getAttribute("dates");

      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div>
          <h3>${this.heading}</h3>
          <p>${this.subheading}</p>
          <p class="footer--text">${this.dates}</p>
        </div>
        `;
    }
  }
  
  customElements.define("edu-card", Card);