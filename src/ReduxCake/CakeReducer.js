const initialState = {
    noOfCakes: 10,
    noOfIcecream: 20
}

const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                noOfCakes: state.noOfCakes-action.payload
            }
        case 'BUY_ICECREAM':
            return {
                ...state,
                noOfIcecream : state.noOfIcecream -1
            }
        default: return state
    }
}

export default CakeReducer;