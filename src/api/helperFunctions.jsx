import axios from "axios";
import placeApi from "../apiExampleResponses/lugar.json"
import radiusApi from "../apiExampleResponses/radio.json"

const BASE_URL = "http://localhost:8000/chat-inegi";

export const dispatch = async (inputText, lat, lon) => {

	const data = {
		search: inputText,
		variables: [lat, lon]
	}

	const config = {
		headers:{
			'Content-Type': 'application/json'
		}
	}

	try {
		console.log(data)
		const res = await axios.post(BASE_URL, data, config);
		console.log(res)
		return res;
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