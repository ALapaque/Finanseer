import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from "recharts";
import {useGetKpisQuery} from "@/state/api";
import {useMemo} from "react";
import {useTheme} from "@mui/material";

export default function ProfitRevenueChart() {
	const {palette} = useTheme()
	const {data} = useGetKpisQuery()
	const revenueProfit = useMemo(() => {
		return data && data[0].monthlyData.map(({month, revenue, expenses}) => {
			return {
				name: month.substring(0, 3),
				revenue,
				profit: Number(revenue - expenses).toFixed(2)
			}
		})
	}, [data])

	if (!data) {
		return <></>
	}

	return (
		<ResponsiveContainer>
			<LineChart
				data={revenueProfit}
				margin={{
					top: 25,
					right: 25,
					left: -5,
					bottom: 10,
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
					}}
				/>
				<YAxis
					yAxisId={'left'}
					tickLine={false}
					axisLine={false}
					style={{
						fontSize: '.65rem'
					}}/>
				<YAxis
					yAxisId={'right'}
					orientation={'right'}
					tickLine={false}
					axisLine={false}
					style={{
						fontSize: '.65rem'
					}}/>
				<Tooltip/>
				<Legend
					style={{
						height: '1rem'
					}}
					wrapperStyle={{
						margin: '0 0 10px 0'
					}}
				/>
				<Line
					yAxisId={'left'}
					type={'monotone'}
					dataKey={'profit'}
					stroke={palette.tertiary[500]}
				/>
				<Line
					yAxisId={'right'}
					type={'monotone'}
					dataKey={'revenue'}
					stroke={palette.primary.main}
				/>
			</LineChart>
		</ResponsiveContainer>
	)
}