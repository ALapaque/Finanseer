import {
	 Cell,
	Pie, PieChart,
} from "recharts";
import {useTheme} from "@mui/material";

export default function CampainsTargetsChart() {
	const {palette} = useTheme()
	const pieColors = [palette.primary[800], palette.primary[300]];
	const pieData = [
		{ name: "Group A", value: 600 },
		{ name: "Group B", value: 400 },
	];

	return (
		<PieChart
			width={110}
			height={100}
			margin={{
				top: 0,
				right: -10,
				left: 10,
				bottom: 0,
			}}
		>
			<Pie
				stroke="none"
				data={pieData}
				innerRadius={18}
				outerRadius={38}
				paddingAngle={2}
				dataKey="value"
			>
				{pieData.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={pieColors[index]} />
				))}
			</Pie>
		</PieChart>
	)
}