const Game = require('../src/services/PokerTable')

test('Proccessing Game - First Hand Win', () => {
    Game.prepareGame('7C7PACKP4O 9P8PAO10PQE')
        .then(hands => Game.rankingGame(hands))
        .then(winner =>
            expect(winner.hand).toBe(1)
        )

    Game.prepareGame('JEJOJC5E8P KOJP10C6C3O')
        .then(hands => Game.rankingGame(hands))
        .then(winner =>
            expect(winner.hand).toBe(1)
        )
});

test('Proccessing Game - Game Tied', () => {
    Game.prepareGame('8C7E7C7O7P 8P5E5C5O5P')
        .then(hands => Game.rankingGame(hands))
        .then(winner =>
            expect(winner.hand).toBe(-1)
        )

    Game.prepareGame('10P10EKEQC2C 7C7PACKP4O')
        .then(hands => Game.rankingGame(hands))
        .then(winner =>
            expect(winner.hand).toBe(-1)
        )
});

test('Proccessing Game - Last Hand Win', () => {
    Game.prepareGame('KOJP10C6C3O JEJOJC5E8P')
        .then(hands => Game.rankingGame(hands))
        .then(winner =>
            expect(winner.hand).toBe(2)
        )

    Game.prepareGame('KOJP10C6C3O JEJOJC5E8P')
        .then(hands => Game.rankingGame(hands))
        .then(winner =>
            expect(winner.hand).toBe(2)
        )
});

test('Proccessing Game - Prevent Posible Errors', ()=>{
    Game.prepareGame(' KOJP10C6C3O JEJOJC5E8P ')
        .then(hands => Game.rankingGame(hands))
        .then(winner =>
            expect(winner.hand).toBe(2)
        )

    Game.prepareGame(' KOJP10 JEJOJC5E8P ')
        .then(hands => Game.rankingGame(hands))
        .catch(err =>
            expect(err.msgPoker).toBe('Mãos inválidas.')
        )
})