let userName=prompt("İsminiz nedir?")
function showTime() {
    let today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()
    let second = today.getSeconds()

    document.getElementById("myName").innerHTML = userName
    document.getElementById('myClock').innerHTML =  hour + ":" + minute + ":" + second;
    setTimeout(showTime, 1000)
}

showTime()