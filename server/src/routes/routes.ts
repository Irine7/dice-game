import { Router } from "express";

import { DiceGameController } from "../controllers/DiceGameController";

export const diceGameRouter = Router();

diceGameRouter.post("/players", DiceGameController.createPlayer);
diceGameRouter.get("/players", DiceGameController.getAllPlayers);
diceGameRouter.put("/players/:id", DiceGameController.updatePlayer); //change name

diceGameRouter.post("/games/:id", DiceGameController.playRound); // specific user plays game
diceGameRouter.put("/games/:id", DiceGameController.updateGame);
diceGameRouter.delete("/games/:id", DiceGameController.deleteGame);

diceGameRouter.get("/ranking", DiceGameController.allRanking);
diceGameRouter.get("/ranking/loser", DiceGameController.loserRanking);
diceGameRouter.get("/ranking/winner", DiceGameController.winnerRanking);
