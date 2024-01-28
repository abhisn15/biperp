import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/auth/Login";
import Home from "./pages/user/Home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />}></Route>
				<Route path="/home" element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
