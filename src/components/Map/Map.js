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

const AnyReactComponent = () => (
   <div className="map__marker">
      <FontAwesomeIcon className="map__icon" icon={faAngleDoubleDown} transform="up-25 grow-35" />
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
