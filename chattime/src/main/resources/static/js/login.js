class login{
    constructor(form, fields){
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit(){
        let self = this;

        this.form.addEventlistener("submit", (e)=>{
            e.preventDefault();
            self.fields.forEach((field)=>{
                const input = document.querySelector(`#${field}`);
                console.log(input.value);
            })
        })
    }
}

const form = document.querySelector("#usernameForm");
if(form){
    const fields = ["username", "password"];
    const validate = new login(form, fields);
}
