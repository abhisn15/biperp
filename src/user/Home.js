import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
	useEffect(() => {
		const Hamburger = document.getElementById("hamburger");
		const Close = document.querySelector(".close");
		const Menu = document.getElementById("menu");

		Hamburger.addEventListener("click", () => {
			Menu.classList.toggle("hidden");
		});

		Close.addEventListener("click", () => {
			Menu.classList.toggle("hidden");
		});
	}, []);
	return (
		<header>
			<nav className="flex flex-row justify-around items-center flex-wrap md:flex-nowrap">
				<h1>BiPerp</h1>
				<div id="hamburger" className="cursor-pointer md:hidden">
					=
				</div>
				<ul
					id="menu"
					className="hidden w-[100%] flex flex-col justify-center items-center md:w-auto md:block">
					<li>
						<Link to={"/home"}>Home</Link>
					</li>
					<li>
						<Link to={"/buku"}>Buku</Link>
					</li>
					<li>
						<Link to={"/riwayat"}>Riwayat</Link>
					</li>
					<span className="close cursor-pointer md:hidden">x</span>
				</ul>
			</nav>
		</header>
	);
}
