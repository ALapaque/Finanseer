import {
	Cell,
	Pie, PieChart,
} from "recharts";
import {useTheme} from "@mui/material";

type Props = {
	data: Array<{ name: string, value: number }>
}

export default function ExpenseBreakdownChart({data}: Props) {
	const {palette} = useTheme()
	const pieColors = [palette.primary[800], palette.primary[300]];

	return (
		<PieChart width={110} height={100}>
			<Pie
				stroke="none"
				data={data}
				innerRadius={18}
				outerRadius={35}
				paddingAngle={2}
				dataKey="value"
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={pieColors[index]}/>
				))}
			</Pie>
		</PieChart>
	)
}