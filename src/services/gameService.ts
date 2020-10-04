import { gameInstance, getHeaders } from "./utilities";

export default class GameService {  
    getGameState(): Promise<Object> {        
      return gameInstance.get(`/gameState?id=1`, {
        headers: getHeaders()
      });
    }

    setGameState(state:number): Promise<Object> {        
      return gameInstance.get(`/gameState?id=1&state=${state}`, {
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