import { Navbar, Body, Footer } from "./components";
import { userCurrentLocation } from "./api/userCurrentLocation";
import { useState, useEffect } from "react";

function App() {
	const [userPosition, setUserPosition] = useState(null);

	useEffect(() => {
		async function callPosition() {
			await userCurrentLocation(setUserPosition);
		}
		callPosition();
	}, []);

	return (
		<div>
			<Navbar />
			<Body userPosition={userPosition}/>
			<Footer />
		</div>
	);
}

export default App;
