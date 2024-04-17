'use client'

import React, { type ReactNode, type FC } from 'react'
import Button, { type ButtonVariants, type ButtonColors, type ButtonSize, type ButtonRadius, type ButtonProps } from '@/src/general/infraestructure/ui/react/Button'
import {
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Modal as NextUiModal
} from '@nextui-org/react'

enum ModalSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl'
}

enum ModalShadow {
	none = 'none',
	small = 'smll',
	medium = 'med',
	large = 'large'
}

enum ModalBackdrop {
	none = 'transparent',
	opaque = 'opaque',
	blur = 'blur'
}

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	// Intrinsic properties
	closingCallback?: (...args: any) => any
	children: ReactNode
	actions?: ButtonProps[]
	title?: string
	size?: ModalSize
	backdrop?: ModalBackdrop
	shadow?: ModalShadow
	// Button properties
	buttonChildren: ReactNode
	buttonVariant?: ButtonVariants
	buttonColor?: ButtonColors
	buttonSize?: ButtonSize
	buttonRadius?: ButtonRadius
	buttonDisabled?: boolean
}

const Modal: FC<ModalProps> = (props: ModalProps) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const {
		children,
		actions,
		title,
		size,
		backdrop,
		buttonChildren,
		buttonVariant,
		buttonColor,
		buttonSize,
		buttonRadius,
		buttonDisabled
	} = props
	return (
		<>
			<Button onClick={onOpen} variant={buttonVariant} color={buttonColor} size={buttonSize} disabled={buttonDisabled} radius={buttonRadius}>{buttonChildren}</Button>
			<NextUiModal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				isDismissable={false}
				backdrop={backdrop ?? ModalBackdrop.opaque}
				size={size}
			>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
							<ModalBody>
								{children}
							</ModalBody>
							{typeof actions !== 'undefined' && <ModalFooter>
								{actions?.map((action, i) => {
									const { children: actionChildren, color: actionColor, ...rest } = action

									return (<Button
										key={`${i}-${actionColor}`}
										color={actionColor}
										{...rest}
									>
										{actionChildren}
									</Button>)
								})}
							</ModalFooter>}
						</>
					)}
				</ModalContent>
			</NextUiModal>
		</>
	)
}
export type { ModalSize, ModalShadow, ModalBackdrop, ModalProps }
export default Modal
