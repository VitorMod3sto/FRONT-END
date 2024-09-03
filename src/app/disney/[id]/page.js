'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiDisney from "@/services/apiDisney";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

export default function Page({ params }) {



    const [personagem, setPersonagem] = useState({})

    useEffect(() => {
        apiDisney.get(`character/${params.id}`).then(resultado => {
            setPersonagem(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney Detalhes">
            {
                personagem.name &&
                <div>
                    <Row>
                        <Col md={4}>
                            <img src={personagem.imageUrl} />
                        </Col>
                        <Col md={8}>
                            <p><b> Nome: </b> {personagem.name}</p>
                            <p><b> Data Criação: </b> {personagem.createdAt}</p>
                            <p><a target="_blank" href={personagem.sourceUrl}> Ver Página:</a></p>
                        </Col>
                        <Col md={6} className="mt-3">

                            <Card border="primary">
                                <Card.Header>Filmes</Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {personagem.films.map(item => (
                                            <ListGroup.Item key={item._id}>
                                                {item}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>

                            <Card border="primary">
                                <Card.Header>tvShows</Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {personagem.tvShows.map(item => (
                                            <ListGroup.Item key={item._id}>
                                                {item}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </div>
            }

        </Pagina>
    )
}