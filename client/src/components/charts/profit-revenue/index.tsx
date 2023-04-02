import CardHeader from "@/components/card/CardHeader";
import ProfitRevenueChart from "@/components/charts/profit-revenue/ProfitRevenueChart";

export default function ProfitRevenueChartContainer() {
	return (
		<>
			<CardHeader
				title={'Profit and Revenue'}
				subTitle={'X-axis: Revenue, Y-axis: expenses'}
				informationText={'+4%'}
			/>
			<ProfitRevenueChart/>
		</>
	)
}