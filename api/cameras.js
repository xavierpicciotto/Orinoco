let camerasUrl = 'http://localhost:3000/api/cameras'
if (window.fetch) {
    //fetch mode
    fetch(camerasUrl)
        .then((response) => {
            response.json().then((data) => {

                console.log(data)
                let test = JSON.stringify(data)
                localStorage.setItem('cameras', test)
            })
        }).catch((err) =>
            console.log(err))
} else {
    //XMLHttpRequest mode si fetch n'est pas supporté
    let cameras = new XMLHttpRequest()

    cameras.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            localStorage.setItem("cameras", this.responseText)
            return
        }

    }

    cameras.open('GET', camerasUrl)
    cameras.send()
}