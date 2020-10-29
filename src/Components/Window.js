import React, { useState } from 'react'
import 'math.js'
import EquationHolder from './equationHolder'
import EquationSubmit from './equationSubmit'

const Window = () => {
    const [equations, setEquations] = useState([])
    const [answers, setAnswers] = useState([])

    return (
        <div className="App">
            <header className="App-header">
            <EquationHolder 
                equations = {equations}
                answers = {answers}/>
            <EquationSubmit 
                equations = {equations}
                answers = {answers}
                setAnswers = {setAnswers}
                setEquations = {setEquations}/>
            </header>
        </div>
    );
}

export default Window;