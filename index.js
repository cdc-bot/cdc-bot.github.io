links = {
    "add": "",
    "docs": "/docs" // this is gonna be a repo with md files
}
function link(e) {
    window.location.href = links[e.id];
}

async function setup() {
    var swelvy = await fetch("/swelvy");
    var swelvyHTML = await swelvy.text();
    var div = document.createElement("div");
    div.id = "swelvy";
    div.innerHTML = swelvyHTML;
    document.body.appendChild(div);
}

setup();