mport React from 'react'
import { type FC, type ReactNode } from 'react'
import { Dropdown as NextuiDropdown } from '@nextui-org/react'

export enum DropDownColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

export enum DropDownVariants {
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
	closeonselect?: boolean
}

export const Dropdown: FC<DropDownProps> = (props: DropDownProps) => {
	const {
		children,
		disabled,
		color,
		variant,
		closeonselect,
		...rest
	} = props

	return (<NextuiDropdown
		isDisabled={disabled}
		closeOnSelect={closeonselect}
		{...rest}
	>
		{children}
	</NextuiDropdown>)
}
export {Dropdown as default, DropDownProps}