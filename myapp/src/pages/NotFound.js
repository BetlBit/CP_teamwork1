import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";


export const NotFound = () => {
	const theme = useContext(ThemeContext)

	return (
		<div className="NotFound">
			<div class='c'>
				<div class='_404'>404</div>
				<div class='_1'>THE PAGE</div>
				<div class='_2'>WAS NOT FOUND</div>
				<a class='btn' href='/home'>BACK TO HOME</a>
			</div>
		</div>
	)
}