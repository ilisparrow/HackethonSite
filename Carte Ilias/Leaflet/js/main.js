	  
  /* Set up the map with initial center and zoom level */
  var map = L.map('map', {
    center: [36.7508, 5.0560], // EDIT latitude, longitude to re-center map
    zoom: 16,  // EDIT from 1 to 18 -- decrease to zoom out, increase to zoom in
    scrollWheelZoom: true
  });
  
  

  /* Carto light-gray basemap tiles with labels */
  var light = L.tileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
  // controlLayers.addBaseLayer(light, 'Carto Light basemap');
