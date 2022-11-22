import styled from '@emotion/styled'
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import '../App.css'

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