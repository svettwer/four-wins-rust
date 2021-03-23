<script>
import SetupMultiplayerGame from "./SetupMultiplayerGame.svelte";

    export let onSetGameMode;

    let buttonStyle = `
            text-xl 
            font-bold 
            text-lg 
            rounded 
            bg-blue-800 
            px-4 
            py-2 
            hover:bg-blue-300 
            transition-colors 
            duration-200 
            hover:text-black
            `
    let gameMode

    function dispatchGameModes(ChosenGameMode) {
        if(ChosenGameMode === "singleplayer") {
            onSetGameMode("singleplayer")
        }else {
            gameMode = ChosenGameMode
        }
    }


</script>

<div class="container mx-auto flex flex-col items-center justify-center space-y-4 text-white">
    {#if gameMode === "multiplayer"}
        <SetupMultiplayerGame/>
    {:else}
        <div class="text-2xl">Select Game Mode</div>
        <button class="{buttonStyle}" on:click={() => dispatchGameModes("singleplayer")}>Singleplayer</button>
        <button class="{buttonStyle}" on:click={() => dispatchGameModes("multiplayer")}>Multiplayer</button>
    {/if}
</div>