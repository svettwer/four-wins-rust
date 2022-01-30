<script>
    import { createNewLobby } from '../client'

    export let onLobbyCreated;

    let playerName;
    let openLobby;
    let playerNameMissing = false;

    let buttonStyle = `
            text-xl 
            font-bold 
            text-lg 
            rounded 
            bg-blue-800 
            px-4 
            py-2 
            hover:bg-blue-300 
            transition-colors 
            duration-200 
            hover:text-black
            `


    function handleOpenLobby() {
        if(!playerName){
            playerNameMissing = true;
        }
        else{
            openLobby = createNewLobby(playerName)
        }
    }
</script>

{#if openLobby}
    {#await openLobby}
        <p>...creating Lobby</p>
    {:then data}
        {onLobbyCreated(data)}
    {:catch error}
        <p>An error occurred!</p>
    {/await}
{:else}
    <div class="space-y-4">
        {#if playerNameMissing}
            <div class="space-y-4">Please enter a name</div>
        {:else}
            <div class="space-y-4">&nbsp;</div>
        {/if}
        <div>
            <label for="playerName">Name:</label>
            <input class="bg-blue-800 rounded border-2 border-blue-300 hover:border-2 hover:border-white" id="playerName" bind:value={playerName}>
        </div>
        <div>
            <button class="{buttonStyle}" on:click={() => handleOpenLobby()}>Open Lobby</button>
        </div>
    </div>
{/if}