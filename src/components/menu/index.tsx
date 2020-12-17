import React from 'react'
import { MenuBox } from './menu.style'
import { itens } from '../../helpers/menuItens'
import Item from '../pagesItens/pagesItens'

const Menu:React.FC = () => {
    return (
        <MenuBox>
            {itens.map((item, i) => <Item key={i} {...item} />)}
        </MenuBox>
    )
}

export default Menu
