const style = `
    .header {
        display: flex;
        justify-content: space-between;
        height: 64px;
        background-color: pink;
        align-items: center;
        padding: 0 50px;
    }

    .header__right {
        display: flex;
    }
    .header__right-avatar {
        margin-right: 20px;
    }

`





class Header extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open'});
        this.shadowDom.innerHTML = `
            <style>
                ${style}
            
            </style>
        
            <div class="header">
                <div>Logo</div>
                <div class = "header__right">
                    <div class = "header__right-avatar">Avatar</div>
                    <div>Logout</div>
                </div>
            </div>


            <create-post></create-post>
        
        `
    }
}


window.customElements.define('story-header', Header);