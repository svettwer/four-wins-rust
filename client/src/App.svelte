<script>
    import "tailwindcss/tailwind.css"
    import SelectGameMode from "./SelectGameMode.svelte";
    import DispatchGameMode from "./DispatchGameMode.svelte";

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop)
    });

    let lobby = params.lobby;

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
        {#key gameMode}
            {#if gameModeUnknown()}
                <SelectGameMode onSetGameMode={setGameMode}/>
            {:else}
                <DispatchGameMode gameMode={gameMode} lobby={lobby}/>                
            {/if}
        {/key}
    </div>
</main>