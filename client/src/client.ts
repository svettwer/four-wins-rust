import { ENDPOINTS } from "./config/endpoints"

export async function createNewLobby(playerName: string){
    const response = await fetch(ENDPOINTS.LOBBY, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            playerName: playerName
        }),
        
    })
    return await response.json()
}

export async function getLobby(lobbyId: string){
    const response = await fetch(`${ENDPOINTS.LOBBY}/${lobbyId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        
    })
    return await response.json()
}