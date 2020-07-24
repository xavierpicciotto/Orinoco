const itemTitle = document.getElementById("product-title")
const itemImg = document.getElementById("product-img")
const itemDescription = document.getElementById("product-description")
const itemPrice = document.getElementById("product-price")
const itemId = document.getElementById("identify")
const options = document.getElementById('options')

//recuperation de la liste + l'indice du produit voulu
let selected = localStorage.getItem('select')
let product = localStorage.getItem('cameras')
product = JSON.parse(product)
product = product[selected]

//mise en pages du produit
itemTitle.innerHTML = `${product.name}`
itemImg.setAttribute('src', product.imageUrl)
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

//formulaire de la page du produit
const addProductToCart = document.getElementById('addProductToCart')
const amountProduct = document.getElementById('amoutProduct')
const directOrder = document.getElementById('directOrder')
let orderList = []

//update de la liste d'achat
if (localStorage.getItem('saveOrderList') != null) {
    orderList = JSON.parse(localStorage.getItem('saveOrderList'))
}

//ajoute le/les produit(s) à la liste d'achat
function order() {
    let optionChoice = options.value
    let amountChoice = amoutProduct.value
    let productOrder = {
        productID: product._id,
        name: product.name,
        img: product.imageUrl,
        price: product.price,
        option: optionChoice,
        amount: amountChoice

    }
    orderList.push(productOrder)
    //sauvegarde la liste d'achat sur le navigateur
    let saveOrderList = JSON.stringify(orderList)
    localStorage.setItem('saveOrderList', saveOrderList)
}
//action de l'utilisateur
addProductToCart.onclick = function () {
    order()
}
directOrder.onclick = function () {
    order()
    location.href = "panier.html"
}
