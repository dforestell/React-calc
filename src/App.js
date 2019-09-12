import React from 'react';
import CalcKeys from './calcKeys';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentDisplay: "",
      currentProblem: "",
    }
  }

  numClick(e){
    const {currentDisplay, currentProblem} = this.state
    const last = currentProblem.slice(currentProblem.length -1 , currentProblem.length);
    console.log(last)
    if (last === '%' || last === '/' || last === '*' || last === '+' || last === '-'){
      this.setState({currentDisplay: e.target.innerHTML})
    }else{
      console.log(typeof(currentDisplay))
      let newDisplay = currentDisplay.concat(`${e.target.innerHTML}`)
      this.setState({currentDisplay: newDisplay,})
    }
  }

  backspaceClick(){
    let back = this.state.currentDisplay.slice(0, -1)
    this.setState({
      currentDisplay: back,
    })
  }

  clearDisplay(){
    this.setState({
      currentDisplay: "",
    })
  }

  clearProblem(){
    this.setState({
      currentDisplay: "",
      currentProblem: "",
    })
  }

  mathOperatorClick(e){
    let {currentDisplay, currentProblem} = this.state
    let operator = e.target.innerHTML
    if (currentDisplay !== ""){
      if (currentProblem === ""){
        let addToProblem = currentProblem.concat(currentDisplay, operator);

        this.setState({
          currentProblem: addToProblem,
        }, this.clearDisplay());
      } else{
        this.completeMath(operator)

      }
    }
  }

  completeMath(operator){
    const {currentDisplay, currentProblem} = this.state 
   let problem = currentProblem.concat(currentDisplay)
   let answer = eval(problem)
   console.log(answer)
   this.setState({ 
     currentDisplay: ""+answer,
     currentProblem: answer+ `${operator}`,
    })
  }


  render(){
    return (
      <div className="App">
        <div className="calculator-container">
          <div className="display">
            {this.state.currentDisplay}
          </div>
        < CalcKeys numClick={ (e) =>{this.numClick(e)}}
                    backspaceClick={ () => {this.backspaceClick()}}
                    clearProblem={ () => {this.clearProblem()}}
                    mathOperatorClick={ (e) => {this.mathOperatorClick(e)}}
                    completeMath={() => {this.completeMath()}}
        />
        </div>
      </div>
    );
  }
}

export default App;
