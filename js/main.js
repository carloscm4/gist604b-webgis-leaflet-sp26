var map = L.map('map').setView([30.3322, -81.6557], 11); 
// Jacksonville, FL center

// Basemap
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// ---------------------------
// LOAD DATA LAYERS
// ---------------------------

// Parks (Point layer)
var parks = L.geoJSON(parksData, {
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup("<b>Park:</b> " + feature.properties.name);
        }
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

// Roads (Line layer)
var roads = L.geoJSON(roadsData, {
    style: function () {
        return {
            color: "black",
            weight: 2
        };
    }
}).addTo(map);

// Neighborhoods (Polygon layer)
var neighborhoods = L.geoJSON(neighborhoodsData, {
    style: function () {
        return {
            color: "#2b8cbe",
            weight: 2,
            fillColor: "#a6bddb",
            fillOpacity: 0.3
        };
    }
}).addTo(map);

// ---------------------------
// LAYER CONTROL
// ---------------------------
var baseMaps = {
    "OpenStreetMap": osm
};

var overlayMaps = {
    "Parks": parks,
    "Roads": roads,
    "Neighborhoods": neighborhoods
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

// ---------------------------
// SCALE BAR
// ---------------------------
L.control.scale().addTo(map);