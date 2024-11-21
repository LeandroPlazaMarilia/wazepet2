// Inicializa o mapa, definindo a coordenada central e o nível de zoom
var map = L.map('map').setView([-22.2195, -49.9497], 11);

// Define o tile layer, que é a camada de imagem do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Array com bairros específicos de São Paulo
var neighborhoods = [
    { coords: [-22.16860, -49.98618], text: "<b>Ponto 1 </b><br>Av Republica" },
    { coords: [-22.18659, -49.93063], text: "<b>Ponto 2</b><br>Jardim Luciana" },
    { coords: [-22.213640, -49.915127], text: "<b>Ponto 3</b><br>Jardim Esmeralda" },
    { coords: [-22.22347, -49.95672], text: "<b>Ponto 4</b><br>Av Rio branco" },
    { coords: [-22.23201, -49.97432], text: "<b>Ponto 5</b><br>Jardim Cavallari" },
    { coords: [-22.24903, -49.93054], text: "<b>Ponto 6</b><br>Nova Marilia" },
];

// Loop para adicionar cada bairro ao mapa
neighborhoods.forEach(function(neighborhood) {
    var marker = L.marker(neighborhood.coords).addTo(map);
    marker.bindPopup(neighborhood.text);
});
