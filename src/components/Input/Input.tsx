import React from 'react'
import type { ReactNode } from 'react'
import { Input as NextUiInput } from '@nextui-org/react'

enum InputColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

enum InputVariants {
	flat = 'flat',
	outline = 'underlined',
	underlined = 'underlined',
	faded = 'flat'
}

enum InputHeight {
	small = 'sm',
	medium = 'md',
	large = 'lg'
}

enum LabelPlacement {
	inside = 'inside',
	outside = 'outside',
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode
	variant?: InputVariants
	color?: InputColors
	height?: InputHeight
	label?: ReactNode
	defaultValue?: string
	description?: ReactNode
	errorMessage?: ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	labelPlacement?: LabelPlacement
	fullWidth?: boolean
	isClearable?: boolean
	isInvalid?: boolean
	onFocus?: any
	onBlur?: any
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
	const {
		children,
		required,
		readOnly,
		disabled,
		height,
		value,
		size,
		...rest
	} = props

	return (
		<NextUiInput
			size={height}
			isRequired={required}
			isReadOnly={readOnly}
			isDisabled={disabled}
			defaultValue={value?.toString()}
			ref={ref}
			{...rest}
		>
			{children}
		</NextUiInput>
	)
})

Input.displayName = 'Input'

export { InputVariants, InputColors, InputHeight, LabelPlacement, Input as default }