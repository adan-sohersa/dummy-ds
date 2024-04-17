import React, { type ReactNode, type FC } from 'react'
import { SelectItem as NextUISelectItem } from '@nextui-org/react'

export enum SelectItemColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

interface SelectItemProps extends React.OptionHTMLAttributes<Element> {
	children: ReactNode
	key: any
	disabled?: boolean
	label?: string | undefined
	selected?: boolean | undefined
	value?: string | number
	color?: SelectItemColors
}

 const SelectItem: FC<SelectItemProps> = (props: SelectItemProps) => {
	const { children, ...rest } = props
	return (
		<NextUISelectItem {...rest}>{children}</NextUISelectItem>
	)
}
export {SelectItem as default, SelectItemProps}