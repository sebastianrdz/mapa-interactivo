import axios from "axios";
import placeApi from "../api.json"

const BASE_URL = "";

export const getUserMarkers = (userIntention, lat, long) => {
	try {
		// const res = axios.get(BASE_URL, {
		// 	userIntention: userIntention
		// });
    
    // change
		return placeApi;
	} catch (err) {
		console.error(err);
		return { type: "ERROR", message: "Conection error", variables: {}, data: [] };
	}
};
