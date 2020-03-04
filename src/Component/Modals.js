import React from "react";
import { Button, Form } from "react-bootstrap";

import Modal from "react-modal";
import { connect } from "react-redux";
import {edit} from '../actions/actions'
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Modals extends React.Component {
state = {
      modalIsOpen: false,
      text: ""
      
    };

  

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handelChange = e => {
    this.setState({
      text: e.target.value,

    });
  };
  EditItems =()=>{
  this.props.edit({
    id: this.props.el.id,
    text:this.state.text
  });
  this.setState({
    modalIsOpen: false,
  })

  }


  render() {
    return (
      <div>
        <Button variant="warning" onClick={this.openModal}>
          Edit
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <h2>Edit your Todo</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Todo</Form.Label>
            <Form.Control name="title" type="text" placeholder="Enter Your New Todo" onChange={this.handelChange}/>
          </Form.Group>
         
          <Button variant="outline-primary" onClick={this.EditItems}>Submit</Button>
          <Button variant="outline-danger" 
          onClick={this.closeModal}>
            Cancel
          </Button>
        </Modal>
      </div>
    );
  }
}
export default connect(null,{edit})(Modals);
