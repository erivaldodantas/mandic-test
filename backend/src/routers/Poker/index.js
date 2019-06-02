const { Router } = require('express')
const PokerTable = require('../../services/PokerTable')

const routerPoker = Router()


const pokerProccess = (req, res) => {
    let { game } = req.body

    if (!game) res.status(400).send({
        message: 'Game is required in body {game}'
    })

    PokerTable.prepareGame(game)
        .then(hands => PokerTable.rankingGame(hands))
        .then(winner => res.send(winner))
        .catch(err => err.msgPoker ?
            res.status(400).send({ message: err.msgPoker }) :
            res.status(500))
}


routerPoker.get('/proccess', pokerProccess)

module.exports = routerPoker