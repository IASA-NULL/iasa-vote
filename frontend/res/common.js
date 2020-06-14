if (location.protocol === 'http:') {
    document.querySelector('body').style.display = 'none';
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
}


let orgY, toY, inst;
let elem = document.scrollingElement || document.documentElement;

function animate() {
    dY = toY - orgY;
    if (Math.abs(dY) < 1) {
        elem["scrollTop"] = toY;
        return;
    }
    if (Math.abs(elem["scrollTop"] - orgY) > 1) return;
    orgY += dY / 20;
    elem["scrollTop"] = orgY;
    requestAnimationFrame(animate);
}

function scrollToCont(id = "") {
    orgY = elem["scrollTop"];
    toY = document.documentElement.scrollTop + document.getElementById("cont" + id).getBoundingClientRect().top - 60;
    let body = document.body,
        html = document.documentElement;

    let height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    toY = Math.min(toY, height - window.innerHeight);
    requestAnimationFrame(animate);
}

function scrollToTop() {
    orgY = elem["scrollTop"];
    toY = 0;
    requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", function () {
    //The first argument are the elements to which the plugin shall be initialized
    //The second argument has to be at least a empty object or a object with your desired options
    inst = OverlayScrollbars(document.querySelectorAll("body"), {});
});