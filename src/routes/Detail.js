import React from "react";
import {connect} from "react-redux";
import { useParams } from "react-router-dom";

function Detail({toDos}){
    const id = useParams().id;
    const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
    return (
        <>
        <h2>{toDo?.text}</h2>
        <h5>Created at{toDo?.id}</h5>
        </>
    )
}

function mapStateToProps(state){
    return {toDos: state};
}

export default connect(mapStateToProps) (Detail);