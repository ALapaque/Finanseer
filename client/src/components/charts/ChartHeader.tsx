import FlexBetween from "@/components/FlexBetween";
import {ReactNode} from "react";
import {Box, Typography} from "@mui/material";

type Props = {
	icon?: ReactNode,
	title: string,
	subTitle?: string,
	informationText?: string
}

export default function ChartHeader({icon, title, subTitle, informationText}: Props) {
	return (
		<FlexBetween sx={{
			color: 'grey.400',
			padding: '1rem 1rem 0rem 1rem',
			width: '100%'
		}}>
			<FlexBetween>
				{icon}
				<Box>
					<Typography variant={'h4'}>{title}</Typography>
					<Typography variant={'h6'}>{subTitle}</Typography>
				</Box>
			</FlexBetween>

			<Typography
				variant={'h5'}
				sx={{
					color: 'secondary.500'
				}}
			>
				{informationText}
			</Typography>
		</FlexBetween>
	)
}