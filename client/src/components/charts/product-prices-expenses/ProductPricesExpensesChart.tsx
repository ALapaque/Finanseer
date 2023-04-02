import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	Line,
	ResponsiveContainer, Scatter, ScatterChart,
	Tooltip,
	XAxis,
	YAxis, ZAxis
} from "recharts";
import {useGetKpisQuery, useGetProductsQuery} from "@/state/api";
import {useMemo} from "react";
import {useTheme} from "@mui/material";

export default function ProductPricesExpensesChart() {
	const {palette} = useTheme()
	const {data: productData} = useGetProductsQuery();
	const productExpenseData = useMemo(() => {
		return (
			productData &&
			productData.map(({_id, price, expense}) => {
				return {
					id: _id,
					price: price,
					expense: expense,
				};
			})
		);
	}, [productData]);

	if (!productData) {
		return <></>
	}

	return (
		<ResponsiveContainer>
			<ScatterChart
				margin={{
					top: 25,
					right: 25,
					left: -25,
					bottom: 10,
				}}
				style={{
					width: '100%',
					minHeight: '200px'
				}}
			>
				<CartesianGrid stroke={palette.grey[800]}/>
				<XAxis
					type="number"
					dataKey="price"
					name="price"
					axisLine={false}
					tickLine={false}
					style={{fontSize: "10px"}}
					tickFormatter={(v) => `$${v}`}
				/>
				<YAxis
					type="number"
					dataKey="expense"
					name="expense"
					axisLine={false}
					tickLine={false}
					style={{fontSize: "10px"}}
					tickFormatter={(v) => `$${v}`}
				/>
				<ZAxis type="number" range={[20]}/>
				<Tooltip formatter={(v) => `$${v}`}/>
				<Scatter
					name="Product Expense Ratio"
					data={productExpenseData}
					fill={palette.tertiary[500]}
				/>
			</ScatterChart>
		</ResponsiveContainer>
	)
}