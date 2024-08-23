'use client'

import Pagina from "../components/Pagina";

export default function Objetos() {

    const carros = [
        {marca: 'bmw', modelo: 'm3', cor: 'cinza', foto: ''},
        {marca: 'Wolksvagen', modelo: 'Golf', cor: 'preto', foto: ''},
        {marca: 'fiat', modelo: 'punto', cor: 'amarelo', foto: ''},
        {marca: 'mercedes', modelo: 'amg', cor: 'cinza', foto: ''},
        {marca: 'porshe', modelo: '918 spyder', cor: 'branca', foto: ''}
    ]


    return (
        <Pagina titulo="Objetos">
            {carros.map(item => (
                <p>{item.marca}</p>
            ))}

        </Pagina>
    )
}