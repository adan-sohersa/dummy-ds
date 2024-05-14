import React, { type ReactNode, type FC, FocusEventHandler } from 'react'
import { DropdownItem as NextUIDropdownItem } from '@nextui-org/react'
import { type Key } from '@react-types/shared';

enum DropdownColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

interface DropDownItemProps extends React.HTMLAttributes<HTMLLIElement> {
	children: ReactNode,
	key?: Key,
	title?: string | ReactNode,
	description?: string | ReactNode,
	startContent?: ReactNode,
	selectedIcon?: ReactNode,
	readOnly?: boolean,
	closeOnSelect?: boolean,
	href?: string,
	color?: DropdownColors,
	"aria-haspopup": any,
	onFocus?: FocusEventHandler<Element>,
	onBlur?: FocusEventHandler<Element>
}

const DropDownItem: FC<DropDownItemProps> = (props: DropDownItemProps) => {
	const {
		children,
		readOnly,
		...rest
	} = props

	return (
		<NextUIDropdownItem
			isReadOnly={readOnly}
			{...rest}
		>
			{children}
		</NextUIDropdownItem>
	)
}

export { DropdownColors, DropDownItemProps, DropDownItem as default }