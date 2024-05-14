import React from 'react'
import type { ReactNode, FC, HTMLAttributeAnchorTarget, FocusEventHandler } from 'react'
import { ListboxItem as NextUIListboxItem } from '@nextui-org/react'
import type { Key } from '@react-types/shared';

enum ListboxItemColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

interface ListboxItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	children: ReactNode
	key: Key
	color?: ListboxItemColors
	description?: string | ReactNode
	startContent?: ReactNode
	endContent?: ReactNode
	selectedIcon?: any
	href?: string
	target?: HTMLAttributeAnchorTarget
	withDivider?: boolean
	readOnly?: boolean
	onFocus?: FocusEventHandler<Element>
	onBlur?: FocusEventHandler<Element>
}

 const ListboxItem: FC<ListboxItemProps> = (props: ListboxItemProps) => {
	const {
		children,
		withDivider,
		readOnly,
		...rest
	} = props
	return (
		<NextUIListboxItem
			showDivider={withDivider}
			isReadOnly={readOnly}
			{...rest}
		>
			{children}
		</NextUIListboxItem>
	)
}
export { ListboxItemColors, ListboxItemProps, ListboxItem as default }