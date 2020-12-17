import React from 'react'
import { HeaderBox, SHeaderItem } from './header.style'
import { itens } from '../../helpers/menuItens'
import Item from '../pagesItens/pagesItens'
interface IMenuItem {
    name: string
    link: string
    iconText: string
    color: string
}

const Menu:React.FC = () => {
    return (
        <HeaderBox>
            {itens.map((item, i) => <Item key={i} {...item} />)}
        </HeaderBox>
    )
}

export default Menu
