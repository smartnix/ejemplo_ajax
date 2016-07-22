var request = new XMLHttpRequest();
var requestUsr = new XMLHttpRequest();

function loadTxt() {
    request.onreadystatechange = processTxt; /*Cada ves que halla un cambio de estado */
    request.open("GET", "data.txt", true); /*true en segundo plano */
    request.send();
}

function processTxt() {
    if (request.status == 200 && request.readyState == 4) {
        var txt = document.getElementById("txt");
        txt.innerHTML = request.responseText;
    }
}

function loadUsr() {
    requestUsr.onreadystatechange = processUsr;
    requestUsr.open("GET", "usuarios.json", true);
    requestUsr.send();
}

function processUsr() {
    if (requestUsr.status == 200 && requestUsr.readyState == 4) {
        var data = requestUsr.responseText;
        data = JSON.parse(data);
        var usr = document.getElementById("usr");
        usr.innerHTML = "";
        for (var i = 0; i < data.length; i++) {
            var u = data[i];
            usr.innerHTML += "<h1>" + u.nombre + "</h1>"
                + "<p>" + u.celular + "</p>"
                + "<p>" + u.correo + "</p>"
                + "<hr>";
        }
    }
}