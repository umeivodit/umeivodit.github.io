$(document).ready(function() {

  /*
   * Smooth scroll
   */

  $('ul.navbar-nav a').smoothScroll({
    offset: -50,
    autoCoefficent: 2,
  });

  /*
   * Project slides
   */

  $("#lifehacker").responsiveSlides({
    maxwidth: 320,
    speed: 800,
    pager: true
  });
});


/*
 * Google Map
 */

google.maps.event.addDomListener(window, 'load', initialize);
function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(54.308367,48.3875979)
  }
  var map = new google.maps.Map(document.getElementById('map_convas'), mapOptions);
  // var image = 'images/beachflag.png';
  var myLatLng = new google.maps.LatLng(54.308367,48.3875979);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      // icon: image
  });
}