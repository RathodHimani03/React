import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {

    const [enteredname, setEnteredname] = useState('')
    const [enteredage, setEnteredage] = useState('')
    const [error,setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredname.trim().length === 0 || enteredage.trim().length === 0) {
            setError({
                title:"invalid input",
                message:"Please Enter a valid name and age [non-empty value]"
            })
        }
        if (+enteredage < 1) {
            setError({
                title:"invalid age",
                message:"Please Enter a valid age (>0)"
            })
        }

        props.onAddUser(enteredname, enteredage)
        setEnteredage('')
        setEnteredname('')
    }

    const usernameChangeHandler = (e) => {
        setEnteredname(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setEnteredage(e.target.value)
    }

    const errorHandler =()=>{
       setError(null);
    }

    return (

        <div>
            {error &&<ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input value={enteredname} id="username" type="text" onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age(years)</label>
                    <input value={enteredage} id="age" type="number" onChange={ageChangeHandler} />
                    <Button type="submit" >Add User</Button>
                </form>
            </Card>
        </div>
    );


};


export default AddUser;