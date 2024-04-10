import React, { type ReactNode, type FC } from 'react'
import {
	CardHeader,
	CardBody,
	CardFooter,
	Card as NexUICard
} from '@nextui-org/react'

export enum CardVariants {
	flat = 'false',
	blurred = 'true'
}

export enum CardShadows {
	none = 'none',
	sm = 'sm',
	md = 'md',
	lg = 'lg'
}

export enum CardRadius {
	none = 'none',
	sm = 'sm',
	md = 'md',
	lg = 'lg'
}

export interface CardProps extends React.AllHTMLAttributes<Element> {
	header?: ReactNode
	image?: ReactNode
	children: ReactNode
	footer?: ReactNode
	shadow?: CardShadows
	variant?: CardVariants
	disbled?: boolean
	animated?: boolean
	clickeable?: boolean
	onFocus?: any
	bodyClassNames?: string
}

const Card: FC<CardProps> = (props: CardProps) => {
	const {
		header,
		children,
		footer,
		shadow,
		variant,
		disbled,
		animated,
		clickeable,
		as,
		bodyClassNames,
		...rest
	} = props
	return (
		<NexUICard
			shadow={shadow ?? CardShadows.md}
			isDisabled={disbled}
			disableAnimation={!(typeof animated === 'boolean' && animated)}
			isPressable={clickeable}
			isBlurred={variant === CardVariants.blurred}
			{...rest}
		>
			{typeof header !== 'undefined' && <CardHeader>{header}</CardHeader>}
			<CardBody className={bodyClassNames}>{children}</CardBody>
			{typeof footer !== 'undefined' && <CardFooter>{footer}</CardFooter>}
		</NexUICard>
	)
}

export default Card