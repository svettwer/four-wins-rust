<script>
    import SetupMultiplayerGame from "./SetupMultiplayerGame.svelte";
    import Lobby from "./Lobby.svelte";

    export let lobby;

    function handleOnLobbyCreated(createdLobby){
        lobby = createdLobby;
    }

</script>


<div class="container mx-auto flex flex-col items-center justify-center space-y-4 text-white">
    <div class="text-2xl py-4">Multiplayer</div>
        {#key lobby}
            {#if lobby}
                <Lobby lobby={lobby}/>
            {:else}
                <SetupMultiplayerGame onLobbyCreated={handleOnLobbyCreated}/>
            {/if}
        {/key}
</div>