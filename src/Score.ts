/**
 * @class Score
 * @author: Abid
 * Purpose: The purpose of this class is to calculate the scores of the players 
 * @version: 1.0
 * @since 2021-03-01
 */

export class Score {

    public playerOneName: string;
    public playerTwoName: string;
    public playerOnePoint: number;
    public playerTwoPoint: number;
    public static defaultScores: string[] = ["0", "15", "30", "40"]

    private static WIN = "Win";
    private static ADVANTAGE = "Advantage #playerName";
    private static DEUCE = "Deuce";

    constructor(playerOnePoint: number, playerTwoPoint: number, playerOneName: string, playerTwoName: string) {
        this.playerOnePoint = playerOnePoint;
        this.playerTwoPoint = playerTwoPoint;
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
    }

    public calculate(): string {
        if (this.playerOnePoint === this.playerTwoPoint) return this.deuce(this.playerOnePoint);
        if (this.playerOnePoint > 3 || this.playerTwoPoint > 3) return this.winOrTie();
        return this.defaultScore();
    }


    public deuce(playerOnePoint: number): string {
        if (playerOnePoint < 3) {
            return "0-0, " + Score.defaultScores[playerOnePoint] + " - " + Score.defaultScores[playerOnePoint];
        }
        return "0-0, " + Score.DEUCE;
    }


    public winOrTie(): string {
        if (Math.abs(this.playerOnePoint - this.playerTwoPoint) >= 2) return this.win();
        return this.tie();
    }

    public win(): string {
        if (this.playerOnePoint > this.playerTwoPoint) return "1 - 0";
        return "0 - 1";
    }

    public tie(): string {
        if (this.playerOnePoint > this.playerTwoPoint) return "0-0, " + Score.ADVANTAGE.replace("#playerName", this.playerOneName);
        return "0-0, " + Score.ADVANTAGE.replace("#playerName", this.playerTwoName);
    }


    public defaultScore(): string {
        return "0-0, " + Score.defaultScores[this.playerOnePoint] + " - " + Score.defaultScores[this.playerTwoPoint];
    }

}