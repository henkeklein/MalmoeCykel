(function(window, google, mapster) {
  
    mapster.map_options= {
    center: {
      lat: 55.6,
      lng: 13,

    },
    zoom: 10,
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,

    cluster: true,
    geocoder: true
    };
}(window, google, window.Mapster || (window.Mapster={})))

