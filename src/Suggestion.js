import React from 'react';
import './css/suggestion.css'
import { Container, Row, Col, Button } from 'reactstrap'

export default function Suggestion() {
    return (
        <Container>
            <Row className='mx-auto'>
                <Col lg={5} sm={12}>
                    <div className='suggestion'>
                        <img src="/img/kaboos.jpg" className="img-fluid h-100 d-flex align-items-center" />
                    </div>
                    
                    
                </Col>
                <Col lg={2} sm={0}>
                </Col>

                <Col lg={5} sm={12}>
                    <div className='suggestion'>
                        <img src="/img/13th-night.jpg" className="img-fluid h-100" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}