import React from 'react'
import { utils } from './utils.js'
import io from 'socket.io-client'

let equationToSubmit = ""

const ENDPOINT = 'localhost:3001'
let socket = io(ENDPOINT)

export default class EquationSubmit extends React.Component {
    constructor(props){
        super(props)
        this.handleEquationChange = this.handleEquationChange.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);
    }
    
    onComponentDidUnmount(){
        socket.emit('disconnect')
    }

    handleEquationChange(e){
        equationToSubmit = e.target.value
    }

    handleSubmission(e){
        e.preventDefault()

        let equationAnswer
        if(utils.checkIfValidEquation(equationToSubmit)){
            equationAnswer = utils.getAnswer(equationToSubmit)
            socket.emit('submission', equationToSubmit, equationAnswer)  
        } else {
            alert("Please input a valid equation")
        }

        

        equationToSubmit = ""
        this.form.reset()
        this.input.focus()
    }

    render(){
        return (
            <>
                <p>Submit an Equation!</p>
                <form styleclass="equationSubmit"ref ={form => this.form = form} >
                    <input  ref = {(input)=>{ this.input = input}}
                        type="text" 
                        id="equationInput" 
                        name="equationInput" 
                        placeholder="1 + 1"
                        onInput = {this.handleEquationChange}/>
                        <br/>
                        <button onClick = {this.handleSubmission}> Submit </button>
                </form>
                
            </>
        )
    }
}