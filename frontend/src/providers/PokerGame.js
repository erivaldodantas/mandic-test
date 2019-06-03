
import React, { Component } from "react";
import PokerContext from '../contexts/PokerGame';
import Axios from "axios";
import { BASE_API, POKER_PROCCESS } from "../config/api";

const initState = {
  gameInput: '',
  playerWinner: undefined,
  processingResult: false,
  messageResult: ''
}


class PokerGameProvider extends Component {
  constructor() {
    super();
    this.state = initState
  }

  resetProvider() {
    this.setState(initState)
  }

  changeGameInput(gameInput = '') {
    this.setState({ gameInput: gameInput.toUpperCase() })
  }

  async proccessResult() {
    if (this.state.processingResult) return
    try {
      this.setState({ processingResult: true })


      const result = await Axios.post(`${BASE_API}${POKER_PROCCESS}`, {
        game: this.state.gameInput
      })

      let messageResult = result.data.hand == -1 ? 'Jogo Empatado' : `Vencedor Mão ${result.data.hand} - ${result.data.rankingGame}`
        
      this.setState({ messageResult }, () => this.setState({ processingResult: false }))

    } catch (err) {
      console.log(err)
      //proccessing error
      if (err.response && err.response.data && err.response.data.message)
        this.setState({ processingResult: false, messageResult: err.response.data.message })
      else
        this.setState({ processingResult: false, messageResult: 'Erro ao precessar as mãos, tente novamente' })
    }
  }

  clearResult() {
    setTimeout(() => {
      this.setState({ messageResult: '' })
    }, 6000);
  }

  render() {
    return (
      <PokerContext.Provider value={{
        ...this.state,
        changeGameInput: (gameInput) => this.changeGameInput(gameInput),
        proccessResult: () => this.proccessResult()
      }}>
        {this.props.children}
      </PokerContext.Provider>
    );
  }
}

export default PokerGameProvider;

