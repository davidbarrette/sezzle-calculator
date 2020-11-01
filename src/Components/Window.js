import React, { useState, useEffect } from 'react'
import 'math.js'
import EquationHolder from './equationHolder'
import EquationSubmit from './equationSubmit'
import io from 'socket.io-client'

const ENDPOINT = 'localhost:3001'
let socket = io(ENDPOINT)

const Window = () => {
    const [equations, setEquations] = useState([])
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        socket.on('updateAppState', (appState) => {
            const {equations, answers} = appState
            setEquations([...equations])
            setAnswers([...answers])
        })
    })
    
    return (
        <div className="App">
            <header className="App-header">
            <EquationSubmit 
                equations = {equations}
                answers = {answers}
                setAnswers = {setAnswers}
                setEquations = {setEquations}/>
            <EquationHolder 
                equations = {equations.reverse()}
                answers = {answers.reverse()}/>
            </header>
        </div>
    );
}

export default Window;