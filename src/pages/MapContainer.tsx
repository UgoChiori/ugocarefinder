import React, { useState, useEffect } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";


interface Hospital{
  place_id: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  }

const MapContainer = ({ hospitals }: {hospitals: Hospital[]} ) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 6.5244,
    lng: 3.3792,
  };

  useEffect(() => {
    if (map && hospitals.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();
      hospitals.forEach((hospital: { geometry: { location: { lat: any; lng: any; }; }; }) => {
        const { lat, lng } = hospital.geometry.location;
        bounds.extend(new window.google.maps.LatLng(lat, lng));
      });
      (map as google.maps.Map).fitBounds(bounds);
    }
  }, [map, hospitals]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        onLoad={(map) => setMap(map)}
      >
        {hospitals.map((hospital: { place_id: React.Key | null | undefined; geometry: { location: google.maps.LatLng | google.maps.LatLngLiteral; }; }) => (
          <Marker
            key={hospital.place_id}
            position={hospital.geometry.location}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;






// import React, { useState, useEffect, useRef, Key } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// interface Hospital {
//   id: Key | null | undefined;
//   name: any;
//   longitude: number;
//   latitude: number;
//   place_id: string;
//   geometry: {
//     location: {
//       lat: number;
//       lng: number;
//     };
//   };
// }

// const MapContainer = ({ hospitals }: { hospitals: Hospital[] }) => {
//   const [map, setMap] = useState<google.maps.Map | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedHospital, setSelectedHospital] = useState<any>({name: "", phone: "", rating: ""})
  

//   const mapContainerRef = useRef<HTMLDivElement | null>(null);

  

//   useEffect(() => {
//     if (mapContainerRef.current) {
//       const loadedMap = new google.maps.Map(mapContainerRef.current);
//       setMap(loadedMap);
//     }
//   }, []);

//   useEffect(() => {
//     // Center the map on the first hospital in the list when it is available
//     if (hospitals.length > 0 && map) {
//       const center = {
//         lat: hospitals[0].latitude,
//         lng: hospitals[0].longitude,
//       };
//       map.panTo(center);
//     }
//   }, [hospitals, map]);

//   const handleMarkerClick = (hospital: Hospital) => {
//     setSelectedHospital(hospital);
//     if (map) {
//       const latLng = {
//         lat: hospital.geometry.location.lat,
//         lng: hospital.geometry.location.lng,
//       };
//       map.panTo(latLng);
//     }
//   };

//   const mapStyles = {
//     height: "400px",
//     width: "100%",
//   };

//   const defaultCenter = {
//     lat: 6.5244,
//     lng: 3.3792,
//   };

//   useEffect(() => {
//     if (map && hospitals.length > 0) {
//       const bounds = new window.google.maps.LatLngBounds();
//       hospitals.forEach((hospital: { geometry: { location: { lat: any; lng: any; }; }; }) => {
//         const { lat, lng } = hospital.geometry.location;
//         bounds.extend(new window.google.maps.LatLng(lat, lng));
//       });
//       (map as google.maps.Map).fitBounds(bounds);
//     }
//   }, [map, hospitals]);

//   const handleSearch = () => {
//     // Perform the search logic here
//     // You can filter the hospitals based on the search query
//     // and update the list of hospitals accordingly
//     // For example:
//     const filteredHospitals = hospitals.filter((hospital) =>
//       hospital.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     // Update the list of hospitals

//     // Update the map's center to the first hospital in the filtered list
//     if (filteredHospitals.length > 0 && map) {
//       const center = {
//         lat: filteredHospitals[0].geometry.location.lat,
//         lng: filteredHospitals[0].geometry.location.lng,
//       };
//       map.panTo(center);
//     }
//   };



//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Search hospitals"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div style={{ height: "400px", width: "100%" }}>
//       <LoadScript googleMapsApiKey="AIzaSyDYL048QSsNPEHs_crrIeZfrYH5_Qsh2Nk">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={13}
//         center={defaultCenter}
//         onLoad={(map) => setMap(map)}
//       >
//         {hospitals.map((hospital: { place_id: React.Key | null | undefined; geometry: { location: google.maps.LatLng | google.maps.LatLngLiteral; }; }) => (
//           <Marker
//             key={hospital.place_id}
//             position={hospital.geometry.location}
//           />
//         ))}
//       </GoogleMap> 
//     </LoadScript>
//       </div>
//       {selectedHospital && (
//         <div>
//           <h3>{selectedHospital.name}</h3>
//           <p>Phone: {selectedHospital.phone}</p>
//           <p>Rating: {selectedHospital.rating}</p>
//           {/* Display any other relevant details */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default MapContainer;

// function setMap(loadedMap: google.maps.Map) {
//   throw new Error("Function not implemented.");
// }
// function setSelectedHospital(hospital: Hospital) {
//   throw new Error("Function not implemented.");
// }

