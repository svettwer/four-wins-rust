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
</script>

<div class="container mx-auto flex flex-col items-center justify-center space-y-4 text-white">
    <div class="text-2xl">Select Game Mode</div>
    <button class="{buttonStyle}" on:click={() => onSetGameMode("singleplayer")}>Singleplayer</button>
    <button class="{buttonStyle}" on:click={() => onSetGameMode("multiplayer")}>Multiplayer</button>
</div>