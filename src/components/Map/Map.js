import { Component, React } from "react";
import "./Map.scss";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faMapMarker,
   faChevronRight,
   faMapPin,
   faLocationArrow,
   faAngleDoubleDown,
   faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faCommentDots, faUser } from "@fortawesome/free-regular-svg-icons";

const AnyReactComponent = (text) => (
   <div className="map__marker">
      <FontAwesomeIcon className="map__icon" icon={faAngleDoubleDown} transform="up-20 grow-20" />
   </div>
);

const Test = () => (
   <div className="map__marker">
      <p>text</p>
   </div>
);

class SimpleMap extends Component {
   static defaultProps = {
      center: {
         lat: 50.07514534797264,
         lng: 14.433316043178504,
      },
      zoom: 15,
   };

   render() {
      return (
         // Important! Always set the container height explicitly
         <div style={{ height: "100%", width: "100%" }}>
            <GoogleMapReact
               bootstrapURLKeys={{
                  key: process.env.REACT_APP_MAP,
                  language: "cz",
               }}
               yesIWantToUseGoogleMapApiInternals
               defaultCenter={this.props.center}
               defaultZoom={this.props.zoom}
            >
               <AnyReactComponent
                  lat={50.07514534797264}
                  lng={14.433316043178504}
                  text="My Marker"
               />

               {/* stylers ={[{ color: "#99FF33" }]} */}
            </GoogleMapReact>
         </div>
      );
   }
}

export default SimpleMap;

// // react-google-maps

// import React, { Component } from "react";
// import "./Map.scss";
// import { GoogleMap, LoadScript } from "@react-google-maps/api";
// import { Marker, InfoBox } from "@react-google-maps/api";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//    faMapMarker,
//    faChevronRight,
//    faMapPin,
//    faLocationArrow,
//    faAngleDoubleDown,
//    faAngleDown,
// } from "@fortawesome/free-solid-svg-icons";
// import "dotenv/config";
// console.log(process.env);

// const containerStyle = {
//    width: "100%",
//    height: "100%",
// };

// const onLoad = (infoBox) => {
//    console.log("infoBox: ", infoBox);
// };

// const center = {
//    lat: 50.09531346494229,
//    lng: 14.453990211708192,
// };

// class SimpleMap extends Component {
//    render() {
//       return (
//          <LoadScript googleMapsApiKey={process.env.REACT_APP_MAP}>
//             <GoogleMap clasmapContainerStyle={containerStyle} center={center} zoom={10}>
//                {/* Child components, such as markers, info windows, etc. */}
//                <div className="infoBox">
//                   <InfoBox position={center} onLoad={onLoad}>
//                      <div style={{ opacity: 0.75, padding: 12 }}>
//                         <div style={{ fontSize: 50, fontColor: `#08233B` }}>Hello, World!</div>
//                      </div>
//                   </InfoBox>
//                </div>
//             </GoogleMap>
//          </LoadScript>
//       );
//    }
// }

// export default React.memo(SimpleMap);
