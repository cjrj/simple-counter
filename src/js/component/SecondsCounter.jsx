import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

export function SecondsCounter(props) {
	return (
		<div className="main-container">
			<div className="digit-cell">
				<FontAwesomeIcon icon={faClock} />
			</div>
			<div className="digit-cell sixthDigit">{props.digitSix % 10}</div>
			<div className="digit-cell fifthDigit">{props.digitFive % 10}</div>
			<div className="digit-cell fourthDigit">{props.digitFour % 10}</div>
			<div className="digit-cell thirdDigit">{props.digitThree % 10}</div>
			<div className="digit-cell secondDigit">{props.digitTwo % 10}</div>
			<div className="digit-cell firstDigit">{props.digitOne % 10}</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	digitSix: propTypes.number,
	digitFive: propTypes.number,
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number,
};

let counter = 0;
setInterval(function () {
	const sixthDigit = Math.floor(counter / 100000);
	const fifthDigit = Math.floor(counter / 10000);
	const fourthDigit = Math.floor(counter / 1000);
	const thirdDigit = Math.floor(counter / 100);
	const secondDigit = Math.floor(counter / 10);
	const firstDigit = Math.floor(counter / 1);
	counter++;
	console.log(
		sixthDigit,
		fifthDigit,
		fourthDigit,
		thirdDigit,
		secondDigit,
		firstDigit
	);

	ReactDOM.render(
		<SecondsCounter
			digitOne={firstDigit}
			digitTwo={secondDigit}
			digitThree={thirdDigit}
			digitFour={fourthDigit}
			digitFive={fifthDigit}
			digitSix={sixthDigit}
		/>,
		document.querySelector("#app")
	);
}, 1000);
