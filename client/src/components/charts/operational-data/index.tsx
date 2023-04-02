import ChartHeader from "@/components/charts/ChartHeader";
import OperationalDataChart from "@/components/charts/operational-data/OperationalDataChart";

export default function OperationalDataChartContainer() {
	return (
		<>
			<ChartHeader
				title={'Operational vs Non-Operational Expenses'}
				informationText={'+4%'}
			/>
			<OperationalDataChart/>
		</>
	)
}