import React from 'react'
import { type FC, type ReactNode } from 'react'
import { Switch } from '@nextui-org/react'

export enum ToggleSize {
	small = 'sm',
	medium = 'md',
	large = 'lg'
}

export enum ToggleColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warming = 'warming',
	danger = 'danger'
}

export interface ToggleProps extends React.InputHTMLAttributes<Element> {
	children?: ReactNode
	name?: string
	height?: ToggleSize
	color?: ToggleColors
	startContent?: ReactNode
	endContent?: ReactNode
	thumbIcon?: ReactNode
	checked?: boolean
}

const Toggle: FC<ToggleProps> = (props: ToggleProps) => {
	const {
		children,
		name,
		height,
		color,
		checked,
		disabled,
		readOnly,
		value,
		size,
		...rest
	} = props

	return (<Switch
		isSelected={checked}
		isDisabled={disabled}
		isReadOnly={readOnly}
		size={height}
		{...rest}>
		{children}
	</Switch>
	)
}

export default Toggle