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

const AnyReactComponent = ({ text }) => (
   <div className="map__marker">
      <FontAwesomeIcon className="map__icon" icon={faAngleDoubleDown} transform="up-20 grow-20" />
   </div>
);

class SimpleMap extends Component {
   static defaultProps = {
      center: {
         lat: 50.09531346494229,
         lng: 14.453990211708192,
      },
      zoom: 14,
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
                  lat={50.09531346494229}
                  lng={14.453990211708192}
                  text="My Marker"
               />
               {/* stylers ={[{ color: "#99FF33" }]} */}
            </GoogleMapReact>
         </div>
      );
   }
}

export default SimpleMap;
