import React, { Component } from "react";
import PokerContext from "../contexts/PokerGame";
import { Row, Col } from 'reactstrap';

export default class CardBoardPanel extends Component {
    render() {
        return (
            <PokerContext.Consumer>
                {
                    context =>
                        <Row style={{ height: '40vh', background: '#039834', marginBottom: '10px' }}>
                            <Col xs="12" md='6'>
                                <Row>
                                   <h4>Mão 1:</h4>   
                                </Row>
                                'TODO:'
                            </Col>
                            <Col xs="12" md='6'>
                                <Row>
                                    <h4>Mão 2:</h4>
                                </Row>
                                'TODO:'
                            </Col>
                        </Row>
                }
            </PokerContext.Consumer>
        )
    }
}