import React from 'react'
import type { ReactNode, FC, HTMLAttributeAnchorTarget, FocusEventHandler } from 'react'
import { ListboxItem as NextUIListboxItem } from '@nextui-org/react'

interface ListboxItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
	children: ReactNode
	key: string | number
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
		color,
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
export {ListboxItem as default, ListboxItemProps}