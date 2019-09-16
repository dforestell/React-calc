import React from 'react';

class CalcKeys extends React.Component{
    render(){
        const { numClick, backspaceClick, clearProblem, mathOperatorClick, equalClick, squareRootClick, activeMath, minusClick} = this.props
        return(
            <div className="key-container">
                <button className="calc-key" onClick={() => {clearProblem()}}>C</button>
                <button className="calc-key" onClick={() => {backspaceClick()}}>CE</button>
                <button className={activeMath === "%" ? "active calc-key" : "calc-key"} onClick={ (e) => {mathOperatorClick(e)}}>%</button>
                <button className="calc-key" onClick={() => {squareRootClick()} }>√</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>1</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>2</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>3</button>
                <button className={activeMath === "+" ? "active calc-key" : "calc-key"} onClick={ (e) => {mathOperatorClick(e)}}>+</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>4</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>5</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>6</button>
                <button className={activeMath === "-" ? "active calc-key" : "calc-key"} onClick={ (e) => {minusClick(e)}}>-</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>7</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>8</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>9</button>
                <button className={activeMath === "*" ? "active calc-key" : "calc-key"} onClick={ (e) => {mathOperatorClick(e)}}>*</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>.</button>
                <button className="calc-key" onClick={(e) => {numClick(e)}}>0</button>
                <button className="calc-key" onClick={ () => {equalClick()}}>=</button>
                <button className={activeMath === "/" ? "active calc-key" : "calc-key"} onClick={ (e) => {mathOperatorClick(e)}}>/</button>
            </div>
        )
    }
}

export default CalcKeys;