function myMap() {  
  var mapOptions = {  
      center: new google.maps.LatLng(28.430138920579097, 77.06060125828172),  
      zoom: 10,  
      mapTypeId: google.maps.MapTypeId.HYBRID  
  }  
  var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);  
  } 
