import ChartHeader from "@/components/charts/ChartHeader";
import MonthlyRevenueChart from "@/components/charts/monthly-revenue/MonthlyRevenueChart";

export default function MonthlyRevenueChartContainer() {
	return (
		<>
			<ChartHeader
				title={'Monthly Revenue'}
				informationText={'+4%'}
			/>
			<MonthlyRevenueChart/>
		</>
	)
}