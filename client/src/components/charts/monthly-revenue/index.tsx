import CardHeader from "@/components/card/CardHeader";
import MonthlyRevenueChart from "@/components/charts/monthly-revenue/MonthlyRevenueChart";

export default function MonthlyRevenueChartContainer() {
	return (
		<>
			<CardHeader
				title={'Monthly Revenue'}
				informationText={'+4%'}
			/>
			<MonthlyRevenueChart/>
		</>
	)
}