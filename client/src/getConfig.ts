import dev from "./envs/dev.json"

export function getConfig() {
    switch(window.location.hostname){
        case "localhost":{
            return dev;
        }
    }
}