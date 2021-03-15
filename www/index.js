import * as wasm from "four-wins";

function playerAction(location){
    document.getElementById(location).classList.add("bg-yellow-800")
}

export{
    playerAction
}