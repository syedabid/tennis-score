import {Player} from "../../src/Player"
let player: Player;
beforeAll(async() => { 
  player = new Player("Player 1");  
});

describe('Player', () => {
  
  describe('getPlayerName', () => {
    it("should return player name 'Player 1'", () => {
      expect(player.getPlayerName).toBe("Player 1");
    });
  });

  describe('getPlayerGamePoint', () => {
    it("should return player point '0'", () => {
      expect(player.getPlayerGamePoint).toBe(0);
    });
  });

});