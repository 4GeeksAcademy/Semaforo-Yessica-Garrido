import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");
	const [colorPurpura, setPurpura] = useState("");

	const toggleColor = () => {
		if (color === "red") setColor("yellow");
		else if (color === "yellow") setColor("green");
		else setColor("red");
	};

	



	return (
		<div id="app">
			<div className="container">
				<div className="trafficTop"></div>

				<div className="body-container text-bg-dark p-3 d-flex flex-column align-items-center">
					<div
						className={`red light ${color === "red" ? "active" : ""}`}
						onClick={() => setColor("red")}
					></div>

					<div
						className={`yellow light ${color === "yellow" ? "active" : ""}`}
						onClick={() => setColor("yellow")}
					></div>

					<div
						className={`green light ${color === "green" ? "active" : ""}`}
						onClick={() => setColor("green")}
					></div>


				</div>

				<button type="button" className="btn btn-dark  mt-5"
					onClick={toggleColor}>Cambia de color</button>

			</div>


		</div>

	);
}
export default Home;