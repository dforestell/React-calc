import React from 'react';
import CalcKeys from './calcKeys';
import CalcDisplay from './calcDisplay';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentDisplay: "",
      currentProblem: "",
      shouldAppendDisplay: true,
      activeMath: "",
    }
  }

  numClick(e){
    const {currentDisplay, shouldAppendDisplay} = this.state
      if (shouldAppendDisplay){
        let newDisplay = currentDisplay.concat(`${e.target.innerHTML}`)
        this.setState({currentDisplay: newDisplay,})
      }else{
        this.setState({ 
          currentDisplay: `${e.target.innerHTML}`,
          shouldAppendDisplay: true,
          activeMath: "",
      })
      }
  }

  backspaceClick(){
    let back = this.state.currentDisplay.slice(0, -1)
    this.setState({
      currentDisplay: back,
    })
  }


  clearProblem(){
    this.setState({
      currentDisplay: "",
      currentProblem: "",
      shouldAppendDisplay: true,
      activeMath: ""
    })
  }

  mathOperatorClick(e){
    let {currentDisplay, currentProblem, activeMath} = this.state
    if  (activeMath === ""){
      if (currentDisplay !==  "" ){
        let operator = e.target.innerHTML
          if (currentProblem === "" && currentDisplay){
            let addToProblem = currentProblem.concat(currentDisplay, operator);
            this.setState({
              activeMath: `${operator}`,
              currentProblem: addToProblem,
              shouldAppendDisplay: false,
            });
          } else{
            this.completeMath(operator)
          }
      }
    }
  }

  
  completeMath(operator){
   const {currentDisplay, currentProblem} = this.state 
   const problem = currentProblem.concat(currentDisplay)
   const answer = eval(problem)
   this.setState({ 
     currentDisplay: `${answer}`,
     currentProblem: answer + `${operator}`,
     shouldAppendDisplay: false,
     activeMath: `${operator}`,
    })
  }

  equalClick(){
   this.setState({ activeMath: "" })
   const {currentDisplay, currentProblem} = this.state 
   const problem = currentProblem.concat(currentDisplay)
   const answer = eval(problem)
   this.setState({ 
     currentDisplay: `${answer}`,
     currentProblem: '',
     shouldAppendDisplay: false,
    })
  }

  squareRootClick(){
    this.setState({ activeMath: "" })
    const {currentDisplay, currentProblem} = this.state 
    if (currentProblem !== ""){
      const problem = currentProblem.concat(currentDisplay)
      const answer = eval(problem)
      const sqRoot = Math.sqrt(answer)
      this.setState({ 
        currentDisplay: `${sqRoot}`,
        currentProblem: "",
      })
    } else{
      const sqRoot = Math.sqrt(currentDisplay)
      this.setState({ 
        currentDisplay: `${sqRoot}`,
        currentProblem: "",
      })
    }
  }
  sliceDisplay(display){
   return  display.slice(0,18)
  }

  render(){
    const { currentDisplay, activeMath } = this.state
    return (
      <div className="App">
        <div className="calculator-container">
          <CalcDisplay currentDisplay={this.sliceDisplay(currentDisplay)}/>
          < CalcKeys numClick={ (e) =>{this.numClick(e)}}
                    backspaceClick={ () => {this.backspaceClick()}}
                    clearProblem={ () => {this.clearProblem()}}
                    mathOperatorClick={ (e) => {this.mathOperatorClick(e)}}
                    equalClick={() => {this.equalClick()}}
                    squareRootClick={() => {this.squareRootClick()}}
                    activeMath={activeMath}
        />
        </div>
      </div>
    );
  }
}

export default App;
