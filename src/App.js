import React from 'react';
import CalcKeys from './calcKeys';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      currentDisplay: "",
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

  clear(){
    this.setState({
      currentDisplay: "",
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
                    clear={ () => {this.clear()}}
        />
        </div>
      </div>
    );
  }
}

export default App;
