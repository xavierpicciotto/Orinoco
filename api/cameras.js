let cameras = new XMLHttpRequest()

cameras.onreadystatechange = function(){
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
        localStorage.setItem('cameras',this.responseText)
        return
    }

}
cameras.open('GET','http://localhost:3000/api/cameras')
cameras.send()
