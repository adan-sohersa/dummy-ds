import React from 'react'
import { type FC, type ReactNode } from 'react'
import { Tabs as NextuiTabs } from '@nextui-org/react'
import { type Key } from '@react-types/shared'

enum TabsVariant {
	solid = 'solid',
	bordered = 'bordered',
	light = 'light',
	underlined = 'underlined'
}

enum TabsColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

enum TabsSize {
	small = 'sm',
	medium = 'md',
	large = 'lg'
}

interface TabsProps extends React.SelectHTMLAttributes<HTMLDivElement> {
	children: ReactNode
	variant?: TabsVariant
	color?: TabsColors
	height?: TabsSize
	fullWidth?: boolean
	disabledKeys?: Key[]
	selectedKey?: Key
	defaultSelectedKey?: Key
	disabled?: boolean
	animated?: boolean
}

const Tabs: FC<TabsProps> = (props: TabsProps) => {
	const {
		children,
		disabled,
		color,
		height,
		size,
		animated,
		...rest
	} = props

	return (
		<NextuiTabs
			isDisabled={disabled}
			disableAnimation={
				typeof animated === 'boolean' ? !animated : false}
			size={height}
			color ={color ?? TabsColors.default }
			{...rest}
		>
			{children}
		</NextuiTabs>
	)
}

export { TabsVariant, TabsColors, TabsSize, TabsProps, Tabs as default}
