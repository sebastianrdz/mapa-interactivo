import styled from "@emotion/styled";
import { MapContainer, TileLayer, Popup, Marker, Circle } from "react-leaflet";
import "../App.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useState } from "react";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function InteractiveMap({ userPosition, coordinates, radius }) {
	const [position] = useState([userPosition.latitude, userPosition.longitude]);

	console.log(radius)
	return (
		<MapWrapper>
			<MapContainer center={position} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{position && (
					<Marker position={position}>
						<Popup>Estas aqui!</Popup>
					</Marker>
				)}

				{radius?.intent && radius?.intent?.info?.map((rad) => {
					var pos = [parseInt(rad["intent"]["info"]["lat"]), parseInt(rad["intent"]["info"]["lon"])]
					var radio = parseInt([rad["intent"]["info"]["lat"], rad["intent"]["info"]["radio"]])
					return (
						<Circle 
						center={pos} 
						radius={200} 
						pane="my-existing-pane" />
					);
				})}
					

				{coordinates?.data &&
					coordinates?.data?.map((estab) => {
						var lat = estab["est"]["latitud"];
						var long = estab["est"]["longitud"];
						var nom_estab = estab["est"]["nom_estab"];
						var edificio = estab["est"]["edificio"];
						return (
							<Marker position={[lat, long]}>
								<Popup>
									<ul>
										<li>{nom_estab}</li>
										<li>{edificio}</li>
									</ul>
								</Popup>
							</Marker>
						);
					})}
			</MapContainer>
		</MapWrapper>
	);
}

export default InteractiveMap;

const MapWrapper = styled.div`
	width: 100%;
	height: 400px;
	overflow: hidden;
`;
