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
