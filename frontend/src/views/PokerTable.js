import React, { Component } from "react";
import PokerGameContext from "../contexts/PokerGame";
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header'
import CardBoardPanel from "../components/CardBoardPanel";
import GameInput from "../components/GameInput";
import GameResult from "../components/GameResult";

export default class PokerTable extends Component {
    render() {
        return (
            <PokerGameContext.Consumer>
                {
                    context =>
                        <div>
                            <Header />
                            <Container fluid>
                                <CardBoardPanel />
                                <GameInput />
                                <GameResult />
                            </Container>
                        </div>

                }
            </PokerGameContext.Consumer>
        )
    }
}