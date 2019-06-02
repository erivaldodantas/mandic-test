const { PokerPlayer, HelperPoker, PrepareHand, Result } = require('./PokerGame')


const prepareGame = async (hands = '') => {

    let handsArray = hands.split(' ').filter(h => !!h && h.length >= 10)

    if (handsArray.length < 2) throw { msgPoker: 'Mãos inválidas.' }

    return Promise.resolve(await Promise.all(
        handsArray.map((h, i) => ({
            handPos: i + 1,
            poker: new PokerPlayer(PrepareHand(h))
        })
        )
    ))
}

const rankingGame = async (handsGame = []) => {

    var orderHands = handsGame.sort((h1, h2) => {
        if (h1.poker.compareWith(h2.poker) == Result.win) return -1
        if (h1.poker.compareWith(h2.poker) == Result.loss) return 1
        return -1
    })

    var winnerIndex = -1

    if (orderHands[0].poker.compareWith(orderHands[1].poker) == Result.win) {
        winnerIndex = 0
    } else if (orderHands[1].poker.compareWith(orderHands[0].poker) == Result.win) {
        winnerIndex = 1
    }

    return Promise.resolve({
        hand: winnerIndex == -1 ? -1 : orderHands[winnerIndex].handPos,
        rankingGame: winnerIndex == -1 ? 'Jogo Empatado' : HelperPoker.getResult(orderHands[winnerIndex].poker)
    })
}


module.exports = { prepareGame, rankingGame }