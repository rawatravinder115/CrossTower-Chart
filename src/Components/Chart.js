import React,{ useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

const Chart = () => {
	const [btcusd, setBtcusd] = useState({});
	const [hightest, setHightest] = useState();
	async function fetchData() {
		const response = await fetch(
			"https://api.crosstower.com/api/3/public/trades"
		);
		const data = await response.json();

		console.log(data.BTCUSD);
		setBtcusd(data.BTCUSD);

		let maxPrice = 0;
		for (let i = 0; i < btcusd.length; i++) {
			maxPrice = Math.max(maxPrice, btcusd[i]["price"]);
			console.log(maxPrice);
		}

		console.log(maxPrice);
		setHightest(maxPrice);
		console.log(hightest);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<Bar
				data={{
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				}}
				height={500}
				width={50}
                options ={{
                    maintainAspectRatio : false,
                }}
			/>
		</div>
	);
};

export default Chart;
