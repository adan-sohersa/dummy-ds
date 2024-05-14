import React from 'react'
import { Avatar as NexuiAvatar } from '@nextui-org/react'

enum AvatarColors {
	default = 'default',
	primary = 'primary',
	secondary = 'secondary',
	success = 'success',
	warning = 'warning',
	danger = 'danger'
}

enum AvatarSizes {
	sm = 'sm',
	md = 'md',
	lg = 'lg'
}

enum AvatarRadius {
	full = 'full',
	large = 'lg',
	medium = 'md',
	small = 'sm'
}

interface AvatarProps {
	photo?: string
	size?: AvatarSizes
	disabled?: boolean
	bordered?: boolean
	radiusSize?: AvatarRadius
	color?: AvatarColors
	optionalText: string
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
	const { photo, size, disabled, bordered, radiusSize, color, optionalText } = props
	return <NexuiAvatar
		src={photo ?? ''}
		size={size ?? AvatarSizes.md}
		isDisabled={disabled}
		isBordered={bordered}
		radius={radiusSize ?? AvatarRadius.full}
		color={color ?? AvatarColors.default}
		name={optionalText}
	/>
}

export { AvatarColors, AvatarRadius, AvatarSizes, Avatar as default, AvatarProps }
