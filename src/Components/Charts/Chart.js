import React, { useEffect, useState } from "react";

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

	const data = [
		{ x: "Jan", net: 100, cogs: 50, gm: 50 },
		{ x: "Feb", net: 120, cogs: 55, gm: 75 },
	];
	const cfg = {
		type: "bar",
		data: {
			labels: ["Jan", "Feb"],
			datasets: [
				{
					label: "Net sales",
					data: data,
					parsing: {
						yAxisKey: "net",
					},
				},
				{
					label: "Cost of goods sold",
					data: data,
					parsing: {
						yAxisKey: "cogs",
					},
				},
				{
					label: "Gross margin",
					data: data,
					parsing: {
						yAxisKey: "gm",
					},
				},
			],
		},
	};

	return (
		<div>
			<Bar
				height={500}
				width={50}
				options={{
					maintainAspectRatio: false,
				}}
			/>
		</div>
	);
};

export default Chart;
