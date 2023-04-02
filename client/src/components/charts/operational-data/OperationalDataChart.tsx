import {
	CartesianGrid,
	Line, LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from "recharts";
import {useGetKpisQuery} from "@/state/api";
import {useMemo} from "react";
import {useTheme} from "@mui/material";

export default function OperationalDataChart() {
	const {palette} = useTheme()
	const {data: operationalData} = useGetKpisQuery();
	const operationalExpenses = useMemo(() => {
		return (
			operationalData &&
			operationalData[0].monthlyData.map(
				({month, operationalExpenses, nonOperationalExpenses}) => {
					return {
						name: month.substring(0, 3),
						"Operational Expenses": operationalExpenses,
						"Non Operational Expenses": nonOperationalExpenses,
					};
				}
			)
		);
	}, [operationalData]);

	if (!operationalData) {
		return <></>
	}

	return (
		<ResponsiveContainer>
			<LineChart
				data={operationalExpenses}
				margin={{
					top: 25,
					right: 0,
					left: -5,
					bottom: 25,
				}}
				style={{
					width: '100%',
					minHeight: '200px'
				}}
			>
				<CartesianGrid vertical={false} stroke={palette.grey[800]}/>
				<XAxis
					dataKey="name"
					tickLine={false}
					style={{
						fontSize: '.65rem'
					}}				/>
				<YAxis
					yAxisId="left"
					orientation="left"
					tickLine={false}
					axisLine={false}
					style={{
						fontSize: '.65rem'
					}}				/>
				<YAxis
					yAxisId="right"
					orientation="right"
					tickLine={false}
					axisLine={false}
					style={{
						fontSize: '.65rem'
					}}				/>
				<Tooltip/>
				<Line
					yAxisId="left"
					type="monotone"
					dataKey="Non Operational Expenses"
					stroke={palette.tertiary[500]}
				/>
				<Line
					yAxisId="right"
					type="monotone"
					dataKey="Operational Expenses"
					stroke={palette.primary.main}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}