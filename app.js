function initMap() {
    // Google Map options
    const options = {
        zoom: 5,
        center: { lat: 12.972442, lng: 77.580643 }
    }

    // New map
    let map = new google.maps.Map(document.getElementById('map'), options);

    // Add Marker on the map
    let marker = new google.maps.Marker({ position: { lat: 12.972442, lng: 77.580643 }, map: map });

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function (event) {
        // Add marker on maps where user clicks
        // addMarker({ coords: event.latLng });
    });

    // Array of markers
    let markers = [
        {
            coords: { lat: 12.2958, lng: 76.6394 },
            content: '<h1>Mysore, Karnataka, India</h1>'
        },
        {
            coords: { lat: 11.0168, lng: 76.9558 },
            content: '<h1>Coimbatore, TN, India</h1>'
        },
        {
            coords: { lat: 22.5726, lng: 88.3639 },
            content: '<h1>Kolkata, West Bengal, India</h1>',
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'
        },
        {
            coords: { lat: 19.0760, lng: 72.8777 },
            content: '<h1>Mumbai, India</h1>'
        },
        {
            coords: { lat: 28.7041, lng: 77.1025 },
            content: '<h1>Delhi, India</h1>',
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png'
        }

    ];

    // Loop through markers
    for (let i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        let infoWindow, marker;
        marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });

        // Check for customicon
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content - click on Marker to view content
        if (props.content) {
            infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
}
