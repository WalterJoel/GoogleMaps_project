var lat,lon;
var markers = [];
var infoWindow;
var messagewindow;
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var myLatLng = {lat: -16.3988900, lng:  -71.5350000};

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 5,
  center: {lat: -16.3988900, lng:  -78.5350000}
  });

  var infoWindow = new google.maps.InfoWindow;
            // Change this depending on the name of your PHP or XML file
  downloadUrl('generarxml.php', function(data) {
    var xml     = data.responseXML;
    var markers = xml.documentElement.getElementsByTagName('marker');
    Array.prototype.forEach.call(markers, function(markerElem) {
      var name   = markerElem.getAttribute('name');
      var address = markerElem.getAttribute('address');
      var type    = markerElem.getAttribute('type');
      var point   = new google.maps.LatLng(
        parseFloat(markerElem.getAttribute('lat')),
        parseFloat(markerElem.getAttribute('lng'))
        );

      var infowincontent = document.createElement('div');
      var strong         = document.createElement('strong');
      strong.textContent = name
      infowincontent.appendChild(strong);
      infowincontent.appendChild(document.createElement('br'));

      var text = document.createElement('text');
      text.textContent = address
      infowincontent.appendChild(text);
      
      var marker = new google.maps.Marker({
        map: map,
        label:name ,
        position: point
        //  label: icon.label
      });
      
      marker.addListener('click', function() {
        infoWindow.setContent(infowincontent);
        infoWindow.open(map, marker);
      });
    });
  }); //download url

}//function init maps
  /////

function downloadUrl(url,callback) 
{
  var request = window.ActiveXObject ?
  new ActiveXObject('Microsoft.XMLHTTP') :
  new XMLHttpRequest;
  request.onreadystatechange = function() {
    if (request.readyState == 4){
      request.onreadystatechange = doNothing;
      callback(request, request.status);
    }
  };
  request.open('GET', url, true);
  request.send(null);
}
function doNothing() {}
