import CardHeader from "@/components/card/CardHeader";
import FlexBetween from "@/components/FlexBetween";
import {Box} from "@mui/material";
import {Typography} from "@mui/material";
import ExpenseBreakdownChart from "@/components/charts/expense-breakdown/ExpenseBreakdownChart";
import {useGetKpisQuery} from "@/state/api";
import {useMemo} from "react";

export default function ExpenseBreakdownChartContainer() {
	const {data: kpiData} = useGetKpisQuery();
	const pieChartData = useMemo(() => {
		if (kpiData) {
			const totalExpenses = kpiData[0].totalExpenses;
			return Object.entries(kpiData[0].expensesByCategory).map(
				([key, value]) => {
					return [
						{
							name: key,
							value: value,
						},
						{
							name: `${key} of Total`,
							value: totalExpenses - value,
						},
					];
				}
			);
		}
	}, [kpiData]);

	return (
		<>
			<CardHeader
				title={'Expense Breakdown By Category'}
				informationText={'+4%'}
			/>
			<FlexBetween sx={{
				mb: 1
			}}>
				{pieChartData?.map((data, i) => (
					<Box key={`${data[0].name}-${i}`}>
						<ExpenseBreakdownChart data={data}/>
						<Typography variant="h5">{data[0].name}</Typography>
					</Box>
				))}
			</FlexBetween>
		</>
	)
}