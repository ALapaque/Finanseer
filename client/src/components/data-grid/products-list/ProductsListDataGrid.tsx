import {DataGrid, GridCellParams} from "@mui/x-data-grid";
import {GetProductsResponse} from "@/state/types";
import DataGridContainer from "@/components/data-grid/DataGridContainer";

type Props = {
	data: GetProductsResponse[] | undefined
}

export default function ProductsListDataGrid({data: productData}: Props) {
	const productColumns = [
		{
			field: "_id",
			headerName: "id",
			flex: 1,
		},
		{
			field: "expense",
			headerName: "Expense",
			flex: 0.5,
			renderCell: (params: GridCellParams) => `$${params.value}`,
		},
		{
			field: "price",
			headerName: "Price",
			flex: 0.5,
			renderCell: (params: GridCellParams) => `$${params.value}`,
		},
	];

	if (!productData) {
		return <></>
	}

	return (
		<DataGridContainer>
			<DataGrid
				columnHeaderHeight={25}
				rowHeight={35}
				hideFooter={true}
				rows={productData || []}
				columns={productColumns}
			/>
		</DataGridContainer>
	)
}