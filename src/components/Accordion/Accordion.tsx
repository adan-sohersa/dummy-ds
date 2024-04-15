'use client'

import React from 'react'
import type { FC } from 'react'
import { Accordion as NextuiAccordion } from '@nextui-org/react'

enum AccordionColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

enum AccordionVariants {
	unfilled = 'light',
	filled = 'shadow'
}

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
	children: any
	animated?: boolean
	disabled?: boolean
	variant?: AccordionVariants
	multipleSelecction?: boolean
	color?: AccordionColors
}

const Accordion: FC<AccordionProps> = (props: AccordionProps) => {
	const {
		children,
		animated,
		disabled,
		multipleSelecction,
		...rest
	} = props

	return (<NextuiAccordion
		isDisabled={disabled}
		disableAnimation={
			typeof animated === 'boolean' ? !animated : false}
		selectionMode={
			typeof multipleSelecction === 'boolean' &&
				multipleSelecction
				? 'multiple'
				: 'single'
		}
		{...rest}
	>
		{children}
	</NextuiAccordion>)
}

export { AccordionColors, AccordionVariants, Accordion as default, AccordionProps }
