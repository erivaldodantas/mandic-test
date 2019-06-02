const Game = require('../src/services/PokerGame')

test('Test Ranking - Straight Flush', () => {
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('4E5E6E7E8E')))).toBe('Straight Flush')
});
test('Test Ranking - Quadra', () => {
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('8C7E7C7O7P')))).toBe('Quadra')
});
test('Test Ranking - Full House', () => {
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('7C7PKOKEKP')))).toBe('Full House')
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('3C3PAOAEAP')))).toBe('Full House')
});
test('Test Ranking - Flush', () => {
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('8P7PQP3PKP')))).toBe('Flush')
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('AE5E2E3EKE')))).toBe('Flush')
});
test('Test Ranking - Sequência', () => {
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('2C3E4P5C6C')))).toBe('Sequência')
});
test('Test Ranking - Dois Pares', () => {
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('6E6P10P10OKC')))).toBe('Dois Pares')
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('8E8O9E9P2P')))).toBe('Dois Pares')
});
test('Test Ranking - Par', () => {
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('ACAPKO6E8C')))).toBe('Par')
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('10P10EKEQC2C')))).toBe('Par')
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('7C7PACKP4O')))).toBe('Par')
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('7P7OKPQO3C')))).toBe('Par')
});
test('Test Ranking - Carta Alta', () => {
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('KOJP10C6C3O')))).toBe('Carta Alta')
    expect(Game.HelperPoker.getResult(new Game.PokerPlayer(Game.PrepareHand('9P8PAO10PQE')))).toBe('Carta Alta')
});