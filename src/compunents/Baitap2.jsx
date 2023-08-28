import React, { Component } from 'react'

export default class Baitap2 extends Component {
  render() {
    let number1 = 19;
    let number2 = 6;
    return (
      <div>
        <h3>Baitap2</h3>
       <p style={{fontWeight:"600"}} >Tổng của {number1} và {number2} là:{number1 + number2} </p>
      </div>
    )
  }
}

