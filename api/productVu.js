const itemTitle = document.getElementById("product-title")
const itemImg = document.getElementById("product-img")
const itemName = document.getElementById("product-name")
const itemDescription = document.getElementById("product-description")
const itemPrice = document.getElementById("product-price")
const itemId = document.getElementById("identify")
const options = document.getElementById('options')

//recuperation de la liste + l'indice du produit voulu
let selected = localStorage.getItem('select')
let product = localStorage.getItem('cameras')
product = JSON.parse(product)
product = product[selected]

function update() {
    //mise en pages du produit
    itemTitle.innerHTML = `${product.name}`
    itemImg.setAttribute('src', product.imageUrl)
    itemName.innerHTML = `${product.name}`
    itemDescription.innerHTML = `${product.description}`
    itemPrice.innerHTML = `${product.price} $`
    itemId.innerHTML = `ref: ${product._id}`

    //update de la liste de personnalisation du produit
    for (let i = 0; i !== product.lenses.length; i++) {
        let custom = document.createElement('option')
        custom.textContent = product.lenses[i]
        custom.setAttribute('class', 'custom')
        custom.setAttribute('value', product.lenses[i])
        options.append(custom)
    }

}
update()

//formulaire de la page du produit
const addProduct = document.getElementById('addProduct')
const amountProduct = document.getElementById('amoutProduct')
let orderList = []

//update de la liste d'achat
if (localStorage.getItem('saveOrderList') != null) {
    orderList = JSON.parse(localStorage.getItem('saveOrderList'))
    console.log(orderList)
}

//ajoute le/les produit(s) à la liste d'achat
addProduct.addEventListener('submit', function () {
    let optionChoice = options.value
    let amountChoice = amoutProduct.value
    let productOrder = {
        productID: product._id,
        option: optionChoice,
        amount: amountChoice
    }
    orderList.push(productOrder)
    //sauvegarde la liste d'achat sur le navigateur
    let saveOrderList = JSON.stringify(orderList)
    localStorage.setItem('saveOrderList', saveOrderList)
})