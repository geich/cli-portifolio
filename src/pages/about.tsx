import React from 'react'
import App from '../layouts/pages/pages'
import { Attribute, AttributeString, Const, ConstName, TabSpace } from '../styles/about.style'

const Home: React.FC = () => {
    const calcAge = (birthDate: Date): number => {
        const today = new Date()
        const diff = today.getTime() - birthDate.getTime()
        const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
        return age
    }
    return (
        <div>
            <main >
                <App>
                    <p><Const>const</Const> <ConstName>gabriel</ConstName> = {'{'} </p>
                    <p><TabSpace space={1}/><Attribute>fullName:</Attribute> <AttributeString >{"'"}Gabriel Eich Moraes{"'"}</AttributeString></p>
                    <p><TabSpace space={1}/><Attribute>age:</Attribute> <AttributeString>{"'"}{calcAge(new Date('1995-06-29'))} anos{"'"}</AttributeString></p>
                    <p><TabSpace space={1}/><Attribute>adress:</Attribute> <AttributeString>{"'"}Porto Alegre - RS{"'"}</AttributeString></p>
                    <p>
                        <TabSpace space={1}/>
                        <Attribute>descripiton: </Attribute>
                        <AttributeString>
                            {"'"}Apaixonado por desenvolvimento no geral. Sim, eu vou melhorar esse texto ;){"'"}
                        </AttributeString>
                    </p>
                    <p>{'}'}</p>
                </App>
            </main>
        </div>
    )
}

export default Home
