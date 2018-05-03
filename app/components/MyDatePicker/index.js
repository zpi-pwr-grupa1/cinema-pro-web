import React from "react";
import {TextField} from "material-ui";

const hideAutoFillColorStyle = {
	WebkitBoxShadow: '0 0 0 1000px white inset'
};
const hintStyle = {
	zIndex: '1'
};

const styles = {
	floatingLabelFocusStyle: {
		color: "#FF4081",
	},
	underlineStyle: {
		borderColor: "#FF4081",
	},
};

class MyDatePicker extends React.Component {

	render () {
		return (
			<div onClick={this.props.onClick}>
				<TextField
					name="screeningStart"
					floatingLabelText="Data wyświetlenia:"
					fullWidth={true}
					floatingLabelFixed={true}
					value={this.props.value}
					inputStyle={hideAutoFillColorStyle}
					hintStyle={hintStyle}
					underlineFocusStyle={styles.underlineStyle}
					floatingLabelFocusStyle={styles.floatingLabelFocusStyle}>
				</TextField>
			</div>
		)
	}
}

export default MyDatePicker;