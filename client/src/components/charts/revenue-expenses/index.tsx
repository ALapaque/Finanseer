import CardHeader from "@/components/card/CardHeader";
import RevenueExpensesChart from "@/components/charts/revenue-expenses/RevenueExpensesChart";

export default function RevenueExpensesChartContainer() {
	return (
		<>
			<CardHeader
				title={'Revenue and Expenses'}
				subTitle={'X-axis: Revenue, Y-axis: expenses'}
				informationText={'+4%'}
			/>
			<RevenueExpensesChart/>
		</>
	)
}