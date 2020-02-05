import React from 'react';
import * as actionCreator from "../ReduxCake/CakeAction"
import { connect } from 'react-redux';
function CakeContainer(props) {
    return (
        <div>
            <h2> Nunber Of Cakes {props.noOfCakes}</h2>
            <button onClick={props.buyCake}> Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCakes: state.CakeReducer.noOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(actionCreator.buyCake())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);