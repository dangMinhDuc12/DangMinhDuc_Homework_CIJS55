


class StoryScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `
        
            <story-header></story-header>
        
        `;
        
        
        
    }
}


window.customElements.define('story-screen', StoryScreen);