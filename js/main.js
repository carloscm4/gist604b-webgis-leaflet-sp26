var map = L.map('map').setView([30.3322, -81.6557], 11);

// -------------------
// BASEMAP
// -------------------
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// -------------------
// PARKS
// -------------------
var parks = L.geoJSON(parksData, {
    onEachFeature: function (feature, layer) {
        var name = feature.properties?.name || "Unnamed Park";

        layer.bindPopup(
            "<b>Park:</b> " + name +
            "<br><i>Public Recreation Site</i>"
        );
    },
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            color: "green",
            fillColor: "green",
            fillOpacity: 0.7,
            weight: 1
        });
    }
}).addTo(map);

// -------------------
// ROADS
// -------------------
var roads = L.geoJSON(roadsData, {
    style: function () {
        return {
            color: "#333",
            weight: 2,
            opacity: 0.8
        };
    },
    onEachFeature: function (feature, layer) {
        var name = feature.properties?.name || "Road";
        layer.bindPopup("<b>Road:</b> " + name);
    }
}).addTo(map);

// -------------------
// NEIGHBORHOODS
// -------------------
var neighborhoods = L.geoJSON(neighborhoodsData, {
    style: function () {
        return {
            color: "#2b8cbe",
            weight: 2,
            fillColor: "#a6bddb",
            fillOpacity: 0.35
        };
    },
    onEachFeature: function (feature, layer) {
        var name = feature.properties?.name || "Neighborhood";
        layer.bindPopup("<b>Neighborhood:</b> " + name);
    }
}).addTo(map);

// -------------------
// LAYER CONTROL
// -------------------
L.control.layers(
    { "OpenStreetMap": osm },
    {
        "Parks": parks,
        "Roads": roads,
        "Neighborhoods": neighborhoods
    }
).addTo(map);

// -------------------
// SCALE BAR
// -------------------
L.control.scale().addTo(map);