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
    //supprime les caractères spéciaux à l'execption de l'Email
    if (string != email.value) {
        string = string.replace(/[^\w\s]/gi, '')
    }
    return string
}

//creation de la commande complete avec les infos client + tableau des produits
formOrder.addEventListener('submit', function (e) {
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

    //met a zero le pannier et créer un résumé de la commande
    let resumeOrder = {
        contact,
        orderList
    }
    updadeList("saveResumeOrder", resumeOrder)
    /*
    let resetOrderlist = []
    updadeList("saveOrderList",resetOrderlist)*/

    //envoie de la commande au server
    let data = {
        contact,
        products
    }
    console.log(data)
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),

    }
    fetch('http://localhost:3000/api/cameras/order', option)
})