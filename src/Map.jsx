import React, { Component } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

class MapComponent extends Component {
  render() {
   
    const ahmedabadCoords = [23.0225, 72.5714];
    const mumbaiCoords = [19.0760, 72.8777];

   
    const intermediaryCoords = [
      [22.3072, 73.1812], // Vadodara
      [21.1702, 72.8311], // Surat
      [20.9429, 72.8826], // Vapi
      [19.9975, 72.7217], // Thane
    //   [21.76447250,72.15193040], 
    //   [22.308155,70.800705]   
    ];

    const allCoords = [ahmedabadCoords, ...intermediaryCoords, mumbaiCoords];

    return (
      <MapContainer center={[21.1466, 79.0882]} zoom={6} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
       
        <Polyline positions={allCoords} color="blue" />
      </MapContainer>
    );
  }
}

export default MapComponent;












// import React, { Component } from 'react';
// import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

// class MapComponent extends Component {
//   state = {
//     routeCoords: [],
//   };

//   componentDidMount() {
//     this.fetchRoute();
//   }

//   fetchRoute = async () => {
//     const apiKey = 'YOUR_MAPBOX_API_KEY';
//     const startCoords = 'START_LATITUDE,START_LONGITUDE';
//     const endCoords = 'END_LATITUDE,END_LONGITUDE';
//     const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoords};${endCoords}?geometries=geojson&access_token=${apiKey}`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       const routeCoords = data.routes[0].geometry.coordinates;
//       this.setState({ routeCoords });
//     } catch (error) {
//       console.error('Error fetching route:', error);
//     }
//   };

//   render() {
//     const { routeCoords } = this.state;

//     return (
//       <MapContainer center={[20, 80]} zoom={5} style={{ height: '600px', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {/* Draw polyline */}
//         <Polyline positions={routeCoords} color="blue" />
//       </MapContainer>
//     );
//   }
// }

// export default MapComponent;
