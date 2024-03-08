import { useEffect, useRef } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";


interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const GoogleMapsWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return <div>Cannot display the map: google maps api key missing</div>;
  }

  return <Wrapper apiKey={apiKey}>{children}</Wrapper>;
};


const addSingleMarkers = ({
  locations,
  map,
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  map: google.maps.Map | null | undefined;
}) =>
  locations.map((position) => {
  return new google.maps.Marker({
    position,
    map,
  });
});
  

const GoogleMaps = ({
  locations,
  ...props  
}: {
  locations: ReadonlyArray<google.maps.LatLngLiteral>;
  className?: string;
} & MapProps) => {

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Display the map
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center: props.center,
        zoom: props.zoom,
      });
      addSingleMarkers({ locations, map });
    }
  }, [ref, props.center, props.zoom, locations]);

  return (
    <div
      ref={ref}
      style={{ width: "100%", height: "250px" }}
    />
  );
};



const Map = (props:MapProps) => {
  return (
    <>
      <GoogleMapsWrapper>
        <GoogleMaps
          center={props.center}
          zoom={props.zoom} 
          locations={[props.center]}
        />
      </GoogleMapsWrapper>
    </>
  )
}
export default Map
