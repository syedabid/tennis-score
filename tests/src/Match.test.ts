import {Match} from "../../src/Match"
let match: Match;
beforeEach(async() => { 
  match = new Match("Player 1", "Player 2");  
});

describe('Match', () => {
    describe('pointWonBy', () => {
      it("should return void", () => {
        expect(match.pointWonBy("player 1")).toBeUndefined();
      })

      it("should return error message 'Sorry cannot find the player'", () => {
        expect(() => match.pointWonBy("player 22")).toThrowError("Sorry cannot find the player");
      })
    });

    describe('Score', () => {
        it("should return the score string '0-0, 15-15'", () => {
          match.pointWonBy("player 1");
          match.pointWonBy("player 2");
          expect(match.score()).toBe("0-0, 15 - 15");
        });

        it("should return the score string '0-0, 40 - 15'", () => {
            match.pointWonBy("player 1");
            match.pointWonBy("player 2");

            match.pointWonBy("player 1");
            match.pointWonBy("player 1");
            expect(match.score()).toBe("0-0, 40 - 15");
        });

        it("should return the score string '0-0, Deuce'", () => {
            match.pointWonBy("player 1");
            match.pointWonBy("player 2");

            match.pointWonBy("player 1");
            match.pointWonBy("player 1");

            match.pointWonBy("player 2");
            match.pointWonBy("player 2");

            expect(match.score()).toBe("0-0, Deuce");
        });

        it("should return the score string '0-0, Advantage Player 1'", () => {
            match.pointWonBy("player 1");
            match.pointWonBy("player 2");

            match.pointWonBy("player 1");
            match.pointWonBy("player 1");

            match.pointWonBy("player 2");
            match.pointWonBy("player 2");

            match.pointWonBy("player 1");

            expect(match.score()).toBe("0-0, Advantage Player 1");
        });


        it("should return the score string '1 - 0'", () => {
            match.pointWonBy("player 1");
            match.pointWonBy("player 2");

            match.pointWonBy("player 1");
            match.pointWonBy("player 1");

            match.pointWonBy("player 2");
            match.pointWonBy("player 2");

            match.pointWonBy("player 1");
            match.pointWonBy("player 1");
            expect(match.score()).toBe("1 - 0");
        });       

    });
})


