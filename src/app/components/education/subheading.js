class Subheading extends HTMLElement {
    constructor() {
      super();
  
      this.heading = "";
    }
  
    connectedCallback() {
      this.heading = this.getAttribute("heading");
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <div>
            <h2>${this.heading}</h2>
        </div>
          `;
    }
  }
  
  customElements.define("edu-sub", Subheading);