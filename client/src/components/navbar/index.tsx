import FlexBetween from "@/components/FlexBetween";
import PixIcon from '@mui/icons-material/Pix';
import {useState} from "react";
import {Typography} from "@mui/material";
import Link from "@/components/Link";

export default function Navbar() {
	const [selected, setSelected] = useState<false | 'predictions'>(false)

	return (
		<FlexBetween
			sx={{
				mb: '0.25rem',
				p: '.5rem 0 2rem 0',
				color: 'grey.300'
			}}>
			{/* LEFT SIDE */}
			<Link
				to={'/'}
				onClick={() => setSelected(false)}
			>
				<FlexBetween sx={{gap: '.75rem'}}>
					<PixIcon sx={{fontSize: '1.75rem', color: 'inherit'}}/>

					<Typography
						variant={'h4'}
						fontSize={'1rem'}>
						Finanseer
					</Typography>
				</FlexBetween>
			</Link>

			{/* RIGHT SIDE	*/}
			<FlexBetween sx={{gap: '2rem'}}>
				<Link
					selected={!selected}
					to={'/'}
					onClick={() => setSelected(false)}
				>
					Dashboard
				</Link>

				<Link
					selected={selected === 'predictions'}
					to={'/predictions'}
					onClick={() => setSelected('predictions')}
				>
					Predictions
				</Link>
			</FlexBetween>

		</FlexBetween>
	);
}
