<script>
    import "tailwindcss/tailwind.css"
    import FourWins from "./FourWins.svelte";

    let gameMode;
</script>

<main>
    {#if gameMode}
        <FourWins />
    {:else}
        <div class="p-8 space-y-8 bg-blue-500 h-screen">
            <div class="text-center">
                <div class="text-4xl text-white">Four Wins</div>
            </div>
            <div class="container mx-auto flex flex-col items-center justify-center space-y-4 text-white">
                <div class="text-2xl">Select Game Mode</div>
                <button class="text-xl font-bold text-lg rounded bg-blue-800 px-4 py-2 hover:bg-blue-300 transition-colors duration-200 hover:text-black">Singleplayer</button>
                <button class="text-xl font-bold text-lg rounded bg-blue-800 px-4 py-2 hover:bg-blue-300 transition-colors duration-200 hover:text-black">Multiplayer</button>
            </div>
        </div>
    {/if}
    
</main>