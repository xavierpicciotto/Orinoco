const formOrder = document.getElementById('form_order')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const address = document.getElementById('address')
const city = document.getElementById('town')
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

//creation du tableau de commande a partir de la liste d'achat
function arrayIDproduct() {
    let products = []
    for (i = 0; i != orderList.length; i++) {
        products.push(orderList[i].productID)
    }
    return products
}

//creation d'un id de commande
function createID() {
    let id = firstName.value + lastName.value + textRegulator(Date())
    console.log(id)
    return id
}
//creation de la commande complete avec les infos client + tableau des produits + l'id
submitOrder.onclick = function (e) {
    e.preventDefault()
    let order = {
        products: arrayIDproduct(),
        contact: {
            fistName: textRegulator(firstName.value),
            lastName: textRegulator(lastName.value),
            email: textRegulator(email.value),
            address: textRegulator(address.value),
            city: textRegulator(city.value)
        },
        order_id: createID(),

    }
    order = JSON.stringify(order)
    //envoie de la commande au server
    fetch('http://localhost:3000/api/cameras', {
        method: "POST",
        body: order,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            response.json()
                .then(console.log)
                .catch(error => {
                    console.error(error);
                });
        } else {
            console.error('server response : ' + response.status);
        }
    }).catch(error => {
        console.error(error);
    });
}