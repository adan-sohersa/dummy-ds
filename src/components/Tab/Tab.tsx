import React, { type ReactNode, type FC } from 'react'
import { Tab as NextuiTab } from '@nextui-org/react'

interface TabProps extends React.OptionHTMLAttributes<Element> {
	children: ReactNode
	tabLabel?: ReactNode
	titleValue?: string
	href?: string
	rel?: string
	ping?: string
	download?: boolean | string
}

const Tab: FC<TabProps> = (props: TabProps) => {
	const {
		children,
		tabLabel,
		title,
		...rest
	} = props
	return (
		<NextuiTab
			title={tabLabel}
			{...rest}
		>
			{children}</NextuiTab>
	)
}
export {TabProps, Tab as default}