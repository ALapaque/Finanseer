import React, {useMemo} from "react";
import {createTheme} from "@mui/material/styles";
import {themeSettings} from "@/theme";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions/Predictions";
import {useGetKpisQuery} from "@/state/api";

export default function App() {
	const theme = useMemo(() => createTheme(themeSettings), [])
	const {data} = useGetKpisQuery()

	console.log(data)

	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline/>

					<Box
						sx={{
							width: '100%',
							height: '100%',
							padding: '1rem 2rem 4rem 2rem'
						}}>
						{/* NAVBAR */}
						<Navbar/>

						{/* ROUTER OUTLET CONTENT */}
						<Routes>
							<Route path="/" element={<Dashboard/>}/>
							<Route path="/predictions" element={<Predictions/>}/>
						</Routes>
					</Box>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	)
}