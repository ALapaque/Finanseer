import {DataGrid, GridCellParams} from "@mui/x-data-grid";
import {GetTransactionsResponse} from "@/state/types";
import DataGridContainer from "@/components/data-grid/DataGridContainer";

type Props = {
	data: GetTransactionsResponse[] | undefined
}

export default function RecentOrdersDataGrid({data: transactionData}: Props) {
	const transactionColumns = [
		{
			field: "_id",
			headerName: "id",
			flex: 1,
		},
		{
			field: "buyer",
			headerName: "Buyer",
			flex: 0.67,
		},
		{
			field: "amount",
			headerName: "Amount",
			flex: 0.35,
			renderCell: (params: GridCellParams) => `$${params.value}`,
		},
		{
			field: "productIds",
			headerName: "Count",
			flex: 0.1,
			renderCell: (params: GridCellParams) =>
				(params.value as Array<string>).length,
		},
	];
	if (!transactionData) {
		return <></>
	}

	return (
		<DataGridContainer>
			<DataGrid
				columnHeaderHeight={25}
				rowHeight={35}
				hideFooter={true}
				rows={transactionData || []}
				columns={transactionColumns}
			/>
		</DataGridContainer>
	)
}