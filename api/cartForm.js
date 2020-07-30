const formOrder = document.getElementById('form_order')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const address = document.getElementById('address')
const city = document.getElementById('city')
const submitOrder = document.getElementById('submitOrder')

//corrige les anomalies des champs de texte
function textRegulator(string) {
    //supprime les espaces en trop
    string = string.trim()
    string = string.replace(/[\s]{2,}/g, " ")
    return string
}

//empêche l'envoie si il n'y a pas de produits
if (cartCount == 0) {
    submitOrder.setAttribute("disabled", "disabled")
    submitOrder.textContent = "Panier vide"
    submitOrder.style.backgroundColor = "rgb(255 177 0 / 73%)"
}

//creation de la commande complete avec les infos client + tableau des produits
formOrder.addEventListener("submit", function(e){
    e.preventDefault()
     //récupère les infos et les formates
    let contact = {
        firstName: textRegulator(firstName.value),
        lastName: textRegulator(lastName.value),
        email: textRegulator(email.value),
        address: textRegulator(address.value),
        city: textRegulator(city.value)
    }
    let products = orderList.map(o => o.productID)

    //envoie de la commande au server
    let data = {
        contact,
        products
    }
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }

    fetch('http://localhost:3000/api/cameras/order', option)
        .then(response => response.json()
            .then(data => updadeList("saveResumeOrder", data)))

    //remet a zero le pannier
    let resetOrderlist = []
    updadeList("saveOrderList", resetOrderlist)
    
    submitOrder.textContent = "commande effectuée"
    setTimeout(function(){location.href = "orderConfirmation.html"},1500)  
})

