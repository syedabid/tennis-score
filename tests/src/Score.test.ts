import {Score} from "../../src/Score"
import {Player} from "../../src/Player"

let score: Score;
let matchPlayers: Player[] = [];
beforeAll(async() => { 
    matchPlayers.push(new Player("Player 1"));
    matchPlayers.push(new Player("Player 2"));
    const playerOne = matchPlayers[0];
    const playerTwo = matchPlayers[1];
    score = new Score(playerOne.getPlayerGamePoint, playerTwo.getPlayerGamePoint, playerOne.getPlayerName, playerTwo.getPlayerName);  
});


describe('Score', () => {
  describe("calculate", () =>{
    it("should return the calculated score of the players", () => {
        expect(score.calculate()).toBe("0-0, 0 - 0");
    });
  });

  describe("deduce", () =>{
    it("should return the score as deduce", () => {
        score = new Score(3, 3, matchPlayers[0].getPlayerName, matchPlayers[1].getPlayerName);
        expect(score.deduce(3)).toBe("0-0, Deuce");
    });
  });


  describe("winOrTie", () =>{
    it("should return the score as 0 - 1", () => {
        score = new Score(4, 2, matchPlayers[0].getPlayerName, matchPlayers[1].getPlayerName);
        expect(score.winOrTie()).toBe("1 - 0");
    });

    it("should return the score as 0-0, Advantage Player 2", () => {
        score = new Score(3, 3, matchPlayers[0].getPlayerName, matchPlayers[1].getPlayerName);
        expect(score.winOrTie()).toBe("0-0, Advantage Player 2");
    });

  });

});