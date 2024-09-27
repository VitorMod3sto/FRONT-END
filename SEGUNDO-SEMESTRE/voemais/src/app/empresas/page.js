'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { IoIosAirplane } from "react-icons/io";


export default function Page() {

    const empresas = JSON.parse(localStorage.getItem('empresas')) || []


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
                    {empresas.map(item => (
                        <tr>
                            <td>1</td>
                            <td>{item.nome}</td>
                            <td>
                                <Link href="https://www.passagensaereas.com/passagens-aereas/companhiasaereas/latam-airlines?msclkid=e16ed8f284171c3f6f64be077945dc2e&utm_source=bing&utm_medium=cpc&utm_campaign=PA_CI_LATAM&utm_term=tam%20linhas%20a%C3%A9reas&utm_content=G-%20Geral&mktdata=key%3DB92LMAPG7UTQQFNMUOBQMOAED4%26clt_cc%3DBR%26clt_pr%3DV%26clt_n%3Db%26accountid%3DF107877R%26campaignid%3D361706005%26adgroupid%3D1285329510132871%26clt_c%3D80333196402424%26targetid%3Dkwd-80333329321513:loc-20%26locationid%3D147252%26clt_kw%3Dtam%2520linhas%2520a%25C3%25A9reas%26mt%3De%26d%3Dc%26msclkid%3De16ed8f284171c3f6f64be077945dc2e%26utm_source%3Dbing%26utm_medium%3Dcpc%26utm_campaign%3DPA_CI_LATAM%26utm_term%3Dtam%2520linhas%2520a%25C3%25A9reas%26utm_content%3DG-%2520Geral%26id%3D2024092700332614916485991487239%26trackeame_user_id%3D125F2250809B1727359545969cc1fe497-a49c-45ef-9782-f5024622f181807566"><img src={item.logo} alt={item.nome} height={"60px"} width={"90px"}/>
                                </Link></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}