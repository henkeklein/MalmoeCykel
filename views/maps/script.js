(function(window, $) {

  var $mapster = $('#map-canvas').mapster(Mapster.map_options);



   $mapster.mapster('setPano', '#pip-pano', {
    position: {
      lat: 55.6,
      lng: 13,
    }
   });

  $mapster.mapster('addMarker', {
    location: 'Golden Gate Bridge, San Fransisco, CA'
    });

  if(navigator.geolocation) {
  $mapster.mapster('getCurrentPosition', function(position){
    $mapster.mapster('addMarker', {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
  });
}




   //var matches = $mapster.mapster('findMarkers', function(markers){
    //return marker.id === 1;
   //});

   //$mapster.mapster('removeMarkers', function(markers){
    //return marker.id === 2;
   //});

   //console.log($mapster.mapster('markers'));


}(window, jQuery));
