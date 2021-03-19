<script>
    import * as wasm from "four-wins"
    import CurrentPlayer from "./CurrentPlayer.svelte"
    import NewGame from "./NewGame.svelte"

    const stackConfig = {
        defaultBackground: "bg-gray-100",
        playerOne: "bg-red-800",
        playerTwo: "bg-yellow-300"
    }

    let game = wasm.FourWins.new();
    let layout = []
    let winner = 0
    let winConstellation;
    let currentPlayer = game.current_player;
    for (let i = 0 ;i < game.get_stack_count();  i++){
        layout.push(game.get_stack(i))
    }

    function handleNewGame() {
        game = wasm.FourWins.new();
        currentPlayer = game.current_player;
        layout = []
        for (let i = 0 ;i < game.get_stack_count();  i++){
            layout.push(game.get_stack(i))
        }   
        winner = 0
        winConstellation = undefined
    }

    function handleClick(stackIndex){
        if(!winner){
            game.player_action(stackIndex);
            layout[stackIndex] = game.get_stack(stackIndex)
            winner = game.get_winner();
            if(winner){
                const constellation = game.get_win_constellation().get_as_json()
                winConstellation = JSON.parse(constellation)
            }else{
                currentPlayer = game.current_player;
            }
        }
    }

    function getWinnerHighlight(x, y) {
        const sameCords = ([x1, y1]) => ([x2, y2]) => x1 === x2 && y1 === y2
        let cordCheck = sameCords([x,y])
        if( winConstellation ){
            if( cordCheck(winConstellation.one) ||
                cordCheck(winConstellation.two) ||
                cordCheck(winConstellation.three) ||
                cordCheck(winConstellation.four)) {
                return "ring-4 md:ring-8 ring-green-900"
            }
        }
        return ""
    }
</script>

<main>
    <div class="space-y-8 p-2 container flex flex-col mx-auto items-center justify-center">
        <CurrentPlayer currentPlayer="{currentPlayer}" />
        <div class="p-2 
                    h-auto 
                    bg-blue-500 
                    border-8 
                    grid 
                    grid-cols-7 
                    w-full
                    gap-2
                    max-w-screen-md
                    ">
            {#if !winner}
                {#each layout as stack , i}
                    <div class=" space-y-2" id="stack-{i}" on:click={() => handleClick(i) }>
                    {#each stack as field, j}
                        {#if field === 1}
                            <div class="{stackConfig.playerOne} rounded-full w-full flex items-center justify-center" style="padding-top:100%"></div>
                        {:else if field === 2}
                            <div class="{stackConfig.playerTwo} rounded-full w-full flex items-center justify-center" style="padding-top:100%"></div>
                        {:else}
                            <div class="{stackConfig.defaultBackground} rounded-full w-full flex items-center justify-center" style="padding-top:100%"></div>
                        {/if}
                    {/each}
                    </div>
                {/each}
            {:else}
                {#each layout as stack , i}
                    <div class="space-y-2" id="stack-{i}" on:click={() => handleClick(i) }>
                    {#each stack as field, j}
                        {#if field === 1}
                            <div class="{stackConfig.playerOne} {getWinnerHighlight(i, j)} rounded-full w-full flex items-center justify-center" style="padding-top:100%"></div>
                        {:else if field === 2}
                            <div class="{stackConfig.playerTwo} {getWinnerHighlight(i, j)} rounded-full w-full flex items-center justify-center" style="padding-top:100%"></div>
                        {:else}
                            <div class="{stackConfig.defaultBackground} rounded-full w-full flex items-center justify-center" style="padding-top:100%"></div>
                        {/if}
                    {/each}
                    </div>
                {/each}
            {/if}
        </div>
        {#if winner}
            <NewGame 
                winner="{winner}" 
                onNewGame="{handleNewGame}"
            />
        {/if}
    </div>
</main>