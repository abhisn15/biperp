import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registrasi() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLoginClick = () => {
		if (username === "Abhi" && password === "abhisn123") {
			navigate("/home");
			alert("Registrasi berhasil!");
		} else {
			alert("Gagal Registrasi Coba Lagi!");
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleLoginClick();
		}
	};
	return (
		<div className="flex flex-col items-center justify-center h-[100dvh]">
			<div className="w-[400px] h-[500px] flex flex-col justify-center gap-10 bg-slate-400 rounded-xl px-20 py-12">
				<h1 className="font-bold text-center text-xl text-white">LOGIN</h1>
				<form>
					<label className="text-white">Username</label>
					<input
						className="rounded-md w-full mb-5 px-2"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						onKeyDown={handleKeyPress}></input>
					<label className="text-white">Password</label>
					<input
						className="rounded-md w-full px-2"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						onKeyDown={handleKeyPress}></input>
				</form>
				<button
					className="shadow-md border-none px-5 py-2 rounded-xl flex justify-center bg-white hover:bg-black hover:text-white"
					onClick={handleLoginClick}>
					Registrasi
				</button>
			</div>
		</div>
	);
}
