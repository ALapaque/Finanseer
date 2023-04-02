import React, {useMemo} from "react";
import {createTheme} from "@mui/material/styles";
import {themeSettings} from "@/theme";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "@/pages/dashboard";
import Predictions from "@/pages/predictions/Predictions";
import {useGetKpisQuery} from "@/state/api";
import Navbar from "@/components/navbar";

export default function App() {
	const theme = useMemo(() => createTheme({
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						scrollbarColor: `${themeSettings.palette.primary.main} ${themeSettings.palette.primary.main}`,
						"&::-webkit-scrollbar, & *::-webkit-scrollbar": {
							backgroundColor: 'transparent',
						},
						"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
							borderRadius: 8,
							backgroundColor: '#61c6b7',
							minHeight: 24,
							border: "3px solid #2b2b2b",
						},
						"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
							backgroundColor: "#499d91",
						},
						"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
							backgroundColor: "#499d91",
						},
						"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
							backgroundColor: "#499d91",
						},
						"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
							backgroundColor: "#499d91",
						},
					},
				},
			},
		},
		...themeSettings
	}), [])
	const {data} = useGetKpisQuery()

	console.log(data)

	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline/>

					<Box
						sx={{
							display: 'grid',
							width: '100%',
							height: '100%',
							padding: '2rem',
							pt: '1rem',
							overflow: 'auto'
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