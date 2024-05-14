import React from 'react'
import { type FC, type ReactNode } from 'react'
import { Dropdown as NextuiDropdown } from '@nextui-org/react'

enum DropDownColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

enum DropDownVariants {
	solid = 'solid',
	bordered = 'bordered',
	light = 'ligth',
	flat = 'flat',
	faded = 'faded',
	shadow = 'shadow'
}

interface DropDownProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode[]
	disabled?: boolean
	color?: DropDownColors
	variant?: DropDownVariants
	closeOnSelect?: boolean
}

const Dropdown: FC<DropDownProps> = (props: DropDownProps) => {
	const {
		children,
		disabled,
		...rest
	} = props

	return (<NextuiDropdown
		isDisabled={disabled}
		{...rest}
	>
		{children}
	</NextuiDropdown>)
}
export { DropDownColors, DropDownVariants, DropDownProps, Dropdown as default }