import CardHeader from "@/components/card/CardHeader";
import ProductPricesExpensesChart from "@/components/charts/product-prices-expenses/ProductPricesExpensesChart";

export default function ProductPricesExpensesChartContainer() {
	return (
		<>
			<CardHeader
				title={'Product Prices vs Expenses'}
				informationText={'+4%'}
			/>
			<ProductPricesExpensesChart/>
		</>
	)
}