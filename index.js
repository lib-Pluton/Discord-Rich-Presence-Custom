var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Doing Something But Who Knows?", 
assets : {
large_image : "hello",
large_text : "Kali Linux"
},
buttons : [{label : "Twitch" , url : "https://twitch.tv/plutonlib"},{label : "GitHub", url : "https://github.com/lib-Pluton"}]
}
})
})
client.login({ clientId : "800260589355270155" }).catch(console.error);