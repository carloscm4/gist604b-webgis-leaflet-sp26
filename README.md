# Jacksonville Parks & Transportation WebGIS Map

**Student:** Carlos Castillo  
**Course:** GIST 604B – Open Source GIS  
**Module:** Module 6 – WebGIS and Full-Stack Orchestration  
**University of Arizona**

---

## Project Description

This project is a simple WebGIS application built using Leaflet, HTML, and JavaScript. It visualizes spatial data for Jacksonville, Florida, including public parks, major roads, and neighborhood boundaries. The goal is to explore how different urban features relate spatially within the city using an interactive web map.

---

## Tools and Technologies

- Leaflet.js (Web mapping library)
- HTML / CSS / JavaScript
- GeoJSON (spatial data format)
- Visual Studio Code
- Git & GitHub (version control and hosting)

---

## What I Did

- Built a client-side web map using Leaflet
- Created and loaded GeoJSON datasets for parks, roads, and neighborhoods
- Styled spatial layers using custom symbology
- Added interactive popups for feature attributes
- Implemented layer controls and a scale bar for usability
- Organized project structure for web deployment

---

## How to View / Run

### Local Version
1. Open the project in Visual Studio Code  
2. Run the local server:
   ```bash
   npm start

## Repository Structure
    .
    ├── data/
    │   ├── points.geojson
    │   ├── lines.geojson
    │   └── polygons.geojson
    ├── js/
    │   └── main.js
    ├── css/
    │   └── style.css
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── .gitignore
    └── README.md
