//recuperation du tableau des produits
let product = localStorage.getItem('cameras')
product = JSON.parse(product)
let box = null
const list = document.getElementById('list')
//mise en page de la liste des produits
for (let i = 0; i < product.length; i++) {
    //creation d'une boite pour le produit
    box = document.createElement('div')
    box.setAttribute('id',product[i].name)
    list.append(box)
    
    //insertion des informations dans la boite
    let boxInfo = document.getElementById(product[i].name)
    let img = document.createElement('img')
    img.setAttribute('src', product[i].imageUrl)
    img.setAttribute('id', i)
    img.onclick = function () {
        let select = img.getAttribute('id')
        localStorage.setItem('select', select)
        location.href = "pages/productPage.html"

    }
    //Création d'une étiquette nom + prix du produit
    let labels = document.createElement('div')
    labels.setAttribute("class","labels")
    labels.setAttribute('id',product[i]._id)
    boxInfo.append(img,labels)  
    
    //insertion des informations de l'étiquette du produit
    let labelsInfo = document.getElementById(product[i]._id)  
    let labelName = document.createElement('p')
    labelName.textContent = product[i].name
    let labelPrice = document.createElement('p')
    labelPrice.textContent = `${product[i].price}$`
    labelsInfo.append(labelName,labelPrice)
}