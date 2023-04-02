import ChartHeader from "@/components/charts/ChartHeader";
import ProductPricesExpensesChart from "@/components/charts/product-prices-expenses/ProductPricesExpensesChart";

export default function ProductPricesExpensesChartContainer() {
	return (
		<>
			<ChartHeader
				title={'Product Prices vs Expenses'}
				informationText={'+4%'}
			/>
			<ProductPricesExpensesChart/>
		</>
	)
}