import {Box, useTheme} from "@mui/material";
import DashboardCard from "@/components/DashboardCard";
import DashboardCardType from "@/types/DashboardCardType";
import RevenueExpensesChartContainer from "@/components/charts/revenue-expenses";
import ProfitRevenueChartContainer from "@/components/charts/profit-revenue";
import MonthlyRevenueChartContainer from "@/components/charts/monthly-revenue";
import OperationalDataChartContainer from "@/components/charts/operational-data";
import CampainsTargetsChartContainer from "@/components/charts/campains-targets";
import ProductPricesExpensesChartContainer from "@/components/charts/product-prices-expenses";

const gridTemplateAreas = {
	lg: `
	"a b c"
	"a b c"
	"a b c"
	"a b f"
	"d e f"
	"d e f"
	"d h i"
	"g h i"
	"g h j"
	"g h j"
`,
	md: `
	"a a"
	"a a"
	"a a"
	"a a"
	"b c"
	"b c"
	"d e"
	"d e"
	"d h"
	"d h"
	"g h"
	"g h"
	"g h"
	"g h"
	"g h"
	"g h"
	"g h"
	"i f"
	"i f"
	"i f"
	"i f"
	"i f"
	"i f"
	"j j"
	"j j"
	"j j"
	"j j"
	"j j"
	"j j"
`,
	sm: `
	"a"
	"b"
	"c"
	"d"
	"e"
	"f"
	"g"
	"h"
	"i"
	"j"`
}

const cards: Array<DashboardCardType> = [
	{
		area: 'a',
		component: RevenueExpensesChartContainer
	},
	{
		area: 'b',
		component: ProfitRevenueChartContainer
	},
	{
		area: 'c',
		component: MonthlyRevenueChartContainer
	},
	{
		area: 'd',
		component: OperationalDataChartContainer
	},
	{
		area: 'e',
		component: CampainsTargetsChartContainer
	},
	{
		area: 'f',
		component: ProductPricesExpensesChartContainer
	}
]

export default function Dashboard() {
	const theme = useTheme()

	return (
		<Box sx={{
			width: '100%',
			height: '100%',
			display: 'grid',
			gap: '1.5rem',
			gridTemplateColumns: "repeat(3, minmax(calc(33% - 1.5rem), 1fr))",
			gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
			gridTemplateAreas: gridTemplateAreas.lg,
			[theme.breakpoints.down('xl')]: {
				gridTemplateColumns: "repeat(2, minmax(calc(50% - 1.5rem), 1fr))",
				gridTemplateRows: "repeat(10, minmax(min-content, 1fr))",
				gridTemplateAreas: gridTemplateAreas.md
			},
			[theme.breakpoints.down('md')]: {
				gridTemplateColumns: "1fr",
				gridTemplateRows: "repeat(10, minmax(min-content, 1fr))",
				gridTemplateAreas: gridTemplateAreas.sm
			}
		}}>
			{cards.map(({area, component: Component}: DashboardCardType, index: number) => (
				<DashboardCard key={index} gridArea={area}>
					<Component/>
				</DashboardCard>
			))}
		</Box>
	)
}