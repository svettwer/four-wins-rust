<script>
    import * as wasm from "four-wins"

    const stackConfig = {
        defaultBackground: "bg-gray-100",
        playerOne: "bg-red-800",
        playerTwo: "bg-yellow-300"
    }

    let game = wasm.FourWins.new();
    let layout = []
    let winner = 0
    let winConstellation;
    for (let i = 0 ;i < game.get_stack_count();  i++){
        layout.push(game.get_stack(i))
    }

    function handleClick(stackIndex){
        if(!winner){
            console.log(`Stack index: ${stackIndex}`); 
            console.log(`Current stack: ${layout[stackIndex]}`);
            game.player_action(stackIndex);
            layout[stackIndex] = game.get_stack(stackIndex)
            console.log(`Stack after player action: ${layout[stackIndex]}`);
            winner = game.get_winner();
            console.log(`Winner: ${winner}`)

            if(winner){
                const constellation = game.get_win_constellation().get_as_json()
                console.log(`Win Conselltation: ${constellation}`)
                winConstellation = JSON.parse(constellation)
            }
        }
    }

    function getWinnerHighlight(x, y) {
        if( winConstellation ){
            if( winConstellation.one[0] === x && 
                winConstellation.one[1] === y || 
                winConstellation.two[0] === x && 
                winConstellation.two[1] === y ||  
                winConstellation.three[0] === x && 
                winConstellation.three[1] === y ||  
                winConstellation.four[0] === x && 
                winConstellation.four[1] === y) {
                return "border-8 border-solid border-green-900"
            }
        }
        return ""
    }
</script>

<main>
    <div class="pt-20">
        <div class="md:p-3 
                    md:container 
                    md:mx-auto
                    md:w-2/6 
                    md:h-auto 
                    bg-blue-500 
                    object-center 
                    border-8 
                    grid 
                    grid-cols-7 
                    gap-4">
            {#if !winner}
                {#each layout as stack , i}
                    <div class="md:w-16" id="stack-{i}" on:click={() => handleClick(i) }>
                    {#each stack as field, j}
                        {#if field === 1}
                            <div class="{stackConfig.playerOne} rounded-full md:h-16 md:w-16 flex items-center justify-center"></div>
                        {:else if field === 2}
                            <div class="{stackConfig.playerTwo} rounded-full md:h-16 md:w-16 flex items-center justify-center"></div>
                        {:else}
                            <div class="{stackConfig.defaultBackground} rounded-full md:h-16 md:w-16 flex items-center justify-center"></div>
                        {/if}
                    {/each}
                    </div>
                {/each}
            {:else}
                {#each layout as stack , i}
                    <div class="md:w-16" id="stack-{i}" on:click={() => handleClick(i) }>
                    {#each stack as field, j}
                        {#if field === 1}
                            <div class="{stackConfig.playerOne} {getWinnerHighlight(i, j)} rounded-full md:h-16 md:w-16 flex items-center justify-center"></div>
                        {:else if field === 2}
                            <div class="{stackConfig.playerTwo} {getWinnerHighlight(i, j)} rounded-full md:h-16 md:w-16 flex items-center justify-center"></div>
                        {:else}
                            <div class="{stackConfig.defaultBackground} rounded-full md:h-16 md:w-16 flex items-center justify-center"></div>
                        {/if}
                    {/each}
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</main>