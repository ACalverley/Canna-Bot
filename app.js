const express = require("express");
const builder = require('botbuilder'); 
const request = require('request-promise-native'); 
// const request = require('request-promise-native');
const app = express();
const port = process.env.PORT || 3000;
const appId ="d168ec8d-24f1-4fba-9f8b-2e7c90a54c49";   
const appPassword = "nxbTIJGYC27=}{dewbM472:";
const q = "the leaves are brown";

var connector = new builder.ChatConnector({     
    appId: appId,     
    appPassword: appPassword
});

// chat connector for communicating with the Bot Framework Service 
// var connector = new builder.ChatConnector({     
//     appId: process.env.MICROSOFT_APP_ID,     
//     appPassword: process.env.MICROSOFT_APP_PASSWORD
// });

// // Listen for messages from users  
// app.post('/api/messages', connector.listen());  


// // Receive messages from the user and respond by echoing each message back (prefixed with 'You said:') 
// var bot = new builder.UniversalBot(connector, function (session) {     
// 	session.send("You said this fucking word becasues jones sucks: %s", session.message.text); 
// });

app.get('/', (req, res) => {
	res.send("Hello");
});

app.get(`/luis/v1/application?ID=${appId}&q=${q}`, (req, res) => {
	console.log(JSON.parse(res));
});


app.listen(port, process.env.IP, function(){
    console.log("Server has started!");
});