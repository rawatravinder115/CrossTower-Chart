import { useEffect, useState } from "react";

const Candle = () => {
	const [btcusd, setBtcusd] = useState([]);
	async function FetchData() {
		const response = await fetch(
			"https://api.crosstower.com/api/3/public/candles"
		);
		const data = await response.json();

		setBtcusd(data.BTCUSDT20);
	}

	useEffect(() => {
		FetchData();
	}, []);

	// let userData = btcusd.map(function(element){
	//     return `${element.timestamp} ${element.max}`;
	// })

	console.log(btcusd);

	return <h1>hello</h1>;
};

export default Candle;
