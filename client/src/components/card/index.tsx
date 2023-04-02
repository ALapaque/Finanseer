import {Box, styled} from "@mui/material";

const Card = styled(Box)(({theme}) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'center',
	backgroundColor: (theme.palette.background as any).light,
	borderRadius: '1rem',
	boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
}))

export default Card
