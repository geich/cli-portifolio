import React from 'react'
import Menu from '../../components/menu'
import Header from '../../components/header'
import { AboutBody, AboutContent } from './pages.style'
import PageContent from '../../components/pageContent'

const About:React.FC = () => {
    return (
        <AboutBody>
            <Menu />
            <AboutContent>
                <Header />
                <PageContent>
                    Test
                    test2
                </PageContent>
            </AboutContent>
        </AboutBody>
    )
}

export default About
