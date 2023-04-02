import Card from "@/components/card";
import FlexBetween from "@/components/FlexBetween";
import {Box, Button, Theme, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useMemo, useState} from "react";
import {useGetKpisQuery} from "@/state/api";
import regression, {DataPoint} from "regression";
import {CartesianGrid, Label, Line, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart} from "recharts";

export default function Predictions() {
	const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const {palette} = useTheme();
	const [isPredictions, setIsPredictions] = useState(false);
	const {data: kpiData} = useGetKpisQuery();

	const formattedData = useMemo(() => {
		if (!kpiData) return [];
		const monthData = kpiData[0].monthlyData;

		const formatted: Array<DataPoint> = monthData.map(
			({revenue}, i: number) => {
				return [i, revenue];
			}
		);
		const regressionLine = regression.linear(formatted);

		return monthData.map(({month, revenue}, i: number) => {
			return {
				name: month,
				"Actual Revenue": revenue,
				"Regression Line": regressionLine.points[i][1],
				"Predicted Revenue": regressionLine.predict(i + 12)[1],
			};
		});
	}, [kpiData]);

	return (
		<Card
			sx={{
				width: '100%',
				height: '100%',
				p: '1rem',
				overflow: 'hidden'
			}}>
			<FlexBetween
				sx={{
					m: '1rem 2.5rem',
					gap: '1rem'
				}}>
				<Box>
					<Typography variant="h3">Revenue and Predictions</Typography>
					<Typography variant="h6">
						charted revenue and predicted revenue based on a simple linear
						regression model
					</Typography>
				</Box>
				<Button
					onClick={() => setIsPredictions(!isPredictions)}
					sx={{
						color: palette.grey[900],
						backgroundColor: palette.grey[700],
						boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
					}}
				>
					{isSmallScreen ? "Generate" : "Show Predicted Revenue for Next Year"}
				</Button>
			</FlexBetween>
			<ResponsiveContainer>
				<LineChart
					data={formattedData}
					margin={{
						top: 10,
						right: 10,
						left: 10,
						bottom: 25,
					}}
					style={{
						width: "100%",
					}}
				>
					<CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]}/>
					<XAxis dataKey="name" tickLine={false} style={{fontSize: "10px"}}>
						<Label value="Month" offset={-5} position="insideBottom"/>
					</XAxis>
					<YAxis
						domain={[12000, 26000]}
						axisLine={{strokeWidth: "0"}}
						style={{fontSize: "10px"}}
						tickFormatter={(v) => `$${v}`}
					>
						<Label
							value="Revenue in USD"
							angle={-90}
							offset={-5}
							position="insideLeft"
						/>
					</YAxis>
					<Tooltip/>
					<Legend wrapperStyle={{
						paddingTop: '1.5rem'
					}}/>
					<Line
						type="monotone"
						dataKey="Actual Revenue"
						stroke={palette.primary.main}
						strokeWidth={0}
						dot={{strokeWidth: 5}}
					/>
					<Line
						type="monotone"
						dataKey="Regression Line"
						stroke="#8884d8"
						dot={false}
					/>
					{isPredictions && (
						<Line
							strokeDasharray="5 5"
							dataKey="Predicted Revenue"
							stroke={palette.secondary[500]}
						/>
					)}
				</LineChart>
			</ResponsiveContainer>
		</Card>
	)
}