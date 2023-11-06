import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

//getting whole object as props
// function ExpenseItem(props) {



//     return (
//         <div className="expense-item">
//             <div>{props.expense.date.toISOString() }</div>
//             <div className='expense-item__description'>
//                 <h2>{props.expense.title}</h2>
//                 <div className='expense-item__price'>${props.expense.amount }</div> 
//             </div>
//         </div>
//     );
// }


//dstructuring getting object
function ExpenseItem(props) {

   const [title,setTitle] = useState(props.title);

   //define function
   const clickHandler =()=>{
    setTitle('Updated!');
    
   }


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            {/* <div>{props.date.toISOString()}</div> */}
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount }</div> 
            </div>
            {/* <button onClick={()=>{console.log('Clicked!')}}>Change Title</button> */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}



export default ExpenseItem;