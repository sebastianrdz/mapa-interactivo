import styled from '@emotion/styled'
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import '../App.css'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function InteractiveMap() {
  const position = [51.505, -0.09]
  return (
    <MapWrapper>
      <MapContainer
        center={position}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Hello!
          </Popup>
        </Marker>
      </MapContainer>
    </MapWrapper>
  )
}

export default InteractiveMap;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
`