import axios from "axios";

const BASE_URL = "";

export const dispatchIntention = (inputText, lat, lon) => {
	try {
		const res = axios.post(BASE_URL, {
			text: inputText,
			variables: {
				latitude: lat,
				longitude: lon,
			}
		});
		// return res;
		return { type: "ERROR", message: "User position unavailable", variables: {}, data: [] };
	} catch (err) {
		console.error(err);
		return { type: "ERROR", message: "Conection error", variables: {}, data: [] };
	}
	
	// switch (inputText) {
	// 	case "hola":
	// 		return { type: "SALUDO" };
	// 	case "radio":
	// 		return { type: "RADIO" };
	// 	case "cantidad":
	// 		return { type: "CANT" };
	// 	case "lugar":
	// 		return { type: "LUG" };
	// 	default:
	// 		return { type: "ERROR" };
	// }
};
