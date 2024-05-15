import React, { FocusEventHandler } from 'react'
import { Select as NextuiSelect } from '@nextui-org/react'

enum SelectColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

enum SelectSize {
	small = 'sm',
	medium = 'md',
	large = 'lg'
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	children: any
	height?: SelectSize
	color?: SelectColors
	onFocus?: FocusEventHandler<Element>
	onBlur?: FocusEventHandler<Element>
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props: SelectProps, ref) => {
	const { children, height, size, multiple, ...rest } = props
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

export { SelectColors, SelectSize, SelectProps, Select as default }
