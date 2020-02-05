import React, { useState } from 'react';
import * as actionCreator from "../ReduxCake/CakeAction"
import { connect } from 'react-redux';
function NewCakeContainer(props) {
    const [number,setNumber] = useState(1)
    return (
        <div>
            <h2> Nunber Of Cakes {props.noOfCakes}</h2>
            <input type="text" value={number} onChange = { e => setNumber(e.target.value)}></input>
            <button onClick={ () =>  props.buyCake(number)}> Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCakes: state.noOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(actionCreator.buyCake(number))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer);