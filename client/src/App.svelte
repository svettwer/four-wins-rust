<script>
    import "tailwindcss/tailwind.css"
    import SelectGameMode from "./SelectGameMode.svelte";
    import DispatchGameMode from "./DispatchGameMode.svelte";
    import { getLobby } from "./client"

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop)
    });

    let lobby;

    let joinLobby;
    if(params.lobby){
        joinLobby = getLobby(params.lobby);
    }

    let gameMode = "singleplayer" //toggle to deactivate game mode dialog

    function setGameMode(newGameMode){
        gameMode = newGameMode
    }

    function gameModeUnknown(){
        return !gameMode && !lobby
    }

</script>

<main>
    <div class="p-8 space-y-8 bg-blue-500 h-screen">
        <div class="text-center">
            <div class="text-4xl text-white">Four Wins</div>
        </div>
        {#if joinLobby}
            {#await joinLobby}
                <p>Joining lobby...</p>
                {:then joinedLobby}
                    <DispatchGameMode gameMode={gameMode} lobby={joinedLobby}/>
                {:catch}
                <p style="color: red">Could not join lobby</p>
            {/await}
        {:else}
            {#key gameMode}
                {#if gameModeUnknown()}
                    <SelectGameMode onSetGameMode={setGameMode}/>
                {:else}
                    <DispatchGameMode gameMode={gameMode} lobby={lobby}/>
                {/if}
            {/key}  
        {/if}
    </div>
</main>