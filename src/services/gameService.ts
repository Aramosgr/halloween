import { gameInstance, getHeaders } from "./utilities";

export default class GameService {  
    getGameState(): Promise<Object> {
      return gameInstance.get(`/gameState`, {
        headers: getHeaders()
      });
    }
  }