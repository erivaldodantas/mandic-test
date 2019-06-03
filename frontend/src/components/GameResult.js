import React, { Component } from 'react'
import PokerContext from '../contexts/PokerGame';
import { Row, Col, Button, Spinner, FormGroup, Input } from 'reactstrap';

export default class GameResult extends Component {
    render() {
        return (
            <PokerContext.Consumer>
                {
                    context =>
                        <Row>
                            <Col className='text-center'>
                                <h3 className='text-center' style={{marginTop: '10px'}}>{context.messageResult}</h3>
                            </Col>
                        </Row>
                }
            </PokerContext.Consumer>
        )
    }
}