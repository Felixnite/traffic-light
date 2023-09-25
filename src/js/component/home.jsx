import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	return (


		<div className="traffic-light-container">
			<div className="pole"></div>
			<div className="traffic-light">

				<div onClick={() => setColor("red")} className={`light red ${color == "red" ? "bright" : ""}`}>
				</div>
				<div onClick={() => setColor("yellow")} className={`light yellow ${color == "yellow" ? "bright" : ""}`}>
				</div>

				<div onClick={() => setColor("green")} className={`light green ${color == "green" ? "bright" : ""}`}>
				</div>


			</div>
		</div>

	);
};

export default Home;
