<script>
    import "tailwindcss/tailwind.css"
    import FourWins from "./FourWins.svelte";
    import Lobby from "./Lobby.svelte";
    import SetupGame from "./SetupGame.svelte";

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop)
    });

    let lobby = params.lobby;

    let gameMode = "singleplayer" //toggle to deactivate game mode dialog

    function setGameMode(newGameMode){
        gameMode = newGameMode
    }

</script>

<main>
    {#if gameMode === "singleplayer"}
        <FourWins />
    {:else}
        <div class="p-8 space-y-8 bg-blue-500 h-screen">
            <div class="text-center">
                <div class="text-4xl text-white">Four Wins</div>
            </div>
            {#if lobby}
                <div class="container mx-auto flex flex-col items-center justify-center space-y-4 text-white">
                    <div class="text-2xl py-4">Multiplayer</div>
                    <Lobby lobbyData={{lobbyId: lobby, users: []}}/>
                </div>
            {:else}
                <SetupGame onSetGameMode="{setGameMode}"/>
            {/if}
        </div>
    {/if}
</main>