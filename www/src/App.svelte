<script>
    import "tailwindcss/tailwind.css"
    import * as wasm from "four-wins"
    import CurrentPlayer from "./CurrentPlayer.svelte"
    import NewGame from "./NewGame.svelte"
    import Game from "./Game.svelte"

    const gameConfig = {
        defaultBackground: "bg-gray-100",
        playerOne: "bg-red-800",
        playerTwo: "bg-yellow-300"
    }

    let game;
    let layout;
    let winner;
    let winConstellation;
    let currentPlayer;

    function initGame() {
        game = wasm.FourWins.new();
        winner = 0
        winConstellation = undefined
        currentPlayer = game.current_player;
        layout = []
        for (let i = 0 ;i < game.get_stack_count();  i++){
            layout.push(game.get_stack(i))
        }   
    }

    function handleFieldClick(stackIndex){
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

    initGame();
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
                    max-w-screen-sm
                    ">
                <Game 
                    layout="{layout}" 
                    handleFieldClick="{handleFieldClick}" 
                    gameConfig="{gameConfig}"
                    winConstellation="{winConstellation}"
                /> 
        </div>
        {#if winner}
            <NewGame 
                winner="{winner}" 
                onNewGame="{initGame}"
            />
        {/if}
    </div>
</main>