	var nom='';
	var coordonnee='';
		function onEachFeature(feature, layer) {
			layer.bindPopup(feature.properties.name);
			layer.on('click', function (e){
											nom = feature.properties.name;
                                            coordonnee=feature.geometry.coordinates;
											console.log(nom);
											console.log(coordonnee);
										  });
	}

	L.geoJSON(test, {
		onEachFeature: onEachFeature
	}).addTo(map); 
