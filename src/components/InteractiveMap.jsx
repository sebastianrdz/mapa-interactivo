import styled from '@emotion/styled'
import { MapContainer, TileLayer } from "react-leaflet";
import '../App.css'

function InteractiveMap() {
  const defaultPosition = [48.864716, 2.349];
  return (
    <MapWrapper>
      <MapContainer
        center={defaultPosition}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </MapWrapper>
  )
}

export default InteractiveMap;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  border: 2px solid #000;
  overflow: hidden;
`