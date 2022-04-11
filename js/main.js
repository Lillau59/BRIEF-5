const strapiIp = "http://51.137.57.139";
const strapiPort = ":1337";

let nIntervId;
document.querySelector('.logo-raptor').addEventListener('click', () => { 
    document.querySelector('.anim-raptor').style.visibility = "visible";
    nIntervId = setInterval(hideRaptor, 900);
});

function hideRaptor() {
    document.querySelector('.anim-raptor').style.visibility = "hidden";
    clearInterval(nIntervId);
}
