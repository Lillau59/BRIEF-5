var map = L.map('map').setView([50.4750067, 2.5451466], 9);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FsYW5kcmUiLCJhIjoiY2wxbDE3ZXd5MDVqajNpbzYzdWVucWkwbyJ9.s2z4h2Nbg2NnD-iCemZXBQ'
}).addTo(map);