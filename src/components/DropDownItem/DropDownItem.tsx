'use client'
import React, { type ReactNode, type FC } from 'react'
import { DropdownItem as NextUIDropdownItem } from '@nextui-org/react'

interface DropDownItemProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	key?: React.Key | null | undefined
}

 const DropDownItem: FC<DropDownItemProps> = (props: DropDownItemProps) => {
	const { children } = props

	return (
		<NextUIDropdownItem>{children}</NextUIDropdownItem>
	)
}
export {DropDownItem as default, DropDownItemProps}