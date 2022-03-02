import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";


function Home({toDos, addToDo}){
    const [text, setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return(
      <div>
          <h1>To Do</h1>
          <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} placeholder="Write To Dos" />
            <button>Add</button>
          </form>
          <ul>{JSON.stringify(toDos)}</ul>
      </div>  
    );
}

function mapStateToProps(state){
    return {toDos: state}
}

function mapDispatchToProps(dispatch){
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);