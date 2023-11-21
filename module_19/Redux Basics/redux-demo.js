
const redux = require('redux')

//Create Redux function 
const counterReducer = (state = {counter:0}, action) => {
   if(action.type == 'increment'){
    return {
        counter: state.counter + 1

    };
   }

   if(action.type == 'decrement'){
    return {
        counter: state.counter - 1

    };
   }

   return state;
   
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = redux.legacy_createStore(counterReducer);

const counterSubscriber = () => {

    //getstate method is available in createstore
    const latestState = store.getState();
     console.log(latestState)


}

// You can use subscribe() to update the UI in response to state changes.
store.subscribe(counterSubscriber)

// The only way to mutate the internal state is to dispatch an action.
store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})
store.dispatch({type:''})