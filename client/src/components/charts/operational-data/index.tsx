import CardHeader from "@/components/card/CardHeader";
import OperationalDataChart from "@/components/charts/operational-data/OperationalDataChart";

export default function OperationalDataChartContainer() {
	return (
		<>
			<CardHeader
				title={'Operational vs Non-Operational Expenses'}
				informationText={'+4%'}
			/>
			<OperationalDataChart/>
		</>
	)
}