import React from 'react';
import {connect} from 'react-redux';
import {buyCake,buyIcecream} from '../ReduxCake/CakeAction'
function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>BuyItem</button>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    const itemState = ownProps.cake ? state.CakeReducer.noOfCakes : state.CakeReducer.noOfIcecream
    return {
        item: itemState
    }
}

// const mapDispatchToProps = (dispatch,ownProps) => {
//     const dispatchFunction  = ownProps.cake ? () => dispatch(buyCake())
//     : dispatch(buyIcecream())
//     return {
//         buyItem: dispatchFunction
//     }
// }
export default connect(mapStateToProps)(ItemContainer);