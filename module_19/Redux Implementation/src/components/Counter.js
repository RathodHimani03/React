import classes from './Counter.module.css';
import { counterActions } from '../store/counter-slice';
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {


  //automatecally set up subsctiption by the useSelector
  const counter = useSelector(state => state.counter.counter);
   const show = useSelector(state => state.counter.showCounter)

  //use to update the state of the component and return a new state.
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const DecrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const increseHandler = (amount) => {
    dispatch(counterActions.increase(amount))
  }



  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
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

