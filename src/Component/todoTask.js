import React, { Component } from 'react'

import {Button,FormControl} from 'react-bootstrap'
import { connect } from 'react-redux'
import {add} from '../actions/actions'
class todoTask extends Component {
  state= {
    input:''
  }
handelChange =(e)=>{
this.setState({
  input:e.target.value
})
}
addItem=(e)=>{
e.preventDefault()
this.props.add({
  id:Date.now(),
  text:this.state.input,
  isComplete:false
});
this.setState({
  input:''
})
}
  render() {
    return (
      <div>
      <div className="App">
  <h1 className="title">Daily Todo List</h1>
  <div className="add-descprition">
  <p className="description">add your todo:</p> <FormControl className="forms" type="text" placeholder="Add your todo" onChange={this.handelChange} value={this.state.input} />
  <Button variant="success" className="add" onClick={this.addItem}>+</Button></div>
  
  </div>  
   </div>
  )
    
  }
}
const mapDispatchToprops= {
add
}
export default connect(null,mapDispatchToprops)(todoTask)