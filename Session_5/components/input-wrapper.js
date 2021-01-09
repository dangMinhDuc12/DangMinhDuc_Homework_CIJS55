class InputWrapper extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.type = this.getAttribute('type');
        this.placeholder = this.getAttribute('placeholder');
        this.shadowDom.innerHTML = `
            <style>
                .error {
                    color: red;
                    display: none;
                }
            
            </style>



            <div>
                <input type="${this.type}" placeholder = "${this.placeholder}">
                <div class="error">Bạn chưa nhập gì vào đây</div>
            </div>
        
        `;

        let input = this.shadowDom.querySelector('input');
        input.onblur = () => {
            if(!input.value) {
                this.shadowDom.querySelector('.error').style.display = 'block';
            }
        }
    }
    get value() {
        return this.shadowDom.querySelector('input').value;
    }
    set value(value) {
        this.shadowDom.querySelector('input').value = value;
    }
}

window.customElements.define('input-wrapper', InputWrapper);