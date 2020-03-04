import React from "react";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";
import { complete,remove } from "../actions/actions";
import Modals from './Modals'


function TodoList(props) {

  return (
    <div>
      <ListGroup className="add_items">
        {props.items.map((el, key) => (
         
          <ListGroupItem key={key} className="list">
            <p className={el.isComplete?"text":""}>{el.text}</p>
            <Button onClick={()=>props.complete(el.id)}>Complete</Button>
            <Modals el={el}/>
            <Button onClick={()=>props.remove(el.id)}>Delete</Button>
          </ListGroupItem>
        ))
       }
      </ListGroup>
    </div>
  );
}

const mapStatetoProps = state => ({
  items: state
});
const mapDispatchToProps={
  complete,remove
}

export default connect(mapStatetoProps,mapDispatchToProps)(TodoList);
