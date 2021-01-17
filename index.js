var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Details side", // You can write everything, like my text is "Doing Something But Who Knows?"
assets : {
large_image : "Big Picture File Name on Discord Dev Portal", // You added one file on Discord Dev Portal, write this file name
large_text : "Big Picture View Name on Discord" // When your cursor on this image you can see this text.
},
buttons : [{label : "Application Name" , url : "Website Link"},{label : "Application Name", url : "Website link"}]
}  // Example : "Application name = Github" "Website Link : https://github.com/lib-Pluton  
})
})
client.login({ clientId : "Developer App ID" }).catch(console.error); // Your Application ID on Discord Dev Portal
