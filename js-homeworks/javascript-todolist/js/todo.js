
var myNodelist = document.getElementsByTagName("li");
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


var list = document.querySelector('ul');
list.addEventListener('click', function (element) {
    if (element.target.tagName === 'LI') {
        element.target.classList.toggle('checked');
    }
}, false);


function newElement() {
    var li = document.createElement("li")
    var inputValue = document.getElementById("task").value
    var t = document.createTextNode(inputValue)
    li.appendChild(t)
    if (inputValue === "") {
        alert("Listeye boş ekleme yapılamaz.")
    } else {
        document.getElementById("list").appendChild(li)
    }
    document.getElementById("task").value = ""

    var span = document.createElement("span")
    var text = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(text)
    li.appendChild(span)

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement
            div.style.display = "none"
        }
    }
}