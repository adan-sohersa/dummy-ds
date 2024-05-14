import React, { type ReactNode, type FC, type FocusEventHandler } from 'react'
import { Listbox as NextUIListbox } from '@nextui-org/react'

enum ListboxVariants {
	solid = 'solid',
	bordered = 'bordered',
	light = 'light',
	flat = 'flat',
	faded = 'faded',
	shadow = 'shadow'
}

enum ListboxColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

enum ListBoxMode {
	none = 'none',
	single = 'single',
	multiple = 'multiple'
}

interface ListboxProps extends React.HTMLAttributes<HTMLUListElement> {
	children: ReactNode[]
	variant?: ListboxVariants
	color?: ListboxColors
	disabledKeys?: React.Key[]
	animated: boolean
	selectionMode?: ListBoxMode
	onFocus?: FocusEventHandler<Element>
	onBlur?: FocusEventHandler<Element>
}

const Listbox: FC<ListboxProps> = (props: ListboxProps) => {
	const {
		children,
		variant,
		color,
		animated,
		selectionMode,
		...rest
	} = props

	return <NextUIListbox
		{...rest}
		variant={variant ?? ListboxVariants.light}
		color={color ?? ListboxColors.default}
		disableAnimation={typeof animated === 'boolean' ? !animated : false}
		selectionMode={selectionMode ?? ListBoxMode.multiple}
	>
		{children}
	</NextUIListbox>
}

export { ListboxVariants, ListboxColors, ListBoxMode, ListboxProps, Listbox as default }
