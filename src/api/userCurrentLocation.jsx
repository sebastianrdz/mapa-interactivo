export const userCurrentLocation = (setUserPosition) => {
	if ("geolocation" in navigator) {
		console.log("Available");
	} else {
		console.log("Not Available");
		return;
	}

	navigator.geolocation.getCurrentPosition(function (position) {
		setUserPosition({
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
		});
	});
};
