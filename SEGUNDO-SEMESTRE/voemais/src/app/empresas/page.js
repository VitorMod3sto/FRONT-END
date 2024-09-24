'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { IoIosAirplane } from "react-icons/io";


export default function Page() {
    return (
        <Pagina titulo="Empresas">

            <Link href="/empresas/create" className="btn btn-primary mb-3" ><IoIosAirplane />
            </Link>

            <Table striped bordered hover>
            <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Gol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Latam</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Azul</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </Pagina>
    )
}