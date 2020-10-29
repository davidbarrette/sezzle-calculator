import React from 'react'
import './equationHolder.css'

class EquationHolder extends React.Component {
    render() {
        const equations = this.props.equations
        const answers = this.props.answers
        return (
        <div style = {{background:"gray", padding:"15px"}} className="equationHolder">
            
            {equations.map((equation, index) =>{
                const answer = answers[index]
                return (
                    <div className="inlineLeft" key = {index}>
                        <div>{equation + " = " + answer}</div>
                    </div>
                )
            })}
        </div>
    )}
}
export default EquationHolder