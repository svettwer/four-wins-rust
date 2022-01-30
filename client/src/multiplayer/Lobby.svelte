<script>
    import { getConfig } from "../config/getConfig";
    import MdContentCopy from "svelte-icons/md/MdContentCopy.svelte"

    export let lobbyData;
    let config = getConfig();

    let invitationLink = `${config.selfUrl}?lobby=${lobbyData.lobbyId}`

    let copied = false;

    let buttonStyle = `
            text-m 
            font-bold 
            text-lg 
            rounded 
            bg-blue-800 
            px-2 
            hover:bg-blue-300 
            transition-colors 
            duration-200 
            hover:text-black
            `

    function onCopyLinkToClipboard() {
        navigator.clipboard
        .writeText(invitationLink)
        .then(() => {copied = true});
}
</script>

<div>
    <div class="py-5">
        <div class="text-xl">Your Lobby</div>
        {JSON.stringify(lobbyData)}
    </div>
    <div>
        <div>
            <label for="invitationLink">Copy link to invite others:</label>
            <input class="bg-blue-800 rounded border-2 border-blue-300 hover:border-2 hover:border-white w-72" id="invitationLink" bind:value={invitationLink}/>
        </div>
        <div>
            <button class={buttonStyle} on:click={onCopyLinkToClipboard}>Copy link</button>
            {#if copied}
                ✔️
            {/if}
        </div>
    </div>
</div>