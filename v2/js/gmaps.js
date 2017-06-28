jQuery Mobile1.4.0 DEMOSSearch
Google Maps

In this demo we show you how to:

    Integrate with Google Maps.
    How to get the users current location with the Geolocation API.
    How to plot a point on the map using your current location.
    How to display a default location (Hollywood, CA) if Geolocation is unavailable or a user declines to share it.
    Open demo
View Source
Home
Introduction
Buttons
Button widget
Checkboxradio widget click to expand contents
Collapsible (set) widget click to expand contents
Controlgroup widget click to expand contents
Datepicker
Events click to expand contents
Filterable widget
Flipswitch widget
Forms click to expand contents
Grids click to expand contents
Grouping and dividing content
Icons click to expand contents
Listview widget click to expand contents
Loader widget
Navbar widget
Navigation click to expand contents
Pages click to expand contents
Panel widget click to expand contents
Popup widget click to expand contents
Rangeslider widget
Responsive Web Design
Selectmenu widget click to expand contents
Slider widget click to expand contents
Table widget click to expand contents
Tabs widget
Textinput widget
Theming click to expand contents
Toolbar widget click to expand contents
Transitions
3rd party API demos click to expand contents
jQuery Mobile Demos version 1.4.0Copyright 2013 The jQuery Foundation
HTML click to expand contents
JS click to collapse contents
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$( document ).on( "pageinit", "#map-page", function() {
    var defaultLatLng = new google.maps.LatLng(34.0983425, -118.3267434);  // Default to Hollywood, CA when no geolocation support
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
});
