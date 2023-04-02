import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useGetKpisQuery} from "@/state/api";
import {useMemo} from "react";
import {useTheme} from "@mui/material";

export default function RevenueExpensesChart() {
	const {palette} = useTheme()
	const {data} = useGetKpisQuery()
	const revenueExpenses = useMemo(() => {
		return data && data[0].monthlyData.map(({month, revenue, expenses}) => {
			return {
				name: month.substring(0, 3),
				revenue,
				expenses
			}
		})
	}, [data])

	if (!data) {
		return <></>
	}

	return (
		<ResponsiveContainer>
			<AreaChart
				data={revenueExpenses}
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
				<defs>
					<linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={palette.primary['300']} stopOpacity={0.5}/>
						<stop offset="95%" stopColor={palette.primary['600']} stopOpacity={0}/>
					</linearGradient>
					<linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={palette.primary['300']} stopOpacity={0.5}/>
						<stop offset="95%" stopColor={palette.primary['600']} stopOpacity={0}/>
					</linearGradient>
				</defs>
				<XAxis
					dataKey="name"
					tickLine={false}
					style={{
						fontSize: '.65rem'
					}}
				/>
				<YAxis
					tickLine={false}
					domain={[8000, 23000]}
					axisLine={{strokeWidth: '0'}}
					style={{
						fontSize: '.65rem'
					}}/>
				<Tooltip/>
				<Area
					type={'monotone'}
					dataKey={'revenue'}
					dot
					stroke={palette.primary.main}
					fill={'url(#colorRevenue)'}
					fillOpacity={1}/>

				<Area
					type={'monotone'}
					dataKey={'expenses'}
					dot
					stroke={palette.primary.main}
					fill={'url(#colorExpenses)'}
					fillOpacity={1}/>
			</AreaChart>
		</ResponsiveContainer>
	)
}