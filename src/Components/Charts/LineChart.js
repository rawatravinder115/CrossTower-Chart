import React from "react";

import { Line } from "react-chartjs-2";

const LineChart = () => {
	const label = [
		"2021-04-25",
		"2021-04-26",
		"2021-04-27",
		"2021-04-28",
		"2021-04-29",
		"2021-04-30",
		"2021-05-01",
		"2021-05-02",
		"2021-05-03",
		"2021-05-04",
		"2021-05-05",
		"2021-05-06",
		"2021-05-07",
		"2021-05-08",
		"2021-05-09",
		"2021-05-10",
		"2021-05-11",
		"2021-05-12",
		"2021-05-13",
		"2021-05-14",
		"2021-05-15",
		"2021-05-16",
		"2021-05-17",
		"2021-05-18",
		"2021-05-19",
		"2021-05-20",
		"2021-05-21",
		"2021-05-22",
		"2021-05-23",
		"2021-05-24",
		"2021-05-25",
		"2021-05-26",
		"2021-05-27",
		"2021-05-28",
		"2021-05-29",
		"2021-05-30",
		"2021-05-31",
		"2021-06-01",
		"2021-06-02",
		"2021-06-03",
		"2021-06-04",
		"2021-06-05",
		"2021-06-06",
		"2021-06-07",
		"2021-06-08",
		"2021-06-09",
		"2021-06-10",
		"2021-06-11",
		"2021-06-12",
		"2021-06-13",
		"2021-06-14",
		"2021-06-15",
		"2021-06-16",
		"2021-06-17",
		"2021-06-18",
		"2021-06-19",
		"2021-06-20",
		"2021-06-21",
		"2021-06-22",
		"2021-06-23",
		"2021-06-24",
		"2021-06-25",
		"2021-06-26",
		"2021-06-27",
		"2021-06-28",
		"2021-06-29",
		"2021-06-30",
		"2021-07-01",
		"2021-07-02",
		"2021-07-03",
		"2021-07-04",
		"2021-07-05",
		"2021-07-06",
		"2021-07-07",
		"2021-07-08",
		"2021-07-09",
		"2021-07-10",
		"2021-07-11",
		"2021-07-12",
		"2021-07-13",
		"2021-07-14",
		"2021-07-15",
		"2021-07-16",
		"2021-07-17",
		"2021-07-18",
		"2021-07-19",
		"2021-07-20",
		"2021-07-21",
		"2021-07-22",
		"2021-07-23",
		"2021-07-24",
		"2021-07-25",
		"2021-07-26",
		"2021-07-27",
		"2021-07-28",
		"2021-07-29",
		"2021-07-30",
		"2021-07-31",
		"2021-08-01",
		"2021-08-02",
		"2021-08-03",
		"2021-08-04",
		"2021-08-05",
		"2021-08-06",
		"2021-08-07",
		"2021-08-08",
		"2021-08-09",
		"2021-08-10",
		"2021-08-11",
		"2021-08-12",
		"2021-08-13",
		"2021-08-14",
		"2021-08-15",
		"2021-08-16",
		"2021-08-17",
		"2021-08-18",
		"2021-08-19",
		"2021-08-20",
		"2021-08-21",
	];

	const data = {
		labels: label,
		datasets: [
			{
				labels: "CrossTower",
				data: [
					3670307, 4042102, 4107270, 3969679, 4085114, 4277743, 4287138,
					4190543, 4225382, 3942238, 4246816, 4160198, 4219453, 4334895,
					4285797, 4097727, 4162877, 3641760, 3657152, 3656364, 3430784,
					3403084, 3179424, 3134100, 2686306, 2967101, 2706293, 2740828,
					2529641, 2831325, 2777641, 2857866, 2798187, 2591952, 2510712,
					2583894, 2706427, 2671444, 2749167, 2855248, 2701177, 2598948,
					2613064, 2442451, 2437550, 2730502, 2679088, 2731838, 2608273,
					2861499, 2966318, 2947010, 2804773, 2819880, 2649467, 2627551,
					2624683, 2342809, 2402578, 2495848, 2563687, 2363928, 2392867,
					2569501, 2557137, 2667951, 2602434, 2496992, 2524487, 2589373,
					2646199, 2520890, 2552143, 2527547, 2456898, 2530623, 2507204,
					2552183, 2477222, 2433517, 2439643, 2371273, 2343170, 2354751,
					2358555, 2315160, 2231220, 2394400, 2408809, 2501776, 2548015,
					2635611, 2774643, 2899656, 2977005, 2971574, 3130296, 3076081,
					3071381,
				],
				fill: true,
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	};

	const options = {
		title: {
			display: true,
			text: "Line Chart",
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0,
						max: 16,
						stepSize: 1,
					},
				},
			],
		},
	};

	// fetchData();

	// let arr = [
	// 	3071381, 3076081, 3130296, 2971574, 2977005, 2899656, 2774643, 2635611,
	// 	2548015, 2501776, 2408809, 2394400, 2231220, 2315160, 2358555, 2354751,
	// 	2343170, 2371273, 2439643, 2433517, 2477222, 2552183, 2507204, 2530623,
	// 	2456898, 2527547, 2552143, 2520890, 2646199, 2589373, 2524487, 2496992,
	// 	2602434, 2667951, 2557137, 2569501, 2392867, 2363928, 2563687, 2495848,
	// 	2402578, 2342809, 2624683, 2627551, 2649467, 2819880, 2804773, 2947010,
	// 	2966318, 2861499, 2608273, 2731838, 2679088, 2730502, 2437550, 2442451,
	// 	2613064, 2598948, 2701177, 2855248, 2749167, 2671444, 2706427, 2583894,
	// 	2510712, 2591952, 2798187, 2857866, 2777641, 2831325, 2529641, 2740828,
	// 	2706293, 2967101, 2686306, 3134100, 3179424, 3403084, 3430784, 3656364,
	// 	3657152, 3641760, 4162877, 4097727, 4285797, 4334895, 4219453, 4160198,
	// 	4246816, 3942238, 4225382, 4190543, 4287138, 4277743, 4085114, 3969679,
	// 	4107270, 4042102, 36703073071381, 3076081, 3130296, 2971574, 2977005,
	// 	2899656, 2774643, 2635611, 2548015, 2501776, 2408809, 2394400, 2231220,
	// 	2315160, 2358555, 2354751, 2343170, 2371273, 2439643, 2433517, 2477222,
	// 	2552183, 2507204, 2530623, 2456898, 2527547, 2552143, 2520890, 2646199,
	// 	2589373, 2524487, 2496992, 2602434, 2667951, 2557137, 2569501, 2392867,
	// 	2363928, 2563687, 2495848, 2402578, 2342809, 2624683, 2627551, 2649467,
	// 	2819880, 2804773, 2947010, 2966318, 2861499, 2608273, 2731838, 2679088,
	// 	2730502, 2437550, 2442451, 2613064, 2598948, 2701177, 2855248, 2749167,
	// 	2671444, 2706427, 2583894, 2510712, 2591952, 2798187, 2857866, 2777641,
	// 	2831325, 2529641, 2740828, 2706293, 2967101, 2686306, 3134100, 3179424,
	// 	3403084, 3430784, 3656364, 3657152, 3641760, 4162877, 4097727, 4285797,
	// 	4334895, 4219453, 4160198, 4246816, 3942238, 4225382, 4190543, 4287138,
	// 	4277743, 4085114, 3969679, 4107270, 4042102, 3670307,
	// ].reverse();

	// console.log(arr);

	let array = [];
		

	return <Line data={data} options={options} />;
};

export default LineChart;
