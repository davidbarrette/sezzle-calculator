import React from 'react'


export default class EquationSubmit extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClearPrevious = this.handleClearPrevious.bind(this);
        this.handleClearHistory = this.handleClearHistory.bind(this);
    }

    onComponentDidMount(){
        this.input.focus()
    }

    handleChange(e){
        this.props.onEquationChange(e.target.value)
    }

    handleClick(e){
        e.preventDefault()
        this.props.onEquationSubmission()
        this.form.reset()
        this.input.focus()
    }

    handleClearPrevious(e){
        e.preventDefault()
        this.props.onClearPrevious()
    }

    handleClearHistory(e){
        e.preventDefault()
        this.props.onClearHistory()
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
                        onChange = {this.handleChange}/>
                        <br/>
                        <button onClick = {this.handleClick}> Submit </button>
                        <button onClick = {this.handleClearPrevious}> Clear Previous </button>
                        <button onClick = {this.handleClearHistory}> Clear History </button>
                </form>
                
            </>
        )
    }
}