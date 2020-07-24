const resumeProducts = document.getElementById('resume_products')
const resumeContact = document.getElementById('resume_contact')
const totalOrder = document.getElementById('resume_price')

let finalPrice = 0

//récupère la liste de produit(s) et le formulaire client
let saveResumeOrder = JSON.parse(localStorage.getItem("saveResumeOrder"))
console.log(saveResumeOrder)
//mise en page du résumé de la commande
for (i = 0; i < saveResumeOrder.orderList.length; i++) {

    //creation du block
    let box = document.createElement('div')
    box.setAttribute('class', 'product-resume')

    //mise en page du block produit(s)
    resumeProducts.append(box)

    const img = document.createElement('img')
    img.setAttribute('src', saveResumeOrder.orderList[i].img)

    const name = document.createElement('p')
    name.textContent = saveResumeOrder.orderList[i].name
    name.setAttribute("class", "product-resume_name")

    const price = document.createElement('p')
    price.textContent = saveResumeOrder.orderList[i].price + "$"
    price.setAttribute("class", "product-resume_price")

    //mise en page des infos du block produit(s)
    box.append(img, name, price)

    //calcule le total de la commande
    finalPrice += saveResumeOrder.orderList[i].price
}

// affiche le total de la commande
totalOrder.textContent = `Total de : ${finalPrice} $`

//mise en page du résumé du formulaire client
let box = document.createElement('div')
box.setAttribute('class', 'client-resume')
resumeContact.append(box)
//remplissage du résumé
let firstName = document.createElement('p')
firstName.textContent = `Nom : ${saveResumeOrder.contact.firstName}`

let lastName = document.createElement('p')
lastName.textContent = `Prénom : ${saveResumeOrder.contact.lastName}`

let address = document.createElement('p')
address.textContent = `Addresse : ${saveResumeOrder.contact.address}`

let city = document.createElement('p')
city.textContent = `Ville : ${saveResumeOrder.contact.city}`

let email = document.createElement('p')
email.textContent = `Email : ${saveResumeOrder.contact.email}`

box.append(firstName, lastName, address, city, email)