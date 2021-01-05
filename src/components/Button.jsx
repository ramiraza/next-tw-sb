import React from 'react';
import BootstrapBtn from 'react-bootstrap/Button';

const Button = (props) => {
	const {
		text,
		variant = 'primary',
		isDisabled
	} = props;
	
	const TW_PRIMARY = 'bg-purple-300 hover:bg-purple-800';
	const TW_SECONDARY = 'bg-red-300 hover:bg-red-800';
	
	return (
		<BootstrapBtn
			variant={variant}
			className={variant === 'primary' ? TW_PRIMARY : TW_SECONDARY}
		>
			{text}
		</BootstrapBtn>
	)
}

export default Button;