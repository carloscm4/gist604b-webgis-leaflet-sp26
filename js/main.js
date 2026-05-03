var map = L.map('map').setView([30.3322, -81.6557], 11);

// Basemap
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// -------------------
// PARKS
// -------------------
var parks = L.geoJSON(parksData, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            "<b>Park:</b> " + feature.properties.name +
            "<br><i>City of Jacksonville Public Space</i>"
        );
    },
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            color: "green",
            fillColor: "green",
            fillOpacity: 0.7
        });
    }
}).addTo(map);

// -------------------
// ROADS
// -------------------
var roads = L.geoJSON(roadsData, {
    style: function () {
        return {
            color: "black",
            weight: 2
        };
    }
}).addTo(map);

// -------------------
// NEIGHBORHOODS
// -------------------
var neighborhoods = L.geoJSON(neighborhoodsData, {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            "<b>Neighborhood:</b> " + feature.properties.name +
            "<br><i>Jacksonville, FL Boundary Unit</i>"
        );
    },
    style: function () {
        return {
            color: "#2b8cbe",
            weight: 2,
            fillColor: "#a6bddb",
            fillOpacity: 0.3
        };
    }
}).addTo(map);

// -------------------
// LAYERS CONTROL
// -------------------
var baseMaps = {
    "OpenStreetMap": osm
};

var overlayMaps = {
    "Parks": parks,
    "Roads": roads,
    "Neighborhoods": neighborhoods
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

// -------------------
// SCALE BAR
// -------------------
L.control.scale().addTo(map);