/**
 * @class Player
 * @author: Abid
 * Purpose: The purpose of this class is to set data class for player 
 * @version: 1.0
 * @since 2021-03-01
 */

export class Player {
  
  private _playerName: string;
  private _playerPoints: number;

  constructor(playerName: string) {
    this._playerName = playerName;
    this._playerPoints = 0;
  }

  public get getPlayerName(): string {
    return this._playerName;
  }

  public get getPlayerGamePoint(): number {
    return this._playerPoints;
  }

  public set setPlayerGamePoints(score: number) {
    this._playerPoints = score;
  }

}