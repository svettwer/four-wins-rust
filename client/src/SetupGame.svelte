<script>
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

    function dispatchGameModes(gameMode) {
        if(gameMode === "singleplayer"){
            onSetGameMode("singleplayer")
        }
    }
</script>

{#if gameMode === "multiplayer"}
<div></div>
{:else}
    <div class="container mx-auto flex flex-col items-center justify-center space-y-4 text-white">
        <div class="text-2xl">Select Game Mode</div>
        <button class="{buttonStyle}" on:click={() => dispatchGameModes("singleplayer")}>Singleplayer</button>
        <button class="{buttonStyle}" on:click={() => dispatchGameModes("multiplayer")}>Multiplayer</button>
    </div>
{/if}
