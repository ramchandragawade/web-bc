mapboxgl.accessToken = mapboxtoken;
const campGeo = JSON.parse(campGeometry)
const coords = campGeo && campGeo.coordinates;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: coords, // starting position [lng, lat]
    zoom: 9, // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
.setLngLat(coords)
.addTo(map);