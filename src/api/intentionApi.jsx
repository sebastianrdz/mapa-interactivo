import axios from "axios";

export const dispatchIntention = (inputText) => {
	var data = JSON.stringify({
		"name": "Clasificador de intenciones",
		"input": {
			"sentence": "Cual es su horario",
			"knowledge_base": {
				"saludo": ["hola"],
				"horario": ["a que hora abren"],
			},
		},
	});

	var config = {
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
