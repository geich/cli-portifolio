import React from 'react'
import App from '../layouts/pages/pages'

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
                    <p>const gabriel = {'{'} </p>
                    <p>fullName: Gabriel Eich Moraes</p>
                    <p>age: {calcAge(new Date('1995-06-29'))} anos</p>
                    <p>adress: Porto Alegre - RS</p>
                    <p>descripiton: Apaixonado por desenvolvimento no geral.</p>
                    <p>{'}'}</p>
                </App>
            </main>
        </div>
    )
}

export default Home
