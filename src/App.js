import { Navbar, Body, Footer, ChatBot } from "./components";

function App() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<body>
				<Body />
				<ChatBot />
			</body>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
