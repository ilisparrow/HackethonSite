 
  <!-- Create the map content with JavaScript (.js) -->
 // <script>

  /* Set up the map with initial center and zoom level */
  var map = L.map('map', {
    center: [41.77, -72.69], // EDIT latitude, longitude to re-center map
    zoom: 12,  // EDIT from 1 to 18 -- decrease to zoom out, increase to zoom in
    scrollWheelZoom: false
  });

  /* Control panel to display map layers */
  // var controlLayers = L.control.layers( null, null, {
  //  position: "topright",
  //  collapsed: false
  // }).addTo(map);

  /* Carto light-gray basemap tiles with labels */
  var light = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  // controlLayers.addBaseLayer(light, 'Carto Light basemap');

  /* Stamen colored terrain basemap tiles with labels */
  var terrain = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
  }); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  // controlLayers.addBaseLayer(terrain, 'Stamen Terrain basemap');

  /* Display a blue point marker with pop-up text */
  L.marker([41.77, -72.69]).addTo(map) // EDIT latitude, longitude to re-position marker
  .bindPopup("Insert pop-up text here"); // EDIT pop-up text message



 // </script>
