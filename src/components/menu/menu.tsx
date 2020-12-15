import React from 'react'
import { MenuBox, MenuItemIcon, SMenuItem } from './menu.style'
import Link from 'next/link'
import { itens } from './menuItens'
interface IMenuItem {
    name: string
    link: string
    iconText: string
}

const MenuItem:React.FC<IMenuItem> = ({ link, iconText, name }) => {
    return (
        <SMenuItem>
            <Link href={link}>
                <a><MenuItemIcon>{iconText}</MenuItemIcon> {name}</a>
            </Link>
        </SMenuItem>
    )
}

const Menu:React.FC = () => {
    return (
        <MenuBox>
            {itens.map((item, i) => <MenuItem key={i} {...item} />)}
        </MenuBox>
    )
}

export default Menu
