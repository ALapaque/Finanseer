import {Link as ReactRouterLink, LinkProps} from "react-router-dom";
import {styled} from "@mui/material";

type Props = {
	selected?: boolean
} & LinkProps

const Link = styled(({selected, className, ...linkProps}: Props) => {
	return (
		<ReactRouterLink
			className={`${className} ${selected ? 'selected' : ''}`}
			{...linkProps}
		/>
	)
})(({theme}) => ({
	textDecoration: 'none',
	color: 'inherit',
	'&.selected': {
		color: theme.palette.primary['100']
	},
	'&:hover': {
		color: theme.palette.primary['100']
	}
}))

export default Link
