
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM= 'BUY_ICECREAM';
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}
function buyIcecream(){
    return {
        type: BUY_ICECREAM,
    }
}

const initialIcecream = {
    noOfIcecream:20
}
const initialCake={
    noOfCakes:10
}
const cakeReducer = ( state=initialCake ,action ) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            noOfCakes:state.noOfCakes-1
        }
        default: return state;
    }
}
const icecreamReducer = (state=initialIcecream,action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            noOfIcecream:state.noOfIcecream-1
        }
        default: return state;
    }
}


const redux = require('redux')
const createStore = redux.createStore()
const combineReducer = redux.combineReducers();
const reduxLogger=require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const rootReducer = combineReducer({
    cake:cakeReducer,
    icecream:icecreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));

console.log('initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()


