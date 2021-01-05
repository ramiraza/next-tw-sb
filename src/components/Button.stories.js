import React from 'react';
import Button from './Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
	}
	
}

const Story = (args) => <Button {...args} />

export const Primary = Story.bind({});
Primary.args = {
	variant: 'primary',
	text: 'Primary'
}

export const Danger = Story.bind({});
Danger.args = {
	variant: 'danger',
	text: 'Danger'
}