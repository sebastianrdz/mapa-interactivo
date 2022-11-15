import axios from "axios";

export const dispatchIntention = (inputText) => {
	const data = JSON.stringify({
		name: "Clasificador de intenciones",
		input: {
			sentence: inputText,
			knowledge_base: {
				saludo: ["hola", "que tal", "saludos", "hacer consulta"],
				radio: ["radio", "rango", "area", "ardededor"],
				cantidad: ["cantidad", "numero", "numeros", "primeros"],
				lugar: [
					"lugar",
					"en",
					"cerca de",
					"de",
					"municipio",
					"ciudad",
					"localizado",
				],
				despido: ["adios", "hasta lugo", "bye"],
			},
		},
	});

	const config = {
		method: "post",
		url: "https://cors-anywhere.herokuapp.com/https://invoke.neuraan.com/default/v1",
		headers: {
			Authorization:
				"Bearer eyJpZCI6IjdjYzM0MWZhLWQ3MDYtNDNiYi04ZWEwLTViZDZhMzlmN2VhMCIsImlhdCI6MTY2ODM5MDk5NH0",
			"Content-Type": "application/json",
		},
		data: data,
	};

	axios(config)
		.then(function (response) {
			console.log(JSON.stringify(response.data));
			return response.data;
		})
		.catch(function (error) {
			console.log(error.message);
			return error;
		});
};
