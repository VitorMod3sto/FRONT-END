import Cabecalho from "../components/Cabecalho";

export default function Fundamentos() {
    /* exportando uma função Fundamentos (nome que criei)  */

    return (
        /* dentro de return usamos o html  */
        /* <> é o fragment, usado para termos mais de um elemento no Return  */
        /* <Nome do componente> faz com que eu reaproveite o componente já criado */
        <>
            <Cabecalho />
            <h1>Fundamentos</h1>
            <p>Sucesso</p>
            <Cabecalho />

        </>
    )
}



