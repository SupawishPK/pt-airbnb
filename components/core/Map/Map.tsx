import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { SearchResponse } from "interfaces/api/search";

interface IMap {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
}
const Map: React.FunctionComponent<{ searchResults: Array<SearchResponse> }> =
  ({ searchResults }) => {
    const [selectedLocation, setSelectedLocation] = React.useState({long:0});

    //Transform the search results object into the
    //{ latitude: 52.516272, longtitude: 13.377722 }
    //object
    const coordinates = searchResults.map((result) => ({
      longitude: result.long,
      latitude: result.lat,
    }));
    //    console.log(coordinates)

    //The latitude and longitude of the center of locations coordinates
    const center = getCenter(coordinates) || {
      latitude: 52.516272,
      longitude: 13.377722,
    };
    //    console.log(center)

    const [viewport, setViewport] = React.useState({
      width: "100%",
      height: "100%",
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11,
    });

    return (
      <ReactMapGL
        mapStyle="mapbox://styles/supawish34/ckt9u0mzk0f9v17ohtqe2uewq"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport: React.SetStateAction<IMap>) => {
          setViewport(nextViewport);
        }}
      >
        {searchResults.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                role="img"
                onClick={() => setSelectedLocation(result)}
                className="text-2xl cursor-pointer animate-bounce"
                aria-label="push-pin"
              >
                📌
              </p>
            </Marker>

            {/* The popup that should show if we click on a Marker*/}
            {selectedLocation.long === result.long ? (
                <Popup
                onClose={()=> setSelectedLocation({ long: 0})}
                latitude={result.lat}
                longitude={result.long}
                >
                    {result.title}
                </Popup>
            ):(
                false
            )}
          </div>
        ))}
      </ReactMapGL>
    );
  };

export default Map;
