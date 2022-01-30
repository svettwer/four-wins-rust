<script>
    import FourWins from "./game/FourWins.svelte";
    import ManageMultiplayerGame from "./multiplayer/ManageMultiplayerGame.svelte";

    export let lobby;
    export let gameMode;

    const isMultiplayer = lobby || gameMode === "multiplayer";

</script>

{#if isMultiplayer}
    <ManageMultiplayerGame lobby={lobby} />
{:else}
    <FourWins/>
{/if}