import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from "recharts";
import {useGetKpisQuery} from "@/state/api";
import {useMemo} from "react";
import {useTheme} from "@mui/material";

export default function MonthlyRevenueChart() {
	const {palette} = useTheme()
	const {data} = useGetKpisQuery()
	const monthlyRevenue = useMemo(() => {
		return data && data[0].monthlyData.map(({month, revenue}) => {
			return {
				name: month.substring(0, 3),
				revenue
			}
		})
	}, [data])

	if (!data) {
		return <></>
	}

	return (
		<ResponsiveContainer>
			<BarChart
				data={monthlyRevenue}
				margin={{
					top: 25,
					right: -25,
					left: -5,
					bottom: 10,
				}}
				style={{
					width: '100%',
					minHeight: '200px'
				}}
			>
				<defs>
					<linearGradient id="colorMonthlyRevenue" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={palette.primary['300']} stopOpacity={0.8}/>
						<stop offset="95%" stopColor={palette.primary['300']} stopOpacity={0}/>
					</linearGradient>
				</defs>
				<CartesianGrid vertical={false} stroke={palette.grey[800]}/>
				<XAxis
					dataKey="name"
					axisLine={false}
					tickLine={false}
					style={{
						fontSize: '.65rem'
					}}
				/>
				<YAxis
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
				<Bar
					dataKey={'revenue'}
					fill={'url(#colorMonthlyRevenue)'}
					barSize={10}/>
			</BarChart>
		</ResponsiveContainer>
	)
}