<script>
    import FourWins from "./FourWins.svelte";
    import ManageMultiplayerGame from "./ManageMultiplayerGame.svelte";

    export let lobby;
    export let gameMode;

    const isMultiplayer = lobby || gameMode === "multiplayer";

</script>

{#if isMultiplayer}
    <ManageMultiplayerGame lobby={lobby} />
{:else}
    <FourWins/>
{/if}