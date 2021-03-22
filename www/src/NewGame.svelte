<script>
    export let onNewGame;
    export let winner;
</script>

<div class="text-center space-y-4">
    <div class="text-2xl">
        Player <strong>{winner}</strong> won!
    </div>
    <button 
        class="font-bold 
               text-lg 
               rounded 
               bg-blue-300 
               px-4 
               py-2 
               hover:bg-blue-500 
               transition-colors 
               duration-200 
               hover:text-white" 
        on:click={() => onNewGame()}>
            New Game!
    </button>
</div>