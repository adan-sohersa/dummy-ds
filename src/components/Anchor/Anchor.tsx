import React, { type FC, type ReactNode } from 'react'
import { Link as NextuiLink } from '@nextui-org/react'

export enum AnchorColors {
	foreground = 'foreground',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

export enum AnchorSizes {
	small = 'sm',
	medium = 'md',
	large = 'lg'
}

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: ReactNode
	color?: AnchorColors
	isExternal?: boolean
	isBlock?: boolean
	size?: AnchorSizes
	onFocus?: any
	onFocusCapture?: any
	onBlur?: any
	onBlurCapture?: any
}

export const Anchor: FC<AnchorProps> = (props: AnchorProps) => {
	const { children, color, size, ...rest } = props
	return (
		<NextuiLink
			color={color ?? AnchorColors.secondary}
			size={size ?? AnchorSizes.large}
			{...rest}>
			{children}
		</NextuiLink>
	)
}

export {Anchor as default}
