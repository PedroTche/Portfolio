var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sidemenu = document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right = "0"
}

function closemenu(){
    sidemenu.style.right = "-200px"
}

/*class FormSubmit {
    constructor(settings) {
        this.settings = settings
        this.form = document.querySelector(settings.form)
        this.formButton = document.querySelector(settings.button)
        if (this.form) {
            this.url = this.form.getAttribute("action")
        }
        this.sendForm = this.sendForm.bind(this)
    }
    displaySuccess() {
        this.form.innerHTML = this.settings.success
    }
    displayError() {
        this.form.innerHTML = this.settings.error
    }
    getFormObject() {
        const formObject = {}
        const fields = this.form.querySelectorAll("[name]")
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value
        })
        return formObject
    }
    onSubmission(event) {
        event.preventDefault()
        event.target.disabled = true
        event.target.innerText = "Enviando..."
    }
    async sendForm(event) {
        try {
            this.onSubmission(event)
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.getFormObject())
            })
            this.displaySuccess()
        } catch (error){
            this.displayError()
            throw new Error(error)
        }
    }
    init() {
        if (this.form) this.formButton.addEventListener("click", this.sendForm)
        return this
    }
}

const formSubmit = new formSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem Enviada!</h1>",
    error: "<h1 class='error'>Não foi possivel enviar sua mensagem.</h1>",
})
formSubmit.init() */