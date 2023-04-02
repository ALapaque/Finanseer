import ChartHeader from "@/components/charts/ChartHeader";
import ProfitRevenueChart from "@/components/charts/profit-revenue/ProfitRevenueChart";

export default function ProfitRevenueChartContainer() {
	return (
		<>
			<ChartHeader
				title={'Profit and Revenue'}
				subTitle={'X-axis: Revenue, Y-axis: expenses'}
				informationText={'+4%'}
			/>
			<ProfitRevenueChart/>
		</>
	)
}