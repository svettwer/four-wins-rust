<script>
    import { getConfig } from "../config/getConfig";
    
    export let lobbyData;
    let config = getConfig();
</script>

<div>
    <div class="text-xl">Your Lobby</div>
    {JSON.stringify(lobbyData)}

    <div>Copy link to invite others: {config.selfUrl}?lobby={lobbyData.lobbyId}</div>
</div>