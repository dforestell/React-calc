import React from 'react';

class CalcKeys extends React.Component{
    render(){
        const { numClick, backspaceClick, clear} = this.props
        return(
            <div className="key-container">
                <div className="calc-key" onClick={() => {clear()}}>C</div>
                <div className="calc-key" onClick={() => {backspaceClick()}}>CE</div>
                <div className="calc-key" onClick={backspaceClick}>(</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>)</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>1</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>2</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>3</div>
                <div className="calc-key">+</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>4</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>5</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>6</div>
                <div className="calc-key">-</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>7</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>8</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>9</div>
                <div className="calc-key">x</div>
                <div className="calc-key">.</div>
                <div className="calc-key" onClick={(e) => {numClick(e)}}>0</div>
                <div className="calc-key">=</div>
                <div className="calc-key">/</div>
            </div>
        )
    }
}

export default CalcKeys;