import './ExpenseItem.css';



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
function ExpenseItem({date,title,amount}) {



    return (
        <div className="expense-item">
            <div>{date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount }</div> 
            </div>
        </div>
    );
}



export default ExpenseItem;