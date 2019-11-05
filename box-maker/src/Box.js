import React, { Component } from 'react'

class Box extends Component{
  render(){
    return(
      <div>
        <div
        style={{
          height:`${this.props.height}px`,
          width: `${this.props.width}px`,
          backgroundColor: `${this.props.bkgrdcolor}`
        }}
         />
        <button onClick={this.props.deleteBox} >Delete</button>
      </div>
    )
  }
}

export default Box;