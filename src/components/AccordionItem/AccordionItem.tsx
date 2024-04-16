'use client'
import React, { type ReactNode, type FC } from 'react'
import { AccordionItem as NextUIAccordionItem } from '@nextui-org/react'

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	key?: React.Key | null | undefined
}

 const AccordionItem: FC<AccordionItemProps> = (props: AccordionItemProps) => {
	const { children } = props
	const { key } = props
	return (
		<NextUIAccordionItem key= {key}>{children}</NextUIAccordionItem>
	)
}
export {AccordionItem as desfault, AccordionItemProps}