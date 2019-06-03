import React, { Component } from 'react'
import { Row, Col, Button, Spinner, FormGroup, Input } from 'reactstrap';
import PokerContext from '../contexts/PokerGame';

export default class GameInput extends Component {
    render() {
        return (
            <PokerContext.Consumer>
                {
                    context =>
                        <Row>
                            <Col className='align-self-center'>
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <Input
                                                name="game-input"
                                                placeholder="XCXCXCXCXC XCXCXCXCXC"
                                                className='text-center'
                                                value={context.gameInput}
                                                onChange={e => context.changeGameInput(e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{ size: 6, offset: 1 }}  xs={{ size: 6, offset: 1 }}>
                                        <Button
                                            style={{ width: '80vw' }}
                                            color="success"
                                            size="lg"
                                            block
                                            onClick={() => context.proccessResult()}>
                                            {context.processingResult ? <Spinner color="light" /> : 'Jogar'}
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                }
            </PokerContext.Consumer>
        )
    }
}