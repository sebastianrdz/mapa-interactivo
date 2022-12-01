import axios from "axios";
import placeApi from "../apiExampleResponses/lugar.json"
import radiusApi from "../apiExampleResponses/radio.json"

const BASE_URL = "";

export const dispatch = (inputText, lat, lon) => {
	try {
		const res = axios.get(BASE_URL, {
			text: inputText,
			variables: {
				latitude: lat,
				longitude: lon,
			}
		});
		// return placeApi;
		return radiusApi;
	} catch (err) {
		console.error(err);
		return { type: "ERROR", message: "Conection error", variables: {}, data: [] };
	}
};


export const userCurrentLocation = async (setUserPosition) => {
	try {
		await navigator.geolocation.getCurrentPosition(function (position) {
			setUserPosition({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			});
		});
	} catch (e) {
		console.log(e);
	}
};