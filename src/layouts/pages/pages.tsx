import React from 'react'
import Menu from '../../components/menu'
import Header from '../../components/header'
import { AboutBody, AboutContent } from './pages.style'
import PageContent from '../../components/pageContent'

const About:React.FC = ({ children }) => {
    return (
        <AboutBody>
            <Menu />
            <AboutContent>
                <Header />
                <PageContent>
                    {children}
                </PageContent>
            </AboutContent>
        </AboutBody>
    )
}

export default About
