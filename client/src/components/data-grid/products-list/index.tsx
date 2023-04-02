import CardHeader from "@/components/card/CardHeader";
import ProductsListDataGrid from "@/components/data-grid/products-list/ProductsListDataGrid";
import {useGetProductsQuery} from "@/state/api";

export default function ProductsListDataGridContainer() {
	const { data: productData } = useGetProductsQuery();

	return (
		<>
			<CardHeader
				title={'List of Products'}
				informationText={`${productData?.length} products`}
			/>
			<ProductsListDataGrid data={productData}/>
		</>
	)
}