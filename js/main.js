// ===============================
// 1. Initialize the map
// ===============================
var map = L.map('map').setView([30.3322, -81.6557], 12); // Jacksonville, FL

// ===============================
// 2. Add basemap
// ===============================
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// ===============================
// 3. Layer groups
// ===============================
var pointLayer = L.layerGroup().addTo(map);
var lineLayer = L.layerGroup().addTo(map);
var polygonLayer = L.layerGroup().addTo(map);

// ===============================
// 4. Load POINT data
// ===============================
fetch('data/points.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 6,
          color: "blue",
          fillColor: "blue",
          fillOpacity: 0.7
        });
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(
          "<b>" + feature.properties.name + "</b><br>" +
          feature.properties.type
        );
      }
    }).addTo(pointLayer);
  });

// ===============================
// 5. Load LINE data
// ===============================
fetch('data/lines.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: {
        color: "red",
        weight: 3
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
      }
    }).addTo(lineLayer);
  });

// ===============================
// 6. Load POLYGON data
// ===============================
fetch('data/polygons.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: {
        color: "green",
        fillColor: "green",
        fillOpacity: 0.3
      },
      onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
      }
    }).addTo(polygonLayer);
  });

// ===============================
// 7. Layer control
// ===============================
L.control.layers(null, {
  "Points": pointLayer,
  "Lines": lineLayer,
  "Polygons": polygonLayer
}).addTo(map);

// ===============================
// 8. Scale bar
// ===============================
L.control.scale().addTo(map);