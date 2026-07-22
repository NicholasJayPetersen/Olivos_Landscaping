import * as maplibregl
    from "https://unpkg.com/maplibre-gl@^6.0.0/dist/maplibre-gl.mjs";

const map = new maplibregl.Map({
    container: "map",
    style: "https://tiles.openfreemap.org/styles/liberty",
    center: [-83.138, 42.349],
    zoom: 9.5,
    interactive: false
});

new maplibregl.Marker()
    .setLngLat([-83.045, 42.350])
    .addTo(map);
