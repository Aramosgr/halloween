import { gameInstance, getHeaders } from "./utilities";

export default class GameService {  
    getGameState(): Promise<Object> {        
      return gameInstance.get(`/gameState`, {
        headers: getHeaders()
      });
    }

    getPhases(): Promise<Object> {        
      return gameInstance.get(`/phases`, {
        headers: getHeaders()
      });
    }

    getPhase(id:number): Promise<Object> {        
      return gameInstance.get(`/phase?id=${id}`, {
        headers: getHeaders()
      });
    }
  }