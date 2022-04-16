function openNav() {
    document.getElementById("mySidenav").style.width = "800px";
    document.getElementById("mySidenav").style.height = "90px";
    document.getElementById("boutonrech").classList.add("cache");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setTimeout(function () {
        document.getElementById("boutonrech").classList.remove("cache")
    }, 200);
}