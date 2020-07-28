//affichage du nombre de produit(s) dans le panier
//recuperation du panier
if (localStorage.getItem('saveOrderList') != null) {
    orderList = JSON.parse(localStorage.getItem('saveOrderList'))
} else {
    orderList = []
}
//calcule de la quantité de produit(s) dans le panier
let cartCount = 0
for (let i = 0; i != orderList.length; i++) {
    let productCount = Number(orderList[i].amount)
    cartCount += productCount
}
//mise en page de la quantité de produit(s) du panier
document.getElementById('cartCount').textContent = cartCount
