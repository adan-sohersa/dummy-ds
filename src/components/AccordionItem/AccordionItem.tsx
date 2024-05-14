import React, { type ReactNode, type FC, MouseEventHandler } from 'react'
import { AccordionItem as NextUIAccordionItem } from '@nextui-org/react'

interface AccordionItemProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	key?: React.Key | null | undefined,
}

 const AccordionItem: FC<AccordionItemProps> = (props: AccordionItemProps) => {
	const { children, onFocus, onBlur, ...rest } = props
	return (
		<NextUIAccordionItem {...rest}>{children}</NextUIAccordionItem>
	)
}
export {AccordionItem as desfault, AccordionItemProps}