/**
 * @class Match
 * @author: Abid
 * Purpose: The purpose of this class is to instantiate players and call to calculate the scores of players 
 * @version: 1.0
 * @since 2021-03-01
 */

import {Player}  from "./Player";
import {Score}  from "./Score";

export class Match {
    public matchPlayers: Player[] = [];

    constructor(playerOne: string, playerTwo: string){
       this.matchPlayers.push(new Player(playerOne));
       this.matchPlayers.push(new Player(playerTwo));
    }

    public pointWonBy(playerName: string): void | never {
      const gamePlayer: Player = this.getPlayer(playerName) as Player;
      if(typeof gamePlayer != "undefined" && gamePlayer != null){
        let point = gamePlayer.getPlayerGamePoint;
        point += 1;
        gamePlayer.setPlayerGamePoints = point;
      }else{
        throw new Error("Sorry cannot find the player");
      }
    }

    public score(): string | never {
      const playerOne = this.matchPlayers[0];
      const playerTwo = this.matchPlayers[1];
      const playersScore = new Score(playerOne.getPlayerGamePoint, playerTwo.getPlayerGamePoint, playerOne.getPlayerName, playerTwo.getPlayerName);
      return playersScore.calculate();
    }

    public getPlayer(playerName: string){
      return this.matchPlayers.find(p => p.getPlayerName.toLowerCase() === playerName.toLowerCase() );
    }

}
