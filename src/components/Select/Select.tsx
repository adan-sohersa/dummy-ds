import React from 'react'
import { Select as NextuiSelect } from '@nextui-org/react'

export enum SelectColors {
	default = 'default',
	foreground = 'foreground',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

export enum SelectSize {
	small = 'sm',
	medium = 'md',
	large = 'lg'
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	children: any
	height?: SelectSize
	color?: SelectColors
	onFocus?: any
	onBlur?: any
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props: SelectProps, ref) => {
	const { children, color, height, size, multiple, ...rest } = props
	return (
		<NextuiSelect
			size={height ?? SelectSize.large}
			selectionMode={typeof multiple === 'boolean' && multiple ? 'multiple' : 'single'}
			ref={ref}
			{...rest}>
			{children}
		</NextuiSelect>
	)
})

Select.displayName = 'Select'

export {Select as default, SelectProps}
