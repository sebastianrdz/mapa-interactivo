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

function InteractiveMap({ userPosition, info }) {
	const [position] = useState([userPosition.latitude, userPosition.longitude]);

	return (
		<MapWrapper>
			<MapContainer center={position} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{/* {position && (
					<Marker position={position}>
						<Popup>Estas aqui!</Popup>
					</Marker>
				)} */}
				{info?.intent && info?.intent?.type === "RADIO" && (
					<Circle
						center={position}
						fillColor={"blue"}
						radius={info.intent.info.radio * 1000}
					/>
				)}
				{info?.data &&
					info?.data?.map((data) => {
						var lat = data["latitud"];
						var long = data["longitud"];
						var nom_estab = data["nom_estab"];
						var edificio = data["edificio"];
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
