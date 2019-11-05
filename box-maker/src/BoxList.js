import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component{
  constructor(props){
    super(props)
    this.state = { boxes: [] };
    this.add = this.add.bind(this)
  }
  add(newBox){
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }
  delete(id){
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  render(){
    const boxes = this.state.boxes.map(box => (
      <Box 
        key={box.id}
        height={box.height}
        width={box.width}
        bkgrdcolor={box.bkgrdcolor}
        deleteBox={() => this.delete(box.id)}
      />
    ))
    return(
      <div>
        <NewBoxForm addBox={this.add} />
        {boxes}
      </div>
    )
  }
}

export default BoxList