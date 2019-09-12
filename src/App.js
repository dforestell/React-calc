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
    let newDisplay = this.state.currentDisplay.concat(`${e.target.innerHTML}`)
    this.setState({currentDisplay: newDisplay,})
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

  mathOperatorClick(e){
    let {currentDisplay, currentProblem} = this.state
    if (currentDisplay !== ""){
      if (currentProblem === ""){
        let operator = e.target.innerHTML
        let addToProblem = currentProblem.concat(currentDisplay, operator);

        this.setState({
          currentProblem: addToProblem,
        }, this.clearDisplay());
      } else{
        console.log(" i have other math to do first")
      }
    }
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
                    clearDisplay={ () => {this.clearDisplay()}}
                    mathOperatorClick={ (e) => {this.mathOperatorClick(e)}}
        />
        </div>
      </div>
    );
  }
}

export default App;
