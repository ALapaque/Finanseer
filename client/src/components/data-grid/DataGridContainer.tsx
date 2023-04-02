import {Box, styled} from '@mui/material';

const DataGridContainer = styled(Box)(({theme}) => ({
	height: '100%',
	width: '100%',
	'.MuiDataGrid-root': {
		color: theme.palette.grey[300],
		border: 'none',
		padding: '.5rem .5rem',

	},
	'.MuiDataGrid-cell': {
		borderBottom: `1px solid ${theme.palette.grey[800]} !important`,
	},
	'.MuiDataGrid-columnHeaders': {
		borderBottom: `1px solid ${theme.palette.grey[800]} !important`,
		'.MuiSvgIcon-root': {
			color: theme.palette.grey[300]
		}
	},
	'.MuiDataGrid-columnSeparator': {
		visibility: 'hidden',
	},
}))

export default DataGridContainer