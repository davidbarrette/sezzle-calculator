const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 3001

const router = require('./router')

const app = express();
const server = http.createServer(app)
const io = socketio(server);


const appState = {
    equations: [],
    answers: []
}

io.on('connection', (socket) => {
    console.log("-----Connected-----")

    socket.on('submission', (equation, answer) => {
        if(appState.equations.length < 10){
            appState.equations.unshift(equation)    //I think pushing the new equations looks better, making the new
            appState.answers.unshift(answer)        //equations start at the bottom and scroll up.  I moved the submition
        }                                           //I moved the submission above the equationHolder in order to look nicer 
        else{
            appState.equations.shift()
            appState.equations.unshift(equation)
            appState.answers.shift()
            appState.answers.unshift(answer)
        }
    socket.broadcast.emit('updateAppState', appState)
    }) 

    socket.on('disconnect', () => {
        console.log('--Disconnected--')
    })
})

app.use(router)

server.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))