export const utils = {
    checkIfValidEquation: (input) => {
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
            if(input.charAt(i) === '^' || input.charAt(i) === '%'){ //Doesn't support these characters
                alert("I'm sorry, this calculator does not support exponential or modular arithmetic")
                return false
            }
        }
        return true
    },

    getAnswer: (input) => {
        const strippedInput = input.replace(/\s+/g, '')
        return eval(strippedInput)
    },

    handleEquationChange: (value) => {
        this.setState({equationToSubmit: value})
    }
}

