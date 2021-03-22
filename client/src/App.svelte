<script>
    import "tailwindcss/tailwind.css"
    import FourWins from "./FourWins.svelte";
    import SetupGame from "./SetupGame.svelte";

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
            <SetupGame onSetGameMode="{setGameMode}"/>
        </div>
    {/if}
    
</main>