import React from 'react'
import Menu from '../../components/menu/menu'
import Header from '../../components/header/header'
import { AboutBody, AboutContent } from './pages.style'

const About:React.FC = () => {
    return (
        <AboutBody>
            <Menu />
            <AboutContent>
                <Header />
            </AboutContent>
        </AboutBody>
    )
}

export default About
