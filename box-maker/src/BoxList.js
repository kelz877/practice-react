import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component{
  constructor(props){
    super(props)
    //only need to store empty array of boxes
    this.state = { boxes: [] };
    this.add = this.add.bind(this)
  }
  //takes the existing boxes array and adds the new box to it then pass add to the form 
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
    //loop over this.state.boxes to map out the boxes and then render them 
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
        {/* pass down method that affects the state (add), under the prop addBox */}
        <NewBoxForm addBox={this.add} />
        {boxes}
      </div>
    )
  }
}

export default BoxList