import CardHeader from "@/components/card/CardHeader";
import CampainsTargetsChart from "@/components/charts/campains-targets/CampainsTargetsChart";
import FlexBetween from "@/components/FlexBetween";
import {Box} from "@mui/material";
import {Typography} from "@mui/material";

export default function CampainsTargetsChartContainer() {
	return (
		<>
			<CardHeader
				title={'Campaigns and Targets'}
				informationText={'+4%'}
			/>
			<FlexBetween sx={{
				my: '.25rem',
				gap: '1.5rem',
				pr: '1rem'
			}}>
				<CampainsTargetsChart/>

				<Box sx={{
					flexBasis: '40%',
					textAlign: 'center'
				}}>
					<Typography variant="h5">Target Sales</Typography>
					<Typography
						variant="h3"
						sx={{
							m: '0.3rem 0',
							color: 'primary.300'
						}}>
						83
					</Typography>
					<Typography variant="h6">
						Finance goals of the campaign that is desired
					</Typography>
				</Box>
				<Box sx={{flexBasis: "40%"}}>
					<Typography variant="h5">Losses in Revenue</Typography>
					<Typography variant="h6">Losses are down 25%</Typography>
					<Typography variant="h5" sx={{mt: '0.4rem'}}>
						Profit Margins
					</Typography>
					<Typography variant="h6">
						Margins are up by 30% from last month.
					</Typography>
				</Box>
			</FlexBetween>
		</>
	)
}