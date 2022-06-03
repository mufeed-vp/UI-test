import React from 'react'
import {  Card, Col, Row, Container, Button } from 'react-bootstrap';

const Payment = () => {
    return (
        <div className='main'>

            <>
                <Card className='main'>
                    <Card.Body>
                        <Card.Title className='card-title'>Choose your plan</Card.Title>
                        <Row xs={1} sm={2} md={4} ml-2 style={{ width: '57%', marginLeft: '23%' }} >

                            <Col md={4}>
                                <p className="card-link">Check out our Free trail</p>
                            </Col>

                            <Col md={4}>
                                <p className="card-link">Sign Up in seconds</p>
                            </Col>

                            <Col md={4}>
                                <p className="card-link">Cancel anytime risk Free</p>
                            </Col>

                        </Row>
                    </Card.Body>
                </Card>
            </>

            <>
                <Container className='container2'>
                    <Row md={4}>

                        <Col md="4" className='mt-5'>
                            <Card className='card2'>
                                <Card.Body className='card-body ml-3'>
                                    <Card.Title className='card-title2'>Trail</Card.Title>
                                    <Card.Subtitle className="card_subtitle">A plan for you to get us know better</Card.Subtitle>
                                    <Card.Text className='card-text'>
                                        <p className='price'>$9.99</p>
                                        <p className='card_subtitle'>per 3 sessions/videos</p>
                                        <p className='feature'>Feature </p>
                                        <hr style={{
                                            color: '#00000',
                                            backgroundColor: '#9EA7AE',
                                            height: .5,
                                            borderColor: '#000000'
                                        }} />
                                    </Card.Text>
                                    <ul className='ul'>
                                        <li className='li'>Get Emotions Analysed</li>
                                        <li className='li'>Download 3 analysis reports</li>
                                        <li className='li'>Edit one video</li>
                                    </ul>
                                </Card.Body>
                                <Card.Footer className='card-footer'>
                                    <Button className='button'>Try for free</Button>
                                </Card.Footer>
                            </Card       >
                        </Col>

                        <Col md="4" className='mt-5'>
                            <Card className='card2' style={{ background: '#1F2734' }}>
                                <Card.Body className='card-body'>
                                    <Card.Title className='card-title2'>Standard </Card.Title>
                                    <Card.Subtitle className="card_subtitle">Best suitable for short videos</Card.Subtitle>
                                    <Card.Text className='card-text'>
                                        <p className='price' style={{ color: '#fafafa' }}>$99.9</p>
                                        <p className='card_subtitle'>per month </p>
                                        <p className='feature' >Feature </p>
                                        <hr style={{
                                            color: '#00000',
                                            backgroundColor: '#9EA7AE',
                                            height: .5,
                                            borderColor: '#000000'
                                        }} />

                                    </Card.Text>
                                    <ul className='ul'>
                                        <li className='li'>Get Emotions Analysed</li>
                                        <li className='li'>Download unlimited reports</li>
                                        <li className='li'>Edit unlimited videos</li>
                                        <li className='li'>Create a library of your videos</li>

                                    </ul>
                                </Card.Body>
                                <Card.Footer className='card-footer'>
                                    <Button className='button' style={{ backgroundColor: "#0560FD" }}>Choose plan</Button>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col md="4" className='mt-5'>
                            <Card className='card2'>
                                <Card.Body className='card-body'>
                                    <Card.Title className='card-title2'>Enterprise</Card.Title>
                                    <Card.Subtitle className="card_subtitle">A plan for you to get us know better</Card.Subtitle>
                                    <Card.Text className='card-text'>
                                        <p className='price'>Custom</p>
                                        <p className='card_subtitle' >Tailor made plan just for you</p>
                                        <p className='feature'>Feature </p>
                                        <hr style={{
                                            color: '#00000',
                                            backgroundColor: '#9EA7AE',
                                            height: .5,
                                            borderColor: '#000000'
                                        }} />


                                    </Card.Text>
                                    <ul className='ul'>
                                        <li className='li'>Get Emotions Analysed</li>
                                        <li className='li'>Download 3 analysis reports</li>
                                        <li className='li'>Edit one video</li>
                                        <li className='li'>Create a library of your videos</li>
                                        <li className='li'>Expert analysis on your videos</li>
                                    </ul>
                                </Card.Body>
                                <Card.Footer className='card-footer'>
                                    <Button className='button'>Contact us!</Button>
                                </Card.Footer>
                            </Card>
                        </Col>

                    </Row>

                </Container>
            </>
        </div>
    )
}

export default Payment