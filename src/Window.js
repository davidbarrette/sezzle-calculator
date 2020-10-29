import React from 'react'
import 'math.js'
import EquationHolder from './equationHolder'
import EquationSubmit from './equationSubmit'

class Window extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            equationToSubmit: "",
            equations: [],
            answers: []
        }
        this.handleEquationChange = this.handleEquationChange.bind(this)
        this.handleEquationSubmission = this.handleEquationSubmission.bind(this)
        this.handleEquationClearhistory = this.handleEquationClearhistory.bind(this)
        this.handleEquationClearLast = this.handleEquationClearLast.bind(this)
    }

    checkIfValidEquation(input){
        if (isNaN(parseFloat(input))){ //Checks if non-math characters (doesn't support trig functions and such)
            return false
        }

        for(let i = 0; i < input.length; i++){
            if(input.charAt(i) === '+' || input.charAt(i) === '-' || //make sure numeric characters are after math operation
                input.charAt(i) === '*' || input.charAt(i) === '/'){
                try {
                    let c = input.charAt(i+1)
                    if(!(c>='0' && c<= '9')){
                        return false
                    }
                } catch (e){
                    console.log(e)
                    return false
                }
            }
            if(input.charAt(i) === '^' || input.charAt(i) === '%'){
                alert("I'm sorry, this calculator does not support exponential or modular arithmetic")
                return false
            }
        }
        return true
    }

    getAnswer(input){
        const strippedInput = input.replace(/\s+/g, '')
        return eval(strippedInput)
    }

    handleEquationSubmission(){
        if(this.state.equationToSubmit && this.checkIfValidEquation(this.state.equationToSubmit)){
            let equation = this.state.equationToSubmit
            let equationAnswer = this.getAnswer(equation)

            let newEquations = this.state.equations
            let newAnswers = this.state.answers
            if(newEquations.length < 10){
                newEquations.push(equation)
                newAnswers.push(equationAnswer)
            } 
            else{
                newEquations.shift()
                newEquations.push(equation)
                newAnswers.shift()
                newAnswers.push(equationAnswer)
            }
            this.setState({
                equationToSubmit: "",
                equations: newEquations,
                answers: newAnswers
            })
        } else {
            alert("Please input a valid equation")
        }
    }

    handleEquationChange(value){
        this.setState({equationToSubmit: value})
    }

    handleEquationClearLast(){
        let newEquation = this.state.equations
        alert("should check user ID and only remove current user's equations")
        newEquation.pop()
        this.setState({
            equationToSubmit: "",
            data: newEquation
        })
    }

    handleEquationClearhistory(){
        this.setState({
            equationToSubmit: "",
            equations: []
        })
    }

    render(){
        return (
            <div className="App">
              <header className="App-header">
                <EquationHolder 
                    equations = {this.state.equations}
                    answers = {this.state.answers}/>
                <EquationSubmit 
                    onEquationSubmission = {this.handleEquationSubmission}
                    onEquationChange = {this.handleEquationChange}
                    onClearPrevious = {this.handleEquationClearLast}
                    onClearHistory = {this.handleEquationClearhistory}/>
              </header>
            </div>
          );
    }
  
}

export default Window;