import axios from "axios";

const BASE_URL = "";

export const dispatchIntention = (inputText) => {
	try {
		const res = axios.post(BASE_URL, {
			text: inputText,
		});
		// return res;
		return { type: "ERROR", variables: {}, data: [] };
	} catch (err) {
		console.error(err);
		return { type: "ERROR", variables: {}, data: [] };
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
