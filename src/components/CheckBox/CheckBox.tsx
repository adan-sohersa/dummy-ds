import React from 'react'
import type { ReactNode, FC, FocusEventHandler } from 'react'
import { Checkbox as NextUiCheckBox } from '@nextui-org/react'

enum CheckBoxSize {
	small = 'sm',
	medium = 'md',
	large = 'lg'
}

enum CheckBoxColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	children: ReactNode
	checked?: boolean
	height?: CheckBoxSize
	color?: CheckBoxColors
	indeterminated?: boolean
	onFocus?: FocusEventHandler<Element>
	onBlur?: FocusEventHandler<Element>
}

const CheckBox: FC<CheckBoxProps> = (props: CheckBoxProps) => {
	const {
		children,
		checked,
		height,
		color,
		indeterminated,
		readOnly,
		disabled,
		size,
		value,
		...rest
	} = props
	return (
		<NextUiCheckBox
			color={color ?? CheckBoxColors.primary}
			defaultSelected={checked}
			isIndeterminate={indeterminated}
			isReadOnly={readOnly}
			size={height ?? CheckBoxSize.medium}
			isDisabled={disabled}
			{...rest}
		>{children}</NextUiCheckBox>
	)
}
export { CheckBoxSize, CheckBoxColors, CheckBoxProps, CheckBox as default}