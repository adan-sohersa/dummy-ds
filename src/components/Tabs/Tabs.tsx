import React from 'react'
import { type FC, type ReactNode } from 'react'
import { Tabs as NextuiTabs } from '@nextui-org/react'

export enum TabsVariant {
	solid = 'solid',
	bordered = 'bordered',
	light = 'light',
	underlined = 'underlined'
}

export enum TabsColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

export enum TabsSize {
	small = 'sm',
	medium = 'md',
	large = 'lg'
}

interface TabsProps extends React.SelectHTMLAttributes<Element> {
	children: ReactNode
	key?: React.Key | null | undefined
	variant?: TabsVariant
	color?: TabsColors
	height?: TabsSize
	fullWidth?: boolean
	disabledKeys?: any
	selectedKey?: React.Key | null
	defaultSelectedKey?: React.Key
	disabled?: boolean
	animated?: boolean
	onChange?: any
	onCopy?: any
	onCopyCapture?: any
	onSelectionChange: (key: React.Key) => any
}

export const Tabs: FC<TabsProps> = (props: TabsProps) => {
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
export {TabsProps, Tabs as default}