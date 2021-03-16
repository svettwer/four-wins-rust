<script>
    import * as wasm from "four-wins"

    const stackConfig = {
        defaultBackground: "bg-gray-100",
        playerOne: "bg-red-800",
        playerTwo: "bg-wellow-800"
    }

    let stacks = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]

    
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
                    grid-cols-{stacks.length} 
                    gap-4">
            {#each stacks as stack, i}
                <div class="md:w-16" id="stack-{i}" on:click={wasm.greet}>
                {#each stack as fieldCss}
                    <div class="{stackConfig.defaultBackground} rounded-full md:h-16 md:w-16 flex items-center justify-center"></div>
                {/each}
                </div>
            {/each}
        </div>
    </div>
</main>