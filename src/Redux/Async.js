const initialState = {
    loading: false,
    users:[],
    error:''
}

const FETCH_USER_REQUEST ='FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
} 
const fetchUserSuccess = (user) =>{
    return {
        type: FETCH_USER_SUCCESS,
        payload:user
    }
}

const fetchUserFailure = (error) =>{
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}
const fetchUser = () =>{
    return function(dispatch){
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const user= response.data.map( users => users.id );
            dispatch(fetchUserSuccess(user))
        })
        .catch(error =>{
          dispatch(fetchUserFailure(erro))
        })
    }
}

const reducer = (state = initialState , action) =>{
    switch(action.type){
        case FETCH_USER_REQUEST: return {
            ...state,
            loading:true
        }
        case FETCH_USER_SUCCESS : return {
            ...state,
            users:action.payload
        }
        case FETCH_USER_FAILURE : return {
            loading:false,
            users:[],
            error:action.payload
        }

    }
}
const redux = require('redux')
const createStore = redux.createStore();
const applyMiddleware = redux.applyMiddleware();
const thunkMiddleware =require('redux-thunk').default;
const axios = require('axios');
const store =createStore(reducer,applyMiddleware(thunkMiddleware));

store.subscribe( () =>  {console.log(store.getState())})
store.dispatch(fetchUser())