import React from 'react'
import { Anchor, type AnchorProps } from '@/src/general/infraestructure/ui/react/Anchor'

interface SidebarProps extends React.AllHTMLAttributes<Element> {
	links?: AnchorProps[]
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
	const { links } = props

	return (
		<nav className="fixed top-0 left-0 bottom-0 w-[150px] bg-[#D9D9D9] border-x-[#69548D] place-items-center">

			<h4>SOHERSA</h4>

			{typeof links !== 'undefined' &&

				<section className='place-items-center text-center flex-col space-y-10'>
					{links.map(link => {
						const { children: linkChildren, ...rest } = link
						return <Anchor key={rest.href} {...rest}>{linkChildren}</Anchor>
					})}
				</section>

			}

		</nav>
	)
}

export { type SidebarProps, Sidebar as default }