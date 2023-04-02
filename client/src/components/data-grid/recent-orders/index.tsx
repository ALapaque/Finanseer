import CardHeader from "@/components/card/CardHeader";
import {useGetTransactionsQuery} from "@/state/api";
import RecentOrdersDataGrid from "@/components/data-grid/recent-orders/RecentOrdersDataGrid";

export default function RecentOrdersDataGridContainer() {
	const { data: transactionData } = useGetTransactionsQuery();

	return (
		<>
			<CardHeader
				title={'Recent Order'}
				informationText={`${transactionData?.length} latest transactions`}
			/>
			<RecentOrdersDataGrid data={transactionData}/>
		</>
	)
}