const resumeOrder = document.getElementById('resume')
let finalPrice = 0
//mise en page de la liste d'achat
for (i = 0; i != orderList.length; i++) {
    //creation du block
    let box = document.createElement('div')
    box.setAttribute('class', 'resume_box')
    box.setAttribute('id', i)
    //affichage oui/non du bouton supprimer 
    let enableRemove = false
    box.onclick = function () {
        if (enableRemove == false) {
            enableRemove = true
            removeItem.style.display = "block"
        } else {
            enableRemove = false
            removeItem.style.display = "none"
        }
        //masque automatiquement le bouton au bout de 5s
        setTimeout(function () {
            removeItem.style.display = "none";
            enableRemove = false;
        }, 5000)
    }
    //mise en page des infos du produit choisi
    resumeOrder.append(box)

    const img = document.createElement('img')
    img.setAttribute('src', orderList[i].img)

    const infosBox = document.createElement('div')
    infosBox.setAttribute('class', 'item-infos')

    const name = document.createElement('p')
    name.textContent = orderList[i].name + "."
    name.setAttribute("class", "name")

    const price = document.createElement('p')
    price.textContent = orderList[i].price + "$"
    price.setAttribute("class", "price")

    const option = document.createElement('p')
    option.textContent = orderList[i].option
    option.setAttribute("class", "option")

    const count = document.createElement('p')
    count.textContent = "x" + orderList[i].amount
    count.setAttribute("class", "count")

    const removeItem = document.createElement('button')
    removeItem.setAttribute('class', 'remove-item')
    removeItem.setAttribute('type', 'button')
    removeItem.textContent = "supprimer"

    //action de suppression d'un produit choisi
    removeItem.onclick = function () {
        let removeChoice = box.getAttribute('id')
        orderList.splice(removeChoice, 1)
        updadeList()
        location.reload()
    }
    //mise en page des infos
    infosBox.append(name, option, price, count)
    box.append(img, infosBox, removeItem)

    //calcule le total de la commande
     finalPrice += orderList[i].amount * orderList[i].price
    // affiche le total de la commande
    const totalOrder = document.getElementById('total_price')
    totalOrder.textContent = finalPrice + " $"
}

//met à jour le panier
function updadeList() {
    let update = JSON.stringify(orderList)
    localStorage.setItem("saveOrderList", update)

}