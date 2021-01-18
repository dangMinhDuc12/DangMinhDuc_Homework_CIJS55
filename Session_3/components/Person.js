class Person extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({mode: 'open'});
    this.name = this.getAttribute('name');
    this.job = this.getAttribute('job');
    this.age = this.getAttribute('age');
    this.id = this.getAttribute('id');
    this.img = this.getAttribute('img');
    this.shadowDom.innerHTML = `
    <style>
    *{
      padding:0;
      margin:0;
      box-sizing: border-box;
    }


    .container {
      width: 300px;
      border:1px solid black;
      margin: 0 10px 10px;
    }


    .container img {
      width:299px;
      height: 220px;
      
    }

  </style>
    
    
    
    
    
    <div class="container">
      <div>
        <img src="${this.img}" alt="">
      </div>
      <div>
        <h1>${this.name}</h1>
      </div>
      <div>
        <p>Tuổi: ${this.age}</p>
        <p>Nghề nghiệp: ${this.job}</p>
        <p>Số chứng minh thư: ${this.id}</p>
      
      </div>
  </div>`;
    
    
  }
  
}

window.customElements.define('person-info', Person);