import classes from './Counter.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Component from 'react-dom';

const Counter = () => {


  //automatecally set up subsctiption by the useSelector
  const counter = useSelector(state => state.counter);
   const show = useSelector(state => state.showCounter)

  //use to update the state of the component and return a new state.
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const DecrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const increseHandler = (amount) => {
    dispatch({ type: 'increase', amount: amount })
  }



  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show &&  <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler.bind(null, 5)}>Increase by 5</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Count extends Component {

//   incrementHandler() { }
//   DecrementHandler() { }
//   toggleCounterHandler() { }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.DecrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }

// }

// const mapStateToProps =  state =>{
//   return{
//     counter:state.counter
//   }
// }

// const mapDispatchToPrps = dispatch =>{
// return {
//   increment:()=> dispatch({type:'increment'}),
//   decrement:()=> dispatch({type:'decrement'})
// }
// }

// export default connect(mapStateToProps,mapDispatchToPrps)(Count);

