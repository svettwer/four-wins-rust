<script>
    let sessionId = getRandomSessionId()
    let playerName;
    let fetchImage;

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

    function getRandomSessionId(){
        return Math.random().toString(36).substr(2, 9);
    }

    function handleOpenLobby(params) {
        fetchImage = (async () => {
		const response = await fetch('https://localhost:3000/newLobby', {
            method: "POST"
        })
        return await response.json()
        })()
    }
</script>

<div>
    <div class="text-2xl py-4">Multiplayer</div>
    {#if fetchImage}
        {#await fetchImage}
            <p>...creating Lobby</p>
        {:then data}
            <p>TODO: Render lobby</p>
        {:catch error}
            <p>An error occurred!</p>
        {/await}
        {:else}
        <div class="space-y-4">
            <div>
                <div class="rounded-full bg-red-800"/>
                <label for="playerName">Name:</label>
                <input class="bg-blue-800 rounded hover:border-2 hover:border-white" id="playerName" bind:value={playerName}>
            </div>
            <div>
                <button class="{buttonStyle}" on:click={() => handleOpenLobby()}>Open Lobby</button>
            </div>
        </div>
    {/if}
</div>