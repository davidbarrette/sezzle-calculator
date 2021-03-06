import React from 'react'

const EquationHolder = (props) =>{
    let equations = props.equations
    let answers = props.answers

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
    )
}
export default EquationHolder