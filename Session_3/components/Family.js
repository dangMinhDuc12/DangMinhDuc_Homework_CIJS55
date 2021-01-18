class Family extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
        this.getDB()
            .then(person => {
                this.shadowDom.innerHTML = `
                <div style ="display: flex; justify-content: space-around">
                    ${person}
                
                </div>
                    
                
                
                `
            })
            .catch(err => alert(err));

        
    }



    //Hàm nhận dữ liệu
    async getDB() {
        let res = await db.collection('person').get();
        let personArray = res.docs.map(doc => {
            return `
            
                <person-info id = "${doc.data().id}" name = "${doc.data().name}" age = "${doc.data().age}" job = "${doc.data().job}" img = "${doc.data().img}"></person-info>
            
            `
        });
        return personArray.join('');
        
    }
}




window.customElements.define('family-component', Family);