import { Navbar, Body, Footer } from "./components";
import { userCurrentLocation } from "./api/userCurrentLocation";
import { useState, useEffect } from "react";

function App() {
	const [userPosition, setUserPosition] = useState(null);

	useEffect(() => {
		userCurrentLocation(setUserPosition);
	}, []);

	if (userPosition == null) return <div>Loading...</div>;
	return (
		<div>
			<Navbar />
			<Body userPosition={userPosition} />
			<Footer />
		</div>
	);
}

export default App;
