// import { useEffect, useRef } from "react";
// import { Wrapper } from "@googlemaps/react-wrapper";


// interface MapProps {
//   center: {
//     lat: number;
//     lng: number;
//   };
//   zoom: number;
// }

// const GoogleMapsWrapper = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   // Ideally we want the apiKey to be fetch from an environment variable
//   const apiKey = "AIzaSyCujPGZTbEfZXZxs5QcHAsXdRwxRY5jRQ4";

//   if (!apiKey) {
//     return <div>Cannot display the map: google maps api key missing</div>;
//   }

//   return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
// };

// const addSingleMarkers = ({
//   locations,
//   map,
// }: {
//   locations: ReadonlyArray<google.maps.LatLngLiteral>;
//   map: google.maps.Map | null | undefined;
// }) =>
//   locations.map((position) => {
//   return new google.maps.Marker({
//     position,
//     map,
//   });
// });
  

// const GoogleMaps = ({
//   locations,
//   ...props  
// }: {
//   locations: ReadonlyArray<google.maps.LatLngLiteral>;
//   className?: string;
// } & MapProps) => {

//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Display the map
//     if (ref.current) {
//       const map = new window.google.maps.Map(ref.current, {
//         center: props.center,
//         zoom: props.zoom,
//       });
//       addSingleMarkers({ locations, map });
//     }
//   }, [ref, props.center, props.zoom, locations]);

//   return (
//     <div
//       ref={ref}
//       style={{ width: "100%", height: "250px" }}
//     />
//   );
// };



// const Map = (props:MapProps) => {
//   return (
//     <>
//       <GoogleMapsWrapper>
//         <GoogleMaps
//           center={props.center}
//           zoom={props.zoom} 
//           locations={[props.center]}
//         />
//       </GoogleMapsWrapper>
//     </>
//   )
// }
// export default Map

import { useRef, useEffect } from 'react';
import './Map.css';

interface MapProps {
  className?: string;
  style?: React.CSSProperties;
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const Map = (props: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = () => {
      const map = new google.maps.Map(mapRef.current as HTMLElement, {
        center: props.center,
        zoom: props.zoom
      });

      new google.maps.Marker({ position: props.center, map: map });
    };

    initializeMap();
  }, [props.center, props.zoom]);

  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}>
      Map
    </div>
  );
};

export default Map;
