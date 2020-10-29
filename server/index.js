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
    console.log("-----New Client Connected-----")

    socket.on('submission', (equation, answer) => {
        if(appState.equations.length < 10){
            appState.equations.push(equation)
            appState.answers.push(answer)
        } 
        else{
            appState.equations.shift()
            appState.equations.push(equationToSubmit)
            appState.answers.shift()
            appState.answers.push(equationAnswer)
        }
        console.log(appState)
    }) 

    socket.on('disconnect', () => {
        console.log('--User Has Left--')
    })
})

app.use(router)

server.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))