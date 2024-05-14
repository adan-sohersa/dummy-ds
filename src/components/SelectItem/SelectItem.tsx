import React, { type ReactNode, type FC } from 'react'
import { SelectItem as NextUISelectItem } from '@nextui-org/react'
import type { Key } from '@react-types/shared'

enum SelectItemColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

interface SelectItemProps extends React.OptionHTMLAttributes<Element> {
	children: ReactNode
	key: Key
	label?: string | undefined
	readonly?: boolean
	value?: string | number
	color?: SelectItemColors
}

const SelectItem: FC<SelectItemProps> = (props: SelectItemProps) => {
	const { children, readonly, ...rest } = props
	return (
		<NextUISelectItem
			isReadOnly={readonly}
			{...rest}
		>
			{children}
		</NextUISelectItem>
	)
}

export { SelectItemColors, SelectItemProps, SelectItem as default }
