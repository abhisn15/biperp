import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import Home from "./user/Home";
import Registrasi from "./auth/Registrasi";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/registrasi" element={<Registrasi />}></Route>
				<Route path="/home" element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
