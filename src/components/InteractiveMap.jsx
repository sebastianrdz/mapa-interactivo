import { MapContainer, TileLayer, Popup, Marker, Circle } from "react-leaflet";
import icons from "leaflet-color-number-markers";
import styled from "@emotion/styled";
import "leaflet/dist/leaflet.css";
import { divIcon } from "leaflet";
import { useState } from "react";
import L from "leaflet";
import "../App.css";



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function InteractiveMap({ userPosition, info }) {
	const [position] = useState([userPosition.latitude, userPosition.longitude]);

	console.log(info)
	return (
		<MapWrapper>
			<MapContainer center={position} zoom={13}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				{position && (
					<Marker position={position}>
						<Popup >Estas aqui!</Popup>
					</Marker>
				)}

				{info?.data?.intent && info?.data?.intent?.type === "RADIO" && (
					<Circle
						center={position}
						fillColor={"blue"}
						radius={info.data.intent.info.radio * 1000}
					/>
				)}
				{info?.data &&
					info?.data?.data?.map((data) => {
						var lat = data["latitud"];
						var long = data["longitud"];

						var nom_estab = ((data["raz_social"] == null) ? data["nom_estab"] : data["raz_social"]);
						var edificio = data["edificio"];
						var ocupacion = data["per_ocu"];
						var plaza = data["nom_CenCom"]
						var localidad = data["localidad"]
						var distancia = ((data["distancia"] == null) ? data["distancia"] : data["distancia"] + " km ");
						var correo = data["correoelec"]
						var telefono = ((data["telefono"] == null) ? data["telefono"] : "tel: " + data["telefono"])

						return (
							<Marker position={[lat, long]} icon={icons.violet.numbers[0]}>
								<Popup>
									<ul>
										<li className="title">{nom_estab}</li>
										<li>{edificio}</li>
										<li>{ocupacion}</li>
										<li>{plaza}</li>
										<li>{correo}</li>
										<li>{telefono}</li>
									</ul>
									<div className="divide"></div>
									<ul>
										<li>{distancia}</li>
										<li>{localidad}, Nuevo León</li>
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
