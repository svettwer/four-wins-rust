<script>
    import * as wasm from "four-wins"

    const stackConfig = {
        defaultBackground: "bg-gray-100",
        playerOne: "bg-red-800",
        playerTwo: "bg-wellow-800"
    }

    let game = wasm.FourWins.new();
    let rerender = 0    

    function handleClick(stackIndex){
        console.log(`Stack index: ${stackIndex}`); 
        console.log(`Current stack: ${game.get_stack(stackIndex)}`);
        game.player_action(stackIndex);
        rerender = rerender+1
        console.log(rerender)
        console.log(`Stack after player action: ${game.get_stack(stackIndex)}`);
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
            {#each Array(game.get_stack_count() - 1) as _ , i}
                <div class="md:w-16" id="stack-{i}" on:click={() => handleClick(i) }>
                {#each game.get_stack(i) as value, j}
                    {#if value === 1}
                        <div rerender="{rerender}" val="{value}" class="{stackConfig.playerOne} rounded-full md:h-16 md:w-16 flex items-center justify-center"></div>
                    {:else if value === 2}
                        <div rerender="{rerender}" val="{value}" class="{stackConfig.playerTwo} rounded-full md:h-16 md:w-16 flex items-center justify-center"></div>
                    {:else}
                        <div rerender="{rerender}" val="{value}" class="{stackConfig.defaultBackground} rounded-full md:h-16 md:w-16 flex items-center justify-center"></div>
                    {/if}
                {/each}
                </div>
            {/each}
        </div>
    </div>
</main>