import React from 'react'
import { MenuBox, SItem } from './menu.style'
import { itens } from '../../helpers/menuItens'


const Menu:React.FC = () => {
    return (
        <MenuBox>
            {itens.map((item, i) => <SItem key={i} {...item} />)}
        </MenuBox>
    )
}

export default Menu
