class StoryScreen extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.shadowDom.innerHTML = `<h1>Welcome ${currentUser.displayName}</h1>
                                    <button>Logout</button>`;
        

        // this.shadowDom.querySelector('button').onclick = () => {
        //     auth.signOut()
        //         .then(() => {
        //             alert('Bạn đã đăng xuất khỏi tài khoản');
        //         })
        //         .catch((err) => {
        //             alert(err.message);
        //         })
        // }

    }
    userLogOut() {
        this.shadowDom.querySelector('button').onclick = () => {
            auth.signOut()
                .then(() => {
                    alert('Bạn đã đăng xuất khỏi tài khoản');
                })
                .catch((err) => {
                    alert(err.message);
                })
        }
    }

}


window.customElements.define('story-screen', StoryScreen)