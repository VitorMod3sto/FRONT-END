'use client'

import Pagina from "../components/Pagina";

export default function array() {

    const carros = ['Civic', 'Corolla', 'Mercedes A45 AMG', 'Porshe 918', 'BMW']

    {
        carros.map(item => (
            <p>{item}</p>
        ))
    }


    return (
        <Pagina titulo="Pagina de Array">
            {carros.map(item => (
                <p>{item}</p>
            ))}


            <ul>
                {carros.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </Pagina>
    )
}