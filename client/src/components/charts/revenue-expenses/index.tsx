import ChartHeader from "@/components/charts/ChartHeader";
import RevenueExpensesChart from "@/components/charts/revenue-expenses/RevenueExpensesChart";

export default function RevenueExpensesChartContainer() {
	return (
		<>
			<ChartHeader
				title={'Revenue and Expenses'}
				subTitle={'X-axis: Revenue, Y-axis: expenses'}
				informationText={'+4%'}
			/>
			<RevenueExpensesChart/>
		</>
	)
}