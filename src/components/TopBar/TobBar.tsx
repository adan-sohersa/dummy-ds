import React from 'react'
import {
	Navbar as NextUiNavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem
} from '@nextui-org/react'
import Avatar from '@/src/general/infraestructure/ui/react/Avatar'
import { Anchor } from '@/src/general/infraestructure/ui/react/Anchor'
import ThemeSwitcher from './ThemeSwitcher'

const TopBar: React.FC = () => {
	return (
		<NextUiNavbar disableScrollHandler={true}>

			<NavbarContent justify='start'>
				<NavbarItem>
					<NavbarBrand className='font-bold'>
						<span>Project Manager</span>
					</NavbarBrand>
				</NavbarItem>
				<NavbarItem isActive>
					<Anchor href='/'>Home</Anchor>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify='end'>
				<NavbarItem>
					<ThemeSwitcher />
				</NavbarItem>
				<NavbarItem>
					<Anchor href=''>
						Login
					</Anchor>
				</NavbarItem>
				<NavbarItem>
					<Anchor href=''>
						Signup
					</Anchor>
				</NavbarItem>
				<NavbarItem>
					<Avatar optionalText='' />
				</NavbarItem>
			</NavbarContent>
		</NextUiNavbar>
	)
}

export {TopBar as default}
