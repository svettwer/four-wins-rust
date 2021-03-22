<script>

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
        layout = JSON.parse(game.get_layout_json());
    }

    function handleFieldClick(stackIndex){
        if(!winner){
            game.player_action(stackIndex);
            layout = JSON.parse(game.get_layout_json());
            winner = game.get_winner();
            if(winner){
                const constellation = game.get_win_constellation().as_json()
                winConstellation = JSON.parse(constellation)
            }else{
                currentPlayer = game.current_player;
            }
        }
    }

    initGame();
</script>

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