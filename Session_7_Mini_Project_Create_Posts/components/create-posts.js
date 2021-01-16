const style = `
<style>
.create__post{
    height: 70vh;
    width: 70vh;
    background-color: aquamarine;
    margin: 0 auto;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    /* align-items: c; */


}
.content{
    display: flex;
    justify-content: center;
}
.content textarea{
    min-width: 80%;
    max-width: 90%;
    margin: 20px;
    
}
.button{
    padding: 20px;
    display: flex;
    justify-content: space-between;
}
.button button{
    padding: 10px;
    border: none;
    outline: none;
    background-color: blueviolet;
    color: white;

}
</style>


`;




class CreatePosts extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `

        ${style}


    <div class="create__post">
        <div class="content">
            <textarea class = "content-input" name="" id=""></textarea>
        </div>
        <div class="button">
            <input type="file" name="" id="">
            <button class = "button-post">Post</button>
        </div>
    </div>

        
        
        `;
        this.shadowDom.querySelector('.button-post').onclick = () => {
            const content = this.shadowDom.querySelector('.content-input').value;
            if(content.trim()) {
                db.collection('posts').add({
                    content
                })
                alert('Bạn đã tải lên thành công');
            }else {
                alert('Bạn hãy nhập gì đấy');
            }
        
        }
    
    }
}

window.customElements.define('create-post', CreatePosts);