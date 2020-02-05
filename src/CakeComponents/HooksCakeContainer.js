import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake, buyIcecream } from '../ReduxCake/CakeAction';

function HooksCakeContainer() {
    const noOfCakes = useSelector(state => state.CakeReducer.noOfCakes)
    const noOfIcecream = useSelector(state => state.CakeReducer.noOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>
                No Of cakes- {noOfCakes}
            </h1>
            <button onClick={() => dispatch(buyCake())}>
                Buy Cakes
            </button>
            <h1>
                No Of Icecream- {noOfIcecream}
            </h1>
            <button onClick={() => dispatch(buyIcecream())}>
                Buy Icecream
            </button>
        </div>
    )
}
export default HooksCakeContainer;
