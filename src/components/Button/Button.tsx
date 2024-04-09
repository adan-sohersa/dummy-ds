import React, { type FC, type ReactNode } from 'react'
import { Button as NextUIButton } from '@nextui-org/react'

export enum ButtonColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

export enum ButtonVariants {
	solid = 'solid',
	bordered = 'bordered',
	flat = 'flat'
}

export enum ButtonSize {
	small = 'sm',
	medium = 'md',
	large = 'lg'
}

export enum ButtonRadius {
	full = 'full',
	large = 'lg',
	med = 'md',
	small = 'sm',
	none = 'none'
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: ButtonVariants
	color?: ButtonColors
	size?: ButtonSize
	radius?: ButtonRadius
	onFocus?: any
	onBlur?: any
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
	const {
		children,
		variant,
		color,
		size,
		disabled,
		...rest
	} = props
	return (
		<NextUIButton
			{...rest}
			variant={variant ?? ButtonVariants.solid}
			size={size ?? ButtonSize.medium}
			isDisabled={disabled}
			color={color ?? ButtonColors.primary}
		>
			{children}
		</NextUIButton>
	)
}

export default Button