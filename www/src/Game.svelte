<script>
    export let layout;
    export let handleFieldClick;
    export let gameConfig;
    export let winConstellation;

    function getWinnerHighlight(x, y) {
        if( winConstellation ){
            const sameCords = ([x1, y1]) => ([x2, y2]) => x1 === x2 && y1 === y2
            let cordCheck = sameCords([x,y])
            if( cordCheck(winConstellation.one) ||
                cordCheck(winConstellation.two) ||
                cordCheck(winConstellation.three) ||
                cordCheck(winConstellation.four)) {
                return "ring-4 md:ring-8 ring-green-900"
            }
        }
        return ""
    }

    function getFieldColor(player){
        switch (player) {
            case 0: return gameConfig.defaultBackground;
            case 1: return gameConfig.playerOne;           
            case 2: return gameConfig.playerTwo;        
        }
    }
</script>

{#each layout as stack , i}
    <div class=" space-y-2" id="stack-{i}" on:click={() => handleFieldClick(i) }>
    {#each stack as field, j}
        <div 
            class="{getFieldColor(field)} 
            {winConstellation ? getWinnerHighlight(i, j) : ""} 
            rounded-full 
            w-full 
            flex 
            items-center 
            justify-center" 
            style="padding-top:100%" />
    {/each}
    </div>
{/each}