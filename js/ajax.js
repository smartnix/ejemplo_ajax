var request = new XMLHttpRequest();

function loadTxt() {
    request.onreadystatechange = processTxt(); /*Cada ves que halla un cambio de estado */
    request.open("GET", "data.txt", true); /*true en segundo plano */
    request.send();
}

function processTxt() {
    if (request.status == 200 && request.readyState == 4) {
        var txt = document.getElementById("txt");
        txt.innerHTML = request.responseText;
    }
}